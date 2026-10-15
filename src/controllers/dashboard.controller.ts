import { Request, Response } from 'express';

export class DashboardController {
    public static getSummary = (req: Request, res: Response): void => {
        res.status(501).json({ 
            success: false, 
            message: 'El servicio de métricas y contadores consolidados del dashboard todavía no está implementado.' 
        });
    };
}
