import { Router } from 'express';
import { authenticateToken } from '../middleware/authMiddleware';
import { createTenant, deleteTenant, getTenantByDni, getTenants, updateTenant } from '../controllers/tenantController';

const router = Router();

router.post('/', authenticateToken, createContract);
router.get('/:OwnerId', authenticateToken, getContractByID);
router.put('/:id', authenticateToken, updateContract);
router.delete('/:id', authenticateToken, deleteContract);

export default router;