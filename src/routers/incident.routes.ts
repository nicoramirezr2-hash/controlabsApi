import { Router } from 'express';
import { IncidentController } from '../controllers/incident.controller';

const router = Router();

router.post('/', IncidentController.createIncident);
router.get('/', IncidentController.getAllIncidents);
router.patch('/:id', IncidentController.updatePartialIncident); 

export default router;
