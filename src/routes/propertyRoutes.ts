import { Router } from 'express';
import { authenticateToken } from '../middleware/authMiddleware';
import { createProperty, deleteProperty, getProperties, getPropertyByID, updateProperty } from '../controllers/propertyController';

const router = Router();

router.get('/:id', authenticateToken, getPropertyByID);
router.get('/owner/:ownerID', authenticateToken, getProperties)
router.post('/', authenticateToken, createProperty);
router.put('/:id', authenticateToken, updateProperty);
router.delete('/:id', authenticateToken, deleteProperty); 

export default router;
