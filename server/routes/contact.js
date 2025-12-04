import express from 'express';
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact
} from '../controller/contactController.js';

const router = express.Router();

// Public route - Submit contact form
router.post('/submit', createContact);

// Admin routes (should be protected with authentication middleware)
router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.patch('/:id/status', updateContactStatus);
router.delete('/:id', deleteContact);

export default router;
