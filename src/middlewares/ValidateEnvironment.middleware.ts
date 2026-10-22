import { Request, Response, NextFunction } from 'express';
import { ICreateEnvironmentDTO } from '../dtos/environment.dto';

const isCreateEnvironmentDTO = (value: unknown): value is ICreateEnvironmentDTO => {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        return false;
    }

    const env = value as Record<string, unknown>;
    return (
        typeof env.codigo === 'string' &&
        env.codigo.trim() !== '' &&
        typeof env.bloque === 'string' &&
        env.bloque.trim() !== '' &&
        typeof env.capacidadPCs === 'number' &&
        Number.isInteger(env.capacidadPCs) &&
        env.capacidadPCs > 0
    );
};

export const validateEnvironmentPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;

    if (!isCreateEnvironmentDTO(body)) {
        res.status(400).json({
            success: false,
            error: 'Datos del ambiente inválidos o incompletos.'
        });
        return;
    }

    next();
};
