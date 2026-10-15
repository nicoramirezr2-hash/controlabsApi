import { Request, Response } from 'express';

export class EnvironmentController {
    public static getAllEnvironments = (req: Request, res: Response): void => {
        res.status(501).json({ 
            success: false, 
            message: 'El listado de ambientes todavía no está implementado.' 
        });
    };

    public static createEnvironment = (req: Request, res: Response): void => {
        res.status(501).json({ 
            success: false, 
            message: 'La creación de un nuevo ambiente todavía no está implementada.' 
        });
    };

    public static updatePartialEnvironment = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({ 
            success: false, 
            message: `La actualización parcial (PATCH) del ambiente ${id} todavía no está implementada.` 
        });
    };
}
