const { request, response } = require("express");
const Evento = require("../Models/Evento");
const getEventos = async (req = request, res = response) => {
  const eventos = await Evento.find().populate("user", "email name");
  res.json({
    eventos,
  });
};
const crearEvento = async (req, res) => {
  //verificar que tenga el evento
  const evento = new Evento(req.body);
  try {
    evento.user = req.uid;
    const eventoDb = await evento.save();
    res.json({
      eventoDb,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Fallo al registrar Evento",
    });
  }
};
const actualizarEvento = async (req, res) => {
  const { id } = req.params;
  const uid = req.uid;
  try {
    const evento = await Evento.findById(id);
    if (!evento) {
      return res.status(404).json({
        msg: "evento no existe por ese id",
      });
    }
    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        msg: "no tiene privilegio para actualizar este evento",
      });
    }
    const newEvent = {
      ...req.body,
      user: uid,
    };
    const updatedEvent = await Evento.findByIdAndUpdate(id, newEvent, {
      new: true,
    });
    res.json({
      evento: updatedEvent,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "falla en actualizar evento",
    });
  }
};
const eliminarEvento = async (req, res) => {
  const { id } = req.params;
  const uid = req.uid;
  try {
    const eventoExiste = await Evento.findById(id);
    if (!eventoExiste) {
      return res.status(404).json({
        msg: "el evento no existe en la db",
      });
    }
    if (eventoExiste.user.toString() !== uid) {
      return res.status(501).json({
        msg: "no tiene permiso para borrar este evento",
      });
    }
    const deletedEvent = await Evento.findByIdAndDelete(id).populate(
      "user",
      "name email"
    );
    res.json({
      eventoBorrado: deletedEvent,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "error al  borrar el evento",
    });
  }
};
module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
