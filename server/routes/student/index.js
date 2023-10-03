import express from 'express';
import complaintRoutes from './complaintRoutes.js';

const router = express.Router();

router.use('/complaints', complaintRoutes);

export default router;
