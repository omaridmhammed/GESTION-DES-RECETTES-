// models/role.js
import { DataTypes } from 'sequelize';
import connexion from '../config/connexion.js';

const Role = connexion.define('Role', {
  nom: { type: DataTypes.STRING, allowNull: false },
});

export default Role;
