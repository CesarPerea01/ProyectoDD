const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    // Obtener el token almacenado en la sesión del servidor
    const token = req.session.token;
  
    console.log('Token recibido:', token);
  
    if (!token) {
      console.log('Token no proporcionado.');
      return res.status(401).json({ mensaje: 'Acceso denegado. Identifiquese.' });
    }
  
    try {
      const usuarioVerificado = jwt.verify(token, 'secretoJWT'); // Cambiar a una clave segura en producción
      req.usuario = usuarioVerificado;
      next();
    } catch (error) {
      console.log('Token no válido.');
      res.status(400).json({ mensaje: 'Token no válido o expirado.' });
    }
};
  
module.exports = verificarToken;