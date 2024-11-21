import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifierToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token manquant' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Token invalide' });
    req.utilisateurId = decoded.id;
    next();
  });
};
