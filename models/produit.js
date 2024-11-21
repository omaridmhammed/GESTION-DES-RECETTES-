// models/produit.js
import { DataTypes } from 'sequelize';
import connexion from '../config/connexion.js';

const Produit = connexion.define('Produit', {
  nom: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  prix: { type: DataTypes.FLOAT, allowNull: false },
  quantite: { type: DataTypes.INTEGER, allowNull: false },
});

export default Produit;
