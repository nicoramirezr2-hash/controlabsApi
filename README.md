# ControlLabs API

La API usa Express, PostgreSQL y Prisma. El módulo de préstamos persiste los datos y expone:

- `POST /api/v1/loans`
- `GET /api/v1/loans/search?roomId=<uuid>`
- `GET /api/v1/loans/:id`
- `PUT /api/v1/loans/:id/accept`

## Configuración

1. Copie `.env.example` a `.env` y complete las variables `PG*`.
2. Cree la base de datos y ejecute `bd.sql`.
3. Instale dependencias: `npm install`.
4. Genere el cliente Prisma: `npm run db:generate`.
5. Compile y ejecute: `npm run build` y `npm run dev`.

El servidor comprueba la conexión con PostgreSQL antes de comenzar a escuchar peticiones. El cuerpo para crear un préstamo es:

```json
{
  "roomId": "UUID de una sala existente",
  "instructorId": "UUID de un instructor existente",
  "guardaId": "UUID de un guarda existente",
  "numeroPc": 1
}
```

Las restricciones SQL se conservan en `bd.sql`; Prisma mapea las columnas `snake_case` a propiedades TypeScript en `camelCase`.
