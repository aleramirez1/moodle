const inscripcionRepository = require('../repositories/inscripcionRepository');
const alumnoRepository = require('../repositories/alumnoRepository');
const asignaturaRepository = require('../repositories/asignaturaRepository');
const grupoRepository = require('../repositories/grupoRepository');
const docenteRepository = require('../repositories/docenteRepository');

class InscripcionService {
 
  async inscribirAlumno(alumnoId, asignaturaId, grupoId) {
   
    const alumno = await alumnoRepository.findById(alumnoId);
    if (!alumno) {
      const error = new Error('Alumno no encontrado');
      error.statusCode = 404;
      throw error;
    }

    const asignatura = await asignaturaRepository.findById(asignaturaId);
    if (!asignatura) {
      const error = new Error('Asignatura no encontrada');
      error.statusCode = 404;
      throw error;
    }

    const grupo = await grupoRepository.findById(grupoId);
    if (!grupo) {
      const error = new Error('Grupo no encontrado');
      error.statusCode = 404;
      throw error;
    }

    // verifica si eta inscrito
    const inscripcionExistente = await inscripcionRepository.verificarInscripcion(
      alumnoId,
      asignaturaId,
      grupoId
    );

    if (inscripcionExistente) {
      const error = new Error('El alumno ya está inscrito en esta asignatura y grupo');
      error.statusCode = 400;
      throw error;
    }

    const inscripcionId = await inscripcionRepository.inscribirAlumno(
      alumnoId,
      asignaturaId,
      grupoId
    );

    return {
      id: inscripcionId,
      alumno: alumno.nombre,
      asignatura: asignatura.nombre,
      grupo: grupo.nombre,
      message: 'Alumno inscrito exitosamente'
    };
  }

  
  async desinscribirAlumno(inscripcionId) {
    const affectedRows = await inscripcionRepository.desinscribirAlumno(inscripcionId);
    if (affectedRows === 0) {
      const error = new Error('Inscripción no encontrada');
      error.statusCode = 404;
      throw error;
    }
    return { message: 'Alumno desinscrito exitosamente' };
  }

 
  async getInscripcionesByAlumno(alumnoId) {
    const alumno = await alumnoRepository.findById(alumnoId);
    if (!alumno) {
      const error = new Error('Alumno no encontrado');
      error.statusCode = 404;
      throw error;
    }
    return await inscripcionRepository.getInscripcionesByAlumno(alumnoId);
  }

 
  async getAlumnosByAsignaturaGrupo(asignaturaId, grupoId) {
    const asignatura = await asignaturaRepository.findById(asignaturaId);
    if (!asignatura) {
      const error = new Error('Asignatura no encontrada');
      error.statusCode = 404;
      throw error;
    }

    const grupo = await grupoRepository.findById(grupoId);
    if (!grupo) {
      const error = new Error('Grupo no encontrado');
      error.statusCode = 404;
      throw error;
    }

    return await inscripcionRepository.getAlumnosByAsignaturaGrupo(asignaturaId, grupoId);
  }

  async asignarDocente(docenteId, asignaturaId, grupoId) {
   
    const docente = await docenteRepository.findById(docenteId);
    if (!docente) {
      const error = new Error('Docente no encontrado');
      error.statusCode = 404;
      throw error;
    }

    const asignatura = await asignaturaRepository.findById(asignaturaId);
    if (!asignatura) {
      const error = new Error('Asignatura no encontrada');
      error.statusCode = 404;
      throw error;
    }

    const grupo = await grupoRepository.findById(grupoId);
    if (!grupo) {
      const error = new Error('Grupo no encontrado');
      error.statusCode = 404;
      throw error;
    }

   
    const asignacionExistente = await inscripcionRepository.verificarAsignacionDocente(
      docenteId,
      asignaturaId,
      grupoId
    );

    if (asignacionExistente) {
      const error = new Error('El docente ya está asignado a esta asignatura y grupo');
      error.statusCode = 400;
      throw error;
    }

    const asignacionId = await inscripcionRepository.asignarDocente(
      docenteId,
      asignaturaId,
      grupoId
    );

    return {
      id: asignacionId,
      docente: docente.nombre,
      asignatura: asignatura.nombre,
      grupo: grupo.nombre,
      message: 'Docente asignado exitosamente'
    };
  }

 
  async desasignarDocente(asignacionId) {
    const affectedRows = await inscripcionRepository.desasignarDocente(asignacionId);
    if (affectedRows === 0) {
      const error = new Error('Asignación no encontrada');
      error.statusCode = 404;
      throw error;
    }
    return { message: 'Docente desasignado exitosamente' };
  }

 
  async getAsignacionesByDocente(docenteId) {
    const docente = await docenteRepository.findById(docenteId);
    if (!docente) {
      const error = new Error('Docente no encontrado');
      error.statusCode = 404;
      throw error;
    }
    return await inscripcionRepository.getAsignacionesByDocente(docenteId);
  }

 
  async getDocentesByAsignaturaGrupo(asignaturaId, grupoId) {
    const asignatura = await asignaturaRepository.findById(asignaturaId);
    if (!asignatura) {
      const error = new Error('Asignatura no encontrada');
      error.statusCode = 404;
      throw error;
    }

    const grupo = await grupoRepository.findById(grupoId);
    if (!grupo) {
      const error = new Error('Grupo no encontrado');
      error.statusCode = 404;
      throw error;
    }

    return await inscripcionRepository.getDocentesByAsignaturaGrupo(asignaturaId, grupoId);
  }

