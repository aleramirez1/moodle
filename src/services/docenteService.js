const docenteRepository = require('../repositories/docenteRepository');

class DocenteService {
  async getAllDocentes() {
    return await docenteRepository.findAll();
  }

  async getDocenteById(id) {
    const docente = await docenteRepository.findById(id);
    if (!docente) {
      const error = new Error('Docente no encontrado');
      error.statusCode = 404;
      throw error;
    }
    return docente;
  }

  async createDocente(nombre) {
    if (!nombre || nombre.trim() === '') {
      const error = new Error('El nombre es requerido');
      error.statusCode = 400;
      throw error;
    }
    const id = await docenteRepository.create(nombre);
    return await docenteRepository.findById(id);
  }

  async updateDocente(id, nombre) {
    if (!nombre || nombre.trim() === '') {
      const error = new Error('El nombre es requerido');
      error.statusCode = 400;
      throw error;
    }
    const affectedRows = await docenteRepository.update(id, nombre);
    if (affectedRows === 0) {
      const error = new Error('Docente no encontrado');
      error.statusCode = 404;
      throw error;
    }
    return await docenteRepository.findById(id);
  }

  async deleteDocente(id) {
    const affectedRows = await docenteRepository.delete(id);
    if (affectedRows === 0) {
      const error = new Error('Docente no encontrado');
      error.statusCode = 404;
      throw error;
    }
    return { message: 'Docente eliminado correctamente' };
  }

  async getDocenteAsignaturas(id) {
    const docente = await docenteRepository.findById(id);
    if (!docente) {
      const error = new Error('Docente no encontrado');
      error.statusCode = 404;
      throw error;
    }
    return await docenteRepository.findAsignaturas(id);
  }
}

module.exports = new DocenteService();
