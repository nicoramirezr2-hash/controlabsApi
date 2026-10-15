import { Request, Response } from 'express';

export class UserController {
    public static getAllUsers = (req: Request, res: Response): void => {
        res.status(501).json({ 
            success: false, 
            message: 'El listado completo de usuarios todavía no está implementado.' 
        });
    };

    public static createUser = (req: Request, res: Response): void => {
        res.status(501).json({ 
            success: false, 
            message: 'El registro de un nuevo perfil de usuario todavía no está implementado.' 
        });
    };

    public static getUserById = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({ 
            success: false, 
            message: `La consulta de los detalles del usuario ${id} todavía no está implementada.` 
        });
    };

    public static updatePartialUser = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({ 
            success: false, 
            message: `La actualización parcial (PATCH) del usuario ${id} todavía no está implementada.` 
        });
    };


    public static deleteLogicalUser = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({ 
            success: false, 
            message: `La eliminación lógica del usuario ${id} todavía no está implementada.` 
        });
    };
}
