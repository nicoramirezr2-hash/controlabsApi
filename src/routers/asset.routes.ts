import { Router } from 'express';
import { AssetController } from '../controllers/asset.controller';

const router = Router();

router.post('/', AssetController.createAsset);
router.get('/', AssetController.getAssets);
router.patch('/:id', AssetController.updatePartialAsset); 

export default router;
