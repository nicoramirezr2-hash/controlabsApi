import { Router } from 'express';
import { AssetController } from '../controllers/asset.controller';
import { validateAssetPayload } from '../middlewares/validate.asset.middleware';

const router = Router();

router.post('/', validateAssetPayload, AssetController.createAsset);
router.post('/', AssetController.createAsset);
router.get('/', AssetController.getAssets);
router.patch('/:id', AssetController.updatePartialAsset); 

export default router;
