import express, { Request, Response } from 'express';
import cors from 'cors';
import loanRoutes from './routers/loan.routes';
import {requestLogger} from './middlewares/logger.middleware';
import {globalErrorHandler} from './middlewares/errorHandler.middleware';
import apiRoutes from './routers';

const app = express();

app.use(cors()); 
app.use(express.json()); 
app.use(requestLogger); 
app.use('/api/v1/loans', loanRoutes); 
app.use((_req, res) => { res.status(404).json({ success: false, error: 'Ruta no encontrada.' }); }); 
app.use(globalErrorHandler);

app.get('/api/v1/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'ControlLabs API operando correctamente',
    timestamp: new Date().toISOString()
  });
});

export default app;




