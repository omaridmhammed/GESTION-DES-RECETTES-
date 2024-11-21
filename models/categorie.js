// models/categorie.js
import { DataTypes } from 'sequelize';
import connexion from '../config/connexion.js';

const Categorie = connexion.define('Categorie', {
  nom: { type: DataTypes.STRING, allowNull: false },
});

export default Categorie;
