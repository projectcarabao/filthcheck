import express, { Router } from 'express';

import { detectImageController } from '@/controllers/detect-controllers';

const router: Router = express.Router();

router.post('/image/:imageURL', detectImageController);


export default router