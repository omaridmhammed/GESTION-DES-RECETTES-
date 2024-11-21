// models/panier.js
import { DataTypes } from 'sequelize';
import connexion from '../config/connexion.js';

const Panier = connexion.define('Panier', {
  utilisateurId: { type: DataTypes.INTEGER, allowNull: false },
  produitId: { type: DataTypes.INTEGER, allowNull: false },
  quantite: { type: DataTypes.INTEGER, allowNull: false },
});

export default Panier;
