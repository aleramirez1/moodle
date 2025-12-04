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

  async create(nombre, cuatrimestre, abreviacion) {
    const [result] = await pool.query(
      'INSERT INTO asignaturas (nombre, cuatrimestre, abreviacion) VALUES (?, ?, ?)',
      [nombre, cuatrimestre, arguments[2]]
    );
    return result.insertId;
  }

  async update(id, nombre, cuatrimestre, abreviacion) {
    const [result] = await pool.query(
      'UPDATE asignaturas SET nombre = ?, cuatrimestre = ?, abreviacion = ? WHERE id = ?',
      [nombre, cuatrimestre, abreviacion, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await pool.query('DELETE FROM asignaturas WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = new AsignaturaRepository();
