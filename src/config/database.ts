import 'dotenv/config';

const requiredKeys = ['PGHOST', 'PGPORT', 'PGDATABASE', 'PGUSER', 'PGPASSWORD'] as const;

export const getDatabaseUrl = (environment: NodeJS.ProcessEnv = process.env): string => {
  const missingKeys = requiredKeys.filter((key) => !environment[key]);

  if (missingKeys.length > 0) {
    throw new Error(`Faltan variables de PostgreSQL: ${missingKeys.join(', ')}`);
  }

  const user = encodeURIComponent(environment.PGUSER!);
  const password = encodeURIComponent(environment.PGPASSWORD!);
  const database = encodeURIComponent(environment.PGDATABASE!);
  const schema = encodeURIComponent(environment.PGSCHEMA || 'public');

  return `postgresql://${user}:${password}@${environment.PGHOST}:${environment.PGPORT}/${database}?schema=${schema}`;
};