  async actualizarInscripcionAlumno(inscripcionId, asignaturaId, grupoId) {
    const inscripcion = await inscripcionRepository.verificarInscripcionPorId(inscripcionId);
    if (!inscripcion) {
      const error = new Error('Inscripción no encontrada');
      error.statusCode = 404;
      throw error;
    }

    const asignatura = await asignaturaRepository.findById(asignaturaId);
    if (!asignatura) {
      const error = new Error('Asignatura no encontrada');
      error.statusCode = 404;
      throw error;
    }

    const grupo = await grupoRepository.findById(grupoId);
    if (!grupo) {
      const error = new Error('Grupo no encontrado');
      error.statusCode = 404;
      throw error;
    }

    const inscripcionExistente = await inscripcionRepository.verificarInscripcion(
      inscripcion.alumno_id,
      asignaturaId,
      grupoId
    );

    if (inscripcionExistente && inscripcionExistente.id !== inscripcionId) {
      const error = new Error('El alumno ya está inscrito en esta asignatura y grupo');
      error.statusCode = 400;
      throw error;
    }

    const affectedRows = await inscripcionRepository.actualizarInscripcionAlumno(
      inscripcionId,
      asignaturaId,
      grupoId
    );

    if (affectedRows === 0) {
      const error = new Error('No se pudo actualizar la inscripción');
      error.statusCode = 400;
      throw error;
    }

    const inscripcionActualizada = await inscripcionRepository.verificarInscripcionPorId(inscripcionId);
    const alumno = await alumnoRepository.findById(inscripcionActualizada.alumno_id);
    
    return {
      id: inscripcionId,
      alumno: alumno.nombre,
      asignatura: asignatura.nombre,
      grupo: grupo.nombre,
      message: 'Inscripción actualizada exitosamente'
    };
  }

  async actualizarAsignacionDocente(asignacionId, asignaturaId, grupoId) {
    const asignacion = await inscripcionRepository.verificarAsignacionPorId(asignacionId);
    if (!asignacion) {
      const error = new Error('Asignación no encontrada');
      error.statusCode = 404;
      throw error;
    }

    const asignatura = await asignaturaRepository.findById(asignaturaId);
    if (!asignatura) {
      const error = new Error('Asignatura no encontrada');
      error.statusCode = 404;
      throw error;
    }

    const grupo = await grupoRepository.findById(grupoId);
    if (!grupo) {
      const error = new Error('Grupo no encontrado');
      error.statusCode = 404;
      throw error;
    }

    const asignacionExistente = await inscripcionRepository.verificarAsignacionDocente(
      asignacion.docente_id,
      asignaturaId,
      grupoId
    );

    if (asignacionExistente && asignacionExistente.id !== asignacionId) {
      const error = new Error('El docente ya está asignado a esta asignatura y grupo');
      error.statusCode = 400;
      throw error;
    }

    const affectedRows = await inscripcionRepository.actualizarAsignacionDocente(
      asignacionId,
      asignaturaId,
      grupoId
    );

    if (affectedRows === 0) {
      const error = new Error('No se pudo actualizar la asignación');
      error.statusCode = 400;
      throw error;
    }

    const asignacionActualizada = await inscripcionRepository.verificarAsignacionPorId(asignacionId);
    const docente = await docenteRepository.findById(asignacionActualizada.docente_id);
    
    return {
      id: asignacionId,
      docente: docente.nombre,
      asignatura: asignatura.nombre,
      grupo: grupo.nombre,
      message: 'Asignación actualizada exitosamente'
    };
  }
}

module.exports = new InscripcionService();
