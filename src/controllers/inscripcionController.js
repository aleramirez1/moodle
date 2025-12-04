const inscripcionService = require('../services/inscripcionService');

class InscripcionController {
  // Inscribir alumno a asignatura
  async inscribirAlumno(req, res, next) {
    try {
      const { alumnoId, asignaturaId, grupoId } = req.body;
      const result = await inscripcionService.inscribirAlumno(alumnoId, asignaturaId, grupoId);
      res.status(201).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  // Desinscribir alumno
  async desinscribirAlumno(req, res, next) {
    try {
      const result = await inscripcionService.desinscribirAlumno(req.params.id);
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }

  // Obtener inscripciones de un alumno
  async getInscripcionesByAlumno(req, res, next) {
    try {
      const inscripciones = await inscripcionService.getInscripcionesByAlumno(req.params.alumnoId);
      res.json({ success: true, data: inscripciones });
    } catch (error) {
      next(error);
    }
  }

  // Obtener alumnos de una asignatura y grupo
  async getAlumnosByAsignaturaGrupo(req, res, next) {
    try {
      const { asignaturaId, grupoId } = req.params;
      const alumnos = await inscripcionService.getAlumnosByAsignaturaGrupo(asignaturaId, grupoId);
      res.json({ success: true, data: alumnos });
    } catch (error) {
      next(error);
    }
  }

  // Asignar docente a asignatura
  async asignarDocente(req, res, next) {
    try {
      const { docenteId, asignaturaId, grupoId } = req.body;
      const result = await inscripcionService.asignarDocente(docenteId, asignaturaId, grupoId);
      res.status(201).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  // Desasignar docente
  async desasignarDocente(req, res, next) {
    try {
      const result = await inscripcionService.desasignarDocente(req.params.id);
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }

  // Obtener asignaciones de un docente
  async getAsignacionesByDocente(req, res, next) {
    try {
      const asignaciones = await inscripcionService.getAsignacionesByDocente(req.params.docenteId);
      res.json({ success: true, data: asignaciones });
    } catch (error) {
      next(error);
    }
  }

  // Obtener docentes de una asignatura y grupo
  async getDocentesByAsignaturaGrupo(req, res, next) {
    try {
      const { asignaturaId, grupoId } = req.params;
      const docentes = await inscripcionService.getDocentesByAsignaturaGrupo(asignaturaId, grupoId);
      res.json({ success: true, data: docentes });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new InscripcionController();
