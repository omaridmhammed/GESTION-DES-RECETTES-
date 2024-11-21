// models/commande.js
import { DataTypes } from 'sequelize';
import connexion from '../config/connexion.js';

const Commande = connexion.define('Commande', {
  utilisateurId: { type: DataTypes.INTEGER, allowNull: false },
  total: { type: DataTypes.FLOAT, allowNull: false },
  statut: { type: DataTypes.STRING, defaultValue: 'en_attente' },
});

export default Commande;
