const pool = require('../config/database');

class AsignaturaRepository {
  async findAll() {
    const [rows] = await pool.query('SELECT * FROM asignaturas');
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM asignaturas WHERE id = ?', [id]);
    return rows[0];
  }

  async create(nombre, cuatrimestre) {
    const [result] = await pool.query(
      'INSERT INTO asignaturas (nombre, cuatrimestre) VALUES (?, ?)',
      [nombre, cuatrimestre]
    );
    return result.insertId;
  }

  async update(id, nombre, cuatrimestre) {
    const [result] = await pool.query(
      'UPDATE asignaturas SET nombre = ?, cuatrimestre = ? WHERE id = ?',
      [nombre, cuatrimestre, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await pool.query('DELETE FROM asignaturas WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = new AsignaturaRepository();
