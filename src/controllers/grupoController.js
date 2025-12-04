const grupoService = require('../services/grupoService');

class GrupoController {
  async getAll(req, res, next) {
    try {
      const grupos = await grupoService.getAllGrupos();
      res.json({ success: true, data: grupos });
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const grupo = await grupoService.getGrupoById(req.params.id);
      res.json({ success: true, data: grupo });
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const { nombre } = req.body;
      const grupo = await grupoService.createGrupo(nombre);
      res.status(201).json({ success: true, data: grupo });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { nombre } = req.body;
      const grupo = await grupoService.updateGrupo(req.params.id, nombre);
      res.json({ success: true, data: grupo });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await grupoService.deleteGrupo(req.params.id);
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new GrupoController();
