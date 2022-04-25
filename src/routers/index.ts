import { Router } from 'express';
import userRouter from './userRouter.js';
import disciplinesRouter from './disciplinesRouter.js';

const router = Router();
router.use(userRouter);
router.use(disciplinesRouter);

export default router;
