const asignaturaService = require('../services/asignaturaService');

class AsignaturaController {
  async getAll(req, res, next) {
    try {
      const asignaturas = await asignaturaService.getAllAsignaturas();
      res.json({ success: true, data: asignaturas });
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const asignatura = await asignaturaService.getAsignaturaById(req.params.id);
      res.json({ success: true, data: asignatura });
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const { nombre, cuatrimestre, abreviacion } = req.body;
      const asignatura = await asignaturaService.createAsignatura(nombre, cuatrimestre, abreviacion);
      res.status(201).json({ success: true, data: asignatura });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { nombre, cuatrimestre, abreviacion } = req.body;
      const asignatura = await asignaturaService.updateAsignatura(req.params.id, nombre, cuatrimestre, abreviacion);
      res.json({ success: true, data: asignatura });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await asignaturaService.deleteAsignatura(req.params.id);
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AsignaturaController();
