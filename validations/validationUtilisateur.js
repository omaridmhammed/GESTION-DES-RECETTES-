import { body } from 'express-validator';

export const inscriptionValidation = [
  body('nom')
    .notEmpty().withMessage('Le nom est requis')
    .isLength({ min: 2 }).withMessage('Le nom doit contenir au moins 2 caractères'),
  body('email')
    .isEmail().withMessage('Email invalide'),
  body('mot_de_passe')
    .isLength({ min: 6 }).withMessage('Le mot de passe doit avoir au moins 6 caractères')
    .matches(/[0-9]/).withMessage('Le mot de passe doit contenir au moins un chiffre')
    .matches(/[A-Z]/).withMessage('Le mot de passe doit contenir au moins une lettre majuscule')
    .matches(/[a-z]/).withMessage('Le mot de passe doit contenir au moins une lettre minuscule')
    .matches(/[@$!%*?&#]/).withMessage('Le mot de passe doit contenir au moins un caractère spécial'),
];

export const connexionValidation = [
  body('email').isEmail().withMessage('Email invalide'),
  body('mot_de_passe').notEmpty().withMessage('Le mot de passe est requis'),
];
