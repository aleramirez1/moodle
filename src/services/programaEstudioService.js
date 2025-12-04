const programaEstudioRepository = require('../repositories/programaEstudioRepository');

class ProgramaEstudioService {
  async getAllProgramas() {
    return await programaEstudioRepository.findAll();
  }

  async getProgramaById(id) {
    const programa = await programaEstudioRepository.findById(id);
    if (!programa) {
      const error = new Error('Programa de estudio no encontrado');
      error.statusCode = 404;
      throw error;
    }
    return programa;
  }

  async createPrograma(nombre) {
    if (!nombre || nombre.trim() === '') {
      const error = new Error('El nombre es requerido');
      error.statusCode = 400;
      throw error;
    }
    const id = await programaEstudioRepository.create(nombre);
    return await programaEstudioRepository.findById(id);
  }

  async updatePrograma(id, nombre) {
    if (!nombre || nombre.trim() === '') {
      const error = new Error('El nombre es requerido');
      error.statusCode = 400;
      throw error;
    }
    const affectedRows = await programaEstudioRepository.update(id, nombre);
    if (affectedRows === 0) {
      const error = new Error('Programa de estudio no encontrado');
      error.statusCode = 404;
      throw error;
    }
    return await programaEstudioRepository.findById(id);
  }

  async deletePrograma(id) {
    const affectedRows = await programaEstudioRepository.delete(id);
    if (affectedRows === 0) {
      const error = new Error('Programa de estudio no encontrado');
      error.statusCode = 404;
      throw error;
    }
    return { message: 'Programa de estudio eliminado correctamente' };
  }

  async getProgramaAsignaturas(id) {
    const programa = await programaEstudioRepository.findById(id);
    if (!programa) {
      const error = new Error('Programa de estudio no encontrado');
      error.statusCode = 404;
      throw error;
    }
    return await programaEstudioRepository.findAsignaturas(id);
  }

  async addAsignaturaToPrograma(programaId, asignaturaId) {
    const programa = await programaEstudioRepository.findById(programaId);
    if (!programa) {
      const error = new Error('Programa de estudio no encontrado');
      error.statusCode = 404;
      throw error;
    }
    await programaEstudioRepository.addAsignatura(programaId, asignaturaId);
    return { message: 'Asignatura agregada al programa correctamente' };
  }
}

module.exports = new ProgramaEstudioService();
