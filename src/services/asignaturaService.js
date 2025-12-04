const asignaturaRepository = require('../repositories/asignaturaRepository');

class AsignaturaService {
  async getAllAsignaturas() {
    return await asignaturaRepository.findAll();
  }

  async getAsignaturaById(id) {
    const asignatura = await asignaturaRepository.findById(id);
    if (!asignatura) {
      const error = new Error('Asignatura no encontrada');
      error.statusCode = 404;
      throw error;
    }
    return asignatura;
  }

  async createAsignatura(nombre, cuatrimestre) {
    if (!nombre || nombre.trim() === '') {
      const error = new Error('El nombre es requerido');
      error.statusCode = 400;
      throw error;
    }
    if (!cuatrimestre || cuatrimestre < 1) {
      const error = new Error('El cuatrimestre debe ser un número mayor a 0');
      error.statusCode = 400;
      throw error;
    }
    const id = await asignaturaRepository.create(nombre, cuatrimestre);
    return await asignaturaRepository.findById(id);
  }

  async updateAsignatura(id, nombre, cuatrimestre) {
    if (!nombre || nombre.trim() === '') {
      const error = new Error('El nombre es requerido');
      error.statusCode = 400;
      throw error;
    }
    if (!cuatrimestre || cuatrimestre < 1) {
      const error = new Error('El cuatrimestre debe ser un número mayor a 0');
      error.statusCode = 400;
      throw error;
    }
    const affectedRows = await asignaturaRepository.update(id, nombre, cuatrimestre);
    if (affectedRows === 0) {
      const error = new Error('Asignatura no encontrada');
      error.statusCode = 404;
      throw error;
    }
    return await asignaturaRepository.findById(id);
  }

  async deleteAsignatura(id) {
    const affectedRows = await asignaturaRepository.delete(id);
    if (affectedRows === 0) {
      const error = new Error('Asignatura no encontrada');
      error.statusCode = 404;
      throw error;
    }
    return { message: 'Asignatura eliminada correctamente' };
  }
}

module.exports = new AsignaturaService();
