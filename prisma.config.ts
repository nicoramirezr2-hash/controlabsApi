import { defineConfig } from 'prisma/config';
import { getDatabaseUrl } from './src/config/database';

const databaseUrl = getDatabaseUrl();
process.env.DATABASE_URL = databaseUrl;

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: databaseUrl
  }
});
