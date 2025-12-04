const pool = require('../config/database');

class AlumnoRepository {
  async findAll() {
    const [rows] = await pool.query('SELECT * FROM alumnos');
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM alumnos WHERE id = ?', [id]);
    return rows[0];
  }

  async create(nombre) {
    const [result] = await pool.query(
      'INSERT INTO alumnos (nombre) VALUES (?)',
      [nombre]
    );
    return result.insertId;
  }

  async update(id, nombre) {
    const [result] = await pool.query(
      'UPDATE alumnos SET nombre = ? WHERE id = ?',
      [nombre, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await pool.query('DELETE FROM alumnos WHERE id = ?', [id]);
    return result.affectedRows;
  }

  async findAsignaturas(alumnoId) {
    const [rows] = await pool.query(`
      SELECT a.*, g.nombre as grupo, asig.nombre as asignatura
      FROM alumno_asignatura a
      JOIN grupos g ON a.grupo_id = g.id
      JOIN asignaturas asig ON a.asignatura_id = asig.id
      WHERE a.alumno_id = ?
    `, [alumnoId]);
    return rows;
  }
}

module.exports = new AlumnoRepository();
