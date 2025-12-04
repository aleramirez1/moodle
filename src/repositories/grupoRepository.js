const pool = require('../config/database');

class GrupoRepository {
  async findAll() {
    const [rows] = await pool.query('SELECT * FROM grupos');
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM grupos WHERE id = ?', [id]);
    return rows[0];
  }

  async create(nombre) {
    const [result] = await pool.query(
      'INSERT INTO grupos (nombre) VALUES (?)',
      [nombre]
    );
    return result.insertId;
  }

  async update(id, nombre) {
    const [result] = await pool.query(
      'UPDATE grupos SET nombre = ? WHERE id = ?',
      [nombre, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await pool.query('DELETE FROM grupos WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = new GrupoRepository();
