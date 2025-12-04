const alumnoRepository = require('../repositories/alumnoRepository');

class AlumnoService {
  async getAllAlumnos() {
    return await alumnoRepository.findAll();
  }

  async getAlumnoById(id) {
    const alumno = await alumnoRepository.findById(id);
    if (!alumno) {
      const error = new Error('Alumno no encontrado');
      error.statusCode = 404;
      throw error;
    }
    return alumno;
  }

  async createAlumno(nombre) {
    if (!nombre || nombre.trim() === '') {
      const error = new Error('El nombre es requerido');
      error.statusCode = 400;
      throw error;
    }
    const id = await alumnoRepository.create(nombre);
    return await alumnoRepository.findById(id);
  }

  async updateAlumno(id, nombre) {
    if (!nombre || nombre.trim() === '') {
      const error = new Error('El nombre es requerido');
      error.statusCode = 400;
      throw error;
    }
    const affectedRows = await alumnoRepository.update(id, nombre);
    if (affectedRows === 0) {
      const error = new Error('Alumno no encontrado');
      error.statusCode = 404;
      throw error;
    }
    return await alumnoRepository.findById(id);
  }

  async deleteAlumno(id) {
    const affectedRows = await alumnoRepository.delete(id);
    if (affectedRows === 0) {
      const error = new Error('Alumno no encontrado');
      error.statusCode = 404;
      throw error;
    }
    return { message: 'Alumno eliminado correctamente' };
  }

  async getAlumnoAsignaturas(id) {
    const alumno = await alumnoRepository.findById(id);
    if (!alumno) {
      const error = new Error('Alumno no encontrado');
      error.statusCode = 404;
      throw error;
    }
    return await alumnoRepository.findAsignaturas(id);
  }
}

module.exports = new AlumnoService();
