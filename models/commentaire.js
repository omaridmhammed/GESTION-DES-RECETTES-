// models/commentaire.js
import { DataTypes } from 'sequelize';
import connexion from '../config/connexion.js';

const Commentaire = connexion.define('Commentaire', {
  utilisateurId: { type: DataTypes.INTEGER, allowNull: false },
  produitId: { type: DataTypes.INTEGER, allowNull: false },
  contenu: { type: DataTypes.TEXT, allowNull: false },
});

export default Commentaire;
