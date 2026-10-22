import { Request, Response, NextFunction } from 'express';

import { ICreateAssetDTO } from '../dtos/asset';

const isCreateAssetDTO = (value: unknown): value is ICreateAssetDTO => {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        return false;
    }

    const env = value as Record<string, unknown>;
    return (
        typeof env.codigo === 'string' &&
        env.codigo.trim() !== '' &&
        typeof env.nombre === 'string' &&
        env.nombre.trim() !== '' &&
        typeof env.descripcion === 'string' &&
        env.descripcion.trim() !== '' &&
        typeof env.cantidad === 'number' &&
        Number.isInteger(env.cantidad) &&
        env.cantidad > 0
    );
};

export const validateAssetPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;

    if (!isCreateAssetDTO(body)) {
        res.status(400).json({
            success: false,
            error: 'Datos del activo inválidos o incompletos.'
        });
        return;
    }

    next();
};
