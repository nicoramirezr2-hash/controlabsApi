import 'dotenv/config'; 
import app from './src/app';
import { prisma } from './src/db/prisma';

const PORT = process.env.PORT || 5000;
let server: ReturnType<typeof app.listen> | undefined;

const startServer = async (): Promise<void> => {
  try {
    await prisma.$connect();
    server = app.listen(PORT, () => {
      console.log(`🚀 Servidor ControlLabs corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('No fue posible conectar con PostgreSQL.', error);
    await prisma.$disconnect();
    process.exitCode = 1;
  }
};

const shutdown = (signal: string): void => {
  console.log(`Recibida señal ${signal}. Cerrando ControlLabs...`);
  server?.close(() => {
    void prisma.$disconnect().finally(() => process.exit(0));
  });
};

process.once('SIGINT', () => shutdown('SIGINT'));
process.once('SIGTERM', () => shutdown('SIGTERM'));

void startServer();
