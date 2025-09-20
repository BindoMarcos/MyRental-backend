// src/middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Extendemos la interfaz de Request para añadirle la propiedad 'user'
// Esto permite que los controladores tengan acceso a los datos del usuario autenticado
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // Extraer el token del encabezado 'Authorization'
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // El formato es "Bearer TOKEN"

  // Si no hay token, devolver un error 401 (Unauthorized)
  if (token == null) {
    return res.status(401).json({ message: 'Authorization token not provided.' });
  }

  // Verificar el token
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = user; // Almacenar los datos del usuario en el objeto de la petición
    next(); // Pasar al siguiente middleware o controlador
  } catch (error) {
    // Si el token no es válido, devolver un error 403 (Forbidden)
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
};