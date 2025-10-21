"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticateToken = (req, res, next) => {
    // Extraer el token del encabezado 'Authorization'
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // El formato es "Bearer TOKEN"
    // Si no hay token, devolver un error 401 (Unauthorized)
    if (token == null) {
        return res.status(401).json({ message: 'Authorization token not provided.' });
    }
    // Verificar el token
    try {
        const user = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = user; // Almacenar los datos del usuario en el objeto de la petición
        next(); // Pasar al siguiente middleware o controlador
    }
    catch (error) {
        // Si el token no es válido, devolver un error 403 (Forbidden)
        return res.status(403).json({ message: 'Invalid or expired token.' });
    }
};
exports.authenticateToken = authenticateToken;
