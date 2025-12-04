const grupoRepository = require('../repositories/grupoRepository');

class GrupoService {
  async getAllGrupos() {
    return await grupoRepository.findAll();
  }

  async getGrupoById(id) {
    const grupo = await grupoRepository.findById(id);
    if (!grupo) {
      const error = new Error('Grupo no encontrado');
      error.statusCode = 404;
      throw error;
    }
    return grupo;
  }

  async createGrupo(nombre) {
    if (!nombre || nombre.trim() === '') {
      const error = new Error('El nombre es requerido');
      error.statusCode = 400;
      throw error;
    }
    const id = await grupoRepository.create(nombre);
    return await grupoRepository.findById(id);
  }

  async updateGrupo(id, nombre) {
    if (!nombre || nombre.trim() === '') {
      const error = new Error('El nombre es requerido');
      error.statusCode = 400;
      throw error;
    }
    const affectedRows = await grupoRepository.update(id, nombre);
    if (affectedRows === 0) {
      const error = new Error('Grupo no encontrado');
      error.statusCode = 404;
      throw error;
    }
    return await grupoRepository.findById(id);
  }

  async deleteGrupo(id) {
    const affectedRows = await grupoRepository.delete(id);
    if (affectedRows === 0) {
      const error = new Error('Grupo no encontrado');
      error.statusCode = 404;
      throw error;
    }
    return { message: 'Grupo eliminado correctamente' };
  }
}

module.exports = new GrupoService();
