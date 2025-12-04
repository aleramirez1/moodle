const pool = require('../config/database');

class ProgramaEstudioRepository {
  async findAll() {
    const [rows] = await pool.query('SELECT * FROM programas_estudio');
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM programas_estudio WHERE id = ?', [id]);
    return rows[0];
  }

  async create(nombre) {
    const [result] = await pool.query(
      'INSERT INTO programas_estudio (nombre) VALUES (?)',
      [nombre]
    );
    return result.insertId;
  }

  async update(id, nombre) {
    const [result] = await pool.query(
      'UPDATE programas_estudio SET nombre = ? WHERE id = ?',
      [nombre, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await pool.query('DELETE FROM programas_estudio WHERE id = ?', [id]);
    return result.affectedRows;
  }

  async findAsignaturas(programaId) {
    const [rows] = await pool.query(`
      SELECT asig.*
      FROM asignatura_programa_estudio ape
      JOIN asignaturas asig ON ape.asignatura_id = asig.id
      WHERE ape.programa_estudio_id = ?
    `, [programaId]);
    return rows;
  }

  async addAsignatura(programaId, asignaturaId) {
    const [result] = await pool.query(
      'INSERT INTO asignatura_programa_estudio (programa_estudio_id, asignatura_id) VALUES (?, ?)',
      [programaId, asignaturaId]
    );
    return result.insertId;
  }
}

module.exports = new ProgramaEstudioRepository();
