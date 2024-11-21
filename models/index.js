import connexion from '../config/connexion.js';
import Utilisateur from './utilisateur.js';
import Produit from './produit.js';
import Commande from './commande.js';
import Categorie from './categorie.js';
import Commentaire from './commentaire.js';
import Role from './role.js';
import Permission from './permission.js';
import Panier from './panier.js';

// Relations
Utilisateur.belongsTo(Role, { foreignKey: 'roleId', as: 'role' });
Role.hasMany(Utilisateur, { foreignKey: 'roleId', as: 'utilisateurs' });

Commentaire.belongsTo(Utilisateur, { foreignKey: 'utilisateurId', as: 'utilisateur' });
Commentaire.belongsTo(Produit, { foreignKey: 'produitId', as: 'produit' });

Produit.hasMany(Commentaire, { foreignKey: 'produitId', as: 'commentaires' });
Produit.belongsTo(Categorie, { foreignKey: 'categorieId', as: 'categorie' });

Panier.belongsTo(Utilisateur, { foreignKey: 'utilisateurId', as: 'utilisateur' });
Panier.belongsTo(Produit, { foreignKey: 'produitId', as: 'produit' });

export {
  connexion,
  Utilisateur,
  Produit,
  Commande,
  Categorie,
  Commentaire,
  Role,
  Permission,
  Panier
};
