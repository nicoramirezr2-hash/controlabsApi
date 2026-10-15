import express, { Request, Response } from 'express';
import cors from 'cors';
import apiRoutes from './routers';

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", apiRoutes);


app.get('/api/v1/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'ControlLabs API operando correctamente',
    timestamp: new Date().toISOString()
  });
});

export default app;