import express from 'express';
import { getProduits, createProduit } from '../controllers/produitController.js';
const router = express.Router();

router.get('/', getProduits); // Récupération des produits avec pagination
router.post('/', createProduit); // Création d'un produit

export default router;
