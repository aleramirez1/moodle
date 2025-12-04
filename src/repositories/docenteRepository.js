const pool = require('../config/database');

class DocenteRepository {
  async findAll() {
    const [rows] = await pool.query('SELECT * FROM docentes');
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM docentes WHERE id = ?', [id]);
    return rows[0];
  }

  async create(nombre) {
    const [result] = await pool.query(
      'INSERT INTO docentes (nombre) VALUES (?)',
      [nombre]
    );
    return result.insertId;
  }

  async update(id, nombre) {
    const [result] = await pool.query(
      'UPDATE docentes SET nombre = ? WHERE id = ?',
      [nombre, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await pool.query('DELETE FROM docentes WHERE id = ?', [id]);
    return result.affectedRows;
  }

  async findAsignaturas(docenteId) {
    const [rows] = await pool.query(`
      SELECT da.*, asig.nombre as asignatura, g.nombre as grupo
      FROM docente_asignatura da
      JOIN asignaturas asig ON da.asignatura_id = asig.id
      JOIN grupos g ON da.grupo_id = g.id
      WHERE da.docente_id = ?
    `, [docenteId]);
    return rows;
  }
}

module.exports = new DocenteRepository();
