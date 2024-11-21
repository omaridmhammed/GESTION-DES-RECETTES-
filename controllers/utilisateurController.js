import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Utilisateur from '../models/utilisateur.js';

export const inscription = async (req, res) => {
  const { nom, email, mot_de_passe } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(mot_de_passe, 10);
    const utilisateur = await Utilisateur.create({ nom, email, mot_de_passe: hashedPassword });
    res.status(201).json({ data: utilisateur });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const connexion = async (req, res) => {
  const { email, mot_de_passe } = req.body;
  try {
    const utilisateur = await Utilisateur.findOne({ where: { email } });
    if (!utilisateur) return res.status(404).json({ message: "Cet utilisateur n'existe pas" });

    const verifyPassword = bcrypt.compareSync(mot_de_passe, utilisateur.mot_de_passe);
    if (!verifyPassword) return res.status(401).json({ message: "Mot de passe incorrect" });

    const payload = { id: utilisateur.id };
    const token = jwt.sign(payload, 'votre_clef_secrete', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};