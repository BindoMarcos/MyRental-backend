"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const propertyController_1 = require("../controllers/propertyController");
const router = (0, express_1.Router)();
// Esta ruta está protegida por el middleware de autenticación
router.get('/:id', authMiddleware_1.authenticateToken, propertyController_1.getPropertyByID);
router.get('/', authMiddleware_1.authenticateToken, propertyController_1.getProperties);
router.post('/', authMiddleware_1.authenticateToken, propertyController_1.createProperty);
/* TODO router.put('/:id', authenticateToken, updateProperty);
router.delete('/:id', authenticateToken, deleteProperty); */
exports.default = router;
