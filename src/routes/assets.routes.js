import { Router } from "express";
import * as assetsControllers from "../controllers/assets.controller.js";
const router = Router();

router.post('/', assetsControllers.createAsset);
router.get('/', assetsControllers.getAssets);
router.get('/:assetId', assetsControllers.getAssetById);
router.put('/:assetId', assetsControllers.updateAssetById);
router.delete('/:assetID', assetsControllers.deleteAssetById);


export default router;
