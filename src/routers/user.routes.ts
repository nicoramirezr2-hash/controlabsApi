import { Router } from 'express';
import { UserController } 
from '../controllers/user.controller';

const router = Router();

router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);
router.get('/:id', UserController.getUserById);
router.patch('/:id', UserController.updatePartialUser);
router.delete('/:id', UserController.deleteLogicalUser);

export default router;
