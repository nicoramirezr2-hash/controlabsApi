import { Request, Response } from 'express';

export class IncidentController {
    public static createIncident = (req: Request, res: Response): void => {
        res.status(501).json({ 
            success: false, 
            message: 'El reporte de novedades todavía no está implementado.' 
        });
    };

    public static getAllIncidents = (req: Request, res: Response): void => {
        res.status(501).json({ 
            success: false, 
            message: 'La consulta del historial de incidencias todavía no está implementada.' 
        });
    };

    public static updatePartialIncident = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({ 
            success: false, 
            message: `La actualización parcial del estado de la novedad ${id} todavía no está implementada.` 
        });
    };
}
