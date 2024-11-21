// models/utilisateur.js
import { DataTypes } from 'sequelize';
import connexion from '../config/connexion.js';

const Utilisateur = connexion.define('Utilisateur', {
  nom: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  mot_de_passe: { type: DataTypes.STRING, allowNull: false },
});

export default Utilisateur;
