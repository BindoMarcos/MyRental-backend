import { Router } from 'express';
import { authenticateToken } from '../middleware/authMiddleware';
import { createTenant, deleteTenant, getTenantByDni, getTenants, updateTenant } from '../controllers/tenantController';

const router = Router();

router.post('/', authenticateToken, createTenant);
router.get('/:dni', authenticateToken, getTenantByDni);
router.get('/', authenticateToken, getTenants);
router.put('/:id', authenticateToken, updateTenant);
router.delete('/:id', authenticateToken, deleteTenant);

export default router;