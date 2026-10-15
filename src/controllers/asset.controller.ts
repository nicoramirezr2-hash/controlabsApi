import { Request, Response } from 'express';

export class AssetController {
    public static createAsset = (req: Request, res: Response): void => {
        res.status(501).json({ 
            success: false, 
            message: 'El registro de un nuevo equipo todavía no está implementado.' 
        });
    };

    public static getAssets = (req: Request, res: Response): void => {
        const { room } = req.query; 
        res.status(501).json({ 
            success: false, 
            message: room 
                ? `La consulta de equipos para el salón ${room} todavía no está implementada.` 
                : 'El listado global de equipos todavía no está implementado.' 
        });
    };

    public static updatePartialAsset = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({ 
            success: false, 
            message: `La actualización parcial (PATCH) del equipo ${id} todavía no está implementada.` 
        });
    };
}
