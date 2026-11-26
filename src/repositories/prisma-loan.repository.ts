import { Loan as PrismaLoan, Prisma, PrismaClient } from '@prisma/client';
import { ICreateLoanDTO } from '../dtos/loan.dto';
import { DomainError } from '../errors/domain.error';
import { Loan, LoanFilters, LoanRepository, LoanStatus } from './loan.repository';

const toLoan = (loan: PrismaLoan): Loan => ({
  id: loan.id.toString(),
  roomId: loan.roomId,
  instructorId: loan.instructorId,
  guardaId: loan.guardaId,
  numeroPc: loan.numeroPc,
  estado: loan.estado as LoanStatus,
  createdAt: loan.createdAt.toISOString(),
  acceptedAt: loan.acceptedAt?.toISOString() ?? null
});

export class PrismaLoanRepository implements LoanRepository {
  constructor(private readonly database: PrismaClient) {}

  public async create(input: ICreateLoanDTO): Promise<Loan> {
    try {
      const loan = await this.database.loan.create({
        data: input
      });
      return toLoan(loan);
    } catch (error) {
      this.rethrowKnownPersistenceError(error);
    }
  }

  public async findAll(filters: LoanFilters = {}): Promise<Loan[]> {
    const rows = await this.database.loan.findMany({
      where: filters.roomId ? { roomId: filters.roomId } : undefined,
      orderBy: { createdAt: 'desc' }
    });
    return rows.map(toLoan);
  }

  public async findById(id: string): Promise<Loan | null> {
    const loan = await this.database.loan.findUnique({
      where: { id: BigInt(id) }
    });
    return loan ? toLoan(loan) : null;
  }

  public async updateStatus(
    id: string,
    expectedStatus: LoanStatus,
    status: LoanStatus
  ): Promise<Loan | null> {
    const loanId = BigInt(id);
    const changed = await this.database.loan.updateMany({
      where: { id: loanId, estado: expectedStatus },
      data: { estado: status, acceptedAt: new Date() }
    });

    if (changed.count === 0) {
      return null;
    }

    const loan = await this.database.loan.findUniqueOrThrow({ where: { id: loanId } });
    return toLoan(loan);
  }

  private rethrowKnownPersistenceError(error: unknown): never {
    if (error instanceof Prisma.PrismaClientKnownRequestError && ['P2003', 'P2004'].includes(error.code)) {
      throw new DomainError(
        'VALIDATION_ERROR',
        'Los datos del préstamo incumplen una restricción de la base de datos.'
      );
    }

    throw error;
  }
}
