import Produit from '../models/produit.js';

export const getProduits = async (req, res) => {
  const { page = 1, limit = 10, categorie } = req.query;
  try {
    const options = {
      limit: parseInt(limit),
      offset: (parseInt(page) - 1) * parseInt(limit),
      where: categorie ? { categorieId: categorie } : {},
    };

    const produits = await Produit.findAndCountAll(options);
    res.status(200).json({
      total: produits.count,
      pages: Math.ceil(produits.count / limit),
      data: produits.rows,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduit = async (req, res) => {
  const { nom, description, prix, quantite, categorieId } = req.body;
  try {
    const produit = await Produit.create({ nom, description, prix, quantite, categorieId });
    res.status(201).json(produit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
