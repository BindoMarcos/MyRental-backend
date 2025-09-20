import { Router } from 'express';
import { authenticateToken } from '../middleware/authMiddleware';
import { createProperty, getProperties, getPropertyByID } from '../controllers/propertyController';

const router = Router();

// Esta ruta está protegida por el middleware de autenticación
router.get('/:id', authenticateToken, getPropertyByID);
router.get('/', authenticateToken, getProperties)
router.post('/', authenticateToken, createProperty);
/* TODO router.put('/:id', authenticateToken, updateProperty);
router.delete('/:id', authenticateToken, deleteProperty); */

export default router;