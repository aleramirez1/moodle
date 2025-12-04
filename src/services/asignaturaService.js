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

  async createAsignatura(nombre, cuatrimestre, abreviacion) {
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
    if (typeof abreviacion !== 'undefined' && abreviacion && abreviacion.length > 20) {
      const error = new Error('La abreviación no puede tener más de 20 caracteres');
      error.statusCode = 400;
      throw error;
    }
    const _abreviacion = abreviacion || null;
    const id = await asignaturaRepository.create(nombre, cuatrimestre, _abreviacion);
    return await asignaturaRepository.findById(id);
  }

  async updateAsignatura(id, nombre, cuatrimestre, abreviacion) {
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
    if (typeof abreviacion !== 'undefined' && abreviacion && abreviacion.length > 20) {
      const error = new Error('La abreviación no puede tener más de 20 caracteres');
      error.statusCode = 400;
      throw error;
    }
    const _abreviacion = abreviacion || null;
    const affectedRows = await asignaturaRepository.update(id, nombre, cuatrimestre, _abreviacion);
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
