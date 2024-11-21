import express from 'express';
import { inscription, connexion } from '../controllers/utilisateurController.js';
import { inscriptionValidation, connexionValidation } from '../validations/validationUtilisateur.js';

import { validationResult } from 'express-validator';

const router = express.Router();

router.post('/inscription', inscriptionValidation, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, inscription);

router.post('/connexion', connexionValidation, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, connexion);

export default router;
