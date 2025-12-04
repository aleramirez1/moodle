const docenteService = require('../services/docenteService');

class DocenteController {
  async getAll(req, res, next) {
    try {
      const docentes = await docenteService.getAllDocentes();
      res.json({ success: true, data: docentes });
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const docente = await docenteService.getDocenteById(req.params.id);
      res.json({ success: true, data: docente });
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const { nombre } = req.body;
      const docente = await docenteService.createDocente(nombre);
      res.status(201).json({ success: true, data: docente });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { nombre } = req.body;
      const docente = await docenteService.updateDocente(req.params.id, nombre);
      res.json({ success: true, data: docente });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await docenteService.deleteDocente(req.params.id);
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }

  async getAsignaturas(req, res, next) {
    try {
      const asignaturas = await docenteService.getDocenteAsignaturas(req.params.id);
      res.json({ success: true, data: asignaturas });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new DocenteController();
