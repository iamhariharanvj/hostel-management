import express from 'express';
import * as ComplaintsController from '../../controllers/student/complaintsController.js';
const router = express.Router();

router.get('/get', ComplaintsController.getComplaints);
router.post('/create', ComplaintsController.createComplaint);
router.post(
    '/:complaintId/status/change',
    ComplaintsController.changeStatusComplaint,
);
router.post('/:complaintId/upvote', ComplaintsController.upvoteComplaint);
router.post('/:complaintId/downvote', ComplaintsController.downvoteComplaint);

export default router;
