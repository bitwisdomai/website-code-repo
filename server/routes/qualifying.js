import express from 'express';
import {
  createQualifyingApplication,
  getAllQualifyingApplications,
  getQualifyingApplicationById,
  updateApplicationStatus,
  deleteQualifyingApplication,
  upload
} from '../controller/qualifyingController.js';

const router = express.Router();

// Public route - Submit qualifying application
router.post(
  '/submit',
  upload.fields([
    { name: 'photoId', maxCount: 1 },
    { name: 'articlesOfIncorporation', maxCount: 1 },
    { name: 'certificateOfIncorporation', maxCount: 1 },
    { name: 'proofOfAddress', maxCount: 1 }
  ]),
  createQualifyingApplication
);

// Admin routes (should be protected with authentication middleware)
router.get('/', getAllQualifyingApplications);
router.get('/:id', getQualifyingApplicationById);
router.patch('/:id/status', updateApplicationStatus);
router.delete('/:id', deleteQualifyingApplication);

export default router;
