const programaEstudioService = require('../services/programaEstudioService');

class ProgramaEstudioController {
  async getAll(req, res, next) {
    try {
      const programas = await programaEstudioService.getAllProgramas();
      res.json({ success: true, data: programas });
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const programa = await programaEstudioService.getProgramaById(req.params.id);
      res.json({ success: true, data: programa });
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const { nombre } = req.body;
      const programa = await programaEstudioService.createPrograma(nombre);
      res.status(201).json({ success: true, data: programa });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { nombre } = req.body;
      const programa = await programaEstudioService.updatePrograma(req.params.id, nombre);
      res.json({ success: true, data: programa });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await programaEstudioService.deletePrograma(req.params.id);
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }

  async getAsignaturas(req, res, next) {
    try {
      const asignaturas = await programaEstudioService.getProgramaAsignaturas(req.params.id);
      res.json({ success: true, data: asignaturas });
    } catch (error) {
      next(error);
    }
  }

  async addAsignatura(req, res, next) {
    try {
      const { asignaturaId } = req.body;
      const result = await programaEstudioService.addAsignaturaToPrograma(req.params.id, asignaturaId);
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProgramaEstudioController();
