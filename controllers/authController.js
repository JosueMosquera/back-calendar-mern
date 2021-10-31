const { request, response } = require("express");
const Usuario = require("../Models/Usuario");
const bcrypt = require("bcryptjs");
const {generarJWT} = require('../helpers/jwt');
const { validarJWT } = require("../middlewares/validar-jwt");

const crearUsuario = async (req = request, res = response) => {
  const { name, email, password } = req.body;
  //manejo de errores
  let usuario = await Usuario.findOne({ email });
  if (usuario) {
    res.status(400).json({
      msg: `el usuario ya existe con el correo ${email}`,
    });
  } else {
    usuario = new Usuario(req.body);
    //encriptar pass
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);
    await usuario.save();
    const token = await generarJWT(usuario.id,usuario.name)
    res.status(201).json({
      msg: "nice registro",
      uid: usuario.id,
      email: usuario.email,
      token
    });
  }
};
const loginUsuario = async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({
        msg: `el usuario no existe con ese email`,
      });
    }
    //confirmar los passwords
    const validPassword = bcrypt.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "Password incorrecta",
      });
    }
    //Generar JWT
    const token = await generarJWT(usuario.id,usuario.name)
    res.json({
      msg: "login",
      uid: usuario.id,
      email: usuario.email,
      token
    });
  } 
  catch (error) {

  }
}
const revalidarToken = async(req, res) => {
    const {uid,name} = req
    const token = await generarJWT(uid,name)
  res.json({
    msg: "revalidar Token",
    token,
    uid,
    name
  });
};
module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
}
