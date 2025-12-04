const alumnoService = require('../services/alumnoService');

class AlumnoController {
  async getAll(req, res, next) {
    try {
      const alumnos = await alumnoService.getAllAlumnos();
      res.json({ success: true, data: alumnos });
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const alumno = await alumnoService.getAlumnoById(req.params.id);
      res.json({ success: true, data: alumno });
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const { nombre } = req.body;
      const alumno = await alumnoService.createAlumno(nombre);
      res.status(201).json({ success: true, data: alumno });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { nombre } = req.body;
      const alumno = await alumnoService.updateAlumno(req.params.id, nombre);
      res.json({ success: true, data: alumno });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await alumnoService.deleteAlumno(req.params.id);
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }

  async getAsignaturas(req, res, next) {
    try {
      const asignaturas = await alumnoService.getAlumnoAsignaturas(req.params.id);
      res.json({ success: true, data: asignaturas });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AlumnoController();
