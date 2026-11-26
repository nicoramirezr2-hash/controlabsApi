import { NextFunction, Request, Response } from 'express';
import { ICreateLoanDTO } from '../dtos/loan.dto';

const isUuid = (value: unknown): value is string =>
  typeof value === 'string' &&
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);

const isCreateLoanDTO = (value: unknown): value is ICreateLoanDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const loan = value as Record<string, unknown>;
  return (
    Object.keys(loan).every((key) =>
      new Set(['roomId', 'instructorId', 'guardaId', 'numeroPc']).has(key)
    ) &&
    isUuid(loan.roomId) &&
    isUuid(loan.instructorId) &&
    isUuid(loan.guardaId) &&
    typeof loan.numeroPc === 'number' &&
    Number.isInteger(loan.numeroPc)
  );
};

export const validateLoanPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!isCreateLoanDTO(req.body)) {
    res.status(400).json({
      success: false,
      error: 'Datos del préstamo inválidos.'
    });
    return;
  }

  next();
};
