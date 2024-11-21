// models/permission.js
import { DataTypes } from 'sequelize';
import connexion from '../config/connexion.js';

const Permission = connexion.define('Permission', {
  nom: { type: DataTypes.STRING, allowNull: false },
});

export default Permission;
