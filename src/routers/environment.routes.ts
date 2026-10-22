import { Router } from 'express';
import { EnvironmentController } 
from '../controllers/environment.controller';
import { validateEnvironmentPayload } from '../middlewares/ValidateEnvironment.middleware';

const router = Router();
router.post('/', validateEnvironmentPayload, EnvironmentController.createEnvironment);
router.get('/', EnvironmentController.getAllEnvironments);
router.post('/', EnvironmentController.createEnvironment);
router.patch('/:id', EnvironmentController.updatePartialEnvironment); 

export default router;
