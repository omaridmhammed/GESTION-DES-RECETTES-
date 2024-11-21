import express from 'express';
import dotenv from 'dotenv';
import { connexion, Utilisateur, Produit, Commande, Categorie, Commentaire, Role, Permission, Panier } from './models/index.js';
import utilisateursRoutes from './routes/utilisateurs.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware pour parser le JSON
app.use(express.json());

// Middleware pour enregistrer les logs des requêtes HTTP
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route principale pour vérifier l'état de l'API
app.get('/', (req, res) => {
  res.send('Bienvenue dans l\'API de gestion des recettes !');
});

// Routes utilisateurs
app.use('/api/utilisateurs', utilisateursRoutes);

// Connexion à la base de données et synchronisation des modèles
connexion.authenticate()
  .then(() => {
    console.log('Connexion à la base de données établie');

    // Synchroniser les modèles (éviter force:true en production)
    connexion.sync({ alter: true })
      .then(() => console.log("Les tables ont été synchronisées avec succès"))
      .catch(err => console.error("Erreur lors de la synchronisation des tables :", err));
  })
  .catch(err => {
    console.error('Erreur de connexion à la base de données :', err.message);
    process.exit(1); // Arrête le serveur si la connexion échoue
  });

// Lancement du serveur
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
