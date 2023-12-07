const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const User = require('../models/usuarios');

// Endpoint de inicio de sesión
router.post('/auth', async (req, res) => {
  const { email, pass } = req.body;

  try {
    // Buscar al usuario en la base de datos por correo electrónico y contraseña
    const usuarioEncontrado = await User.findOne({ email, pass });
    req.session.token = null;


    if (!usuarioEncontrado) {
      return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
      
    }

    // Generar token JWT
    const token = jwt.sign({ id: usuarioEncontrado._id, email: usuarioEncontrado.email }, 'secretoJWT', { expiresIn: '60s' });

    // Almacenar el token en la sesión del servidor
    req.session.token = token;

    res.status(200).json({ mensaje: 'Inicio de sesión exitoso', token });

  
  } catch (error) {
    res.status(500).json({ mensaje: 'Error en la autenticación' });
  }
});

module.exports = router;
