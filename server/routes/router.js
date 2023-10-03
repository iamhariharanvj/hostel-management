import express from 'express';
import studentRoutes from './student/index.js';

const router = express.Router();

router.use('/students', studentRoutes);

export default router;
