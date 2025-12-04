import express from 'express';
import {
  addToWaitlist,
  getAllWaitlistEntries,
  getWaitlistStats,
  updateWaitlistStatus,
  deleteWaitlistEntry,
  getWaitlistEntryById
} from '../controller/waitlistController.js';

const router = express.Router();

// Public route - Join waitlist
router.post('/join', addToWaitlist);

// Admin routes (should be protected with authentication middleware)
router.get('/', getAllWaitlistEntries);
router.get('/stats', getWaitlistStats);
router.get('/:id', getWaitlistEntryById);
router.patch('/:id/status', updateWaitlistStatus);
router.delete('/:id', deleteWaitlistEntry);

export default router;
