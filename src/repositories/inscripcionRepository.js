const pool = require('../config/database');

class InscripcionRepository {
 
  async inscribirAlumno(alumnoId, asignaturaId, grupoId) {
    const [result] = await pool.query(
      'INSERT INTO alumno_asignatura (alumno_id, asignatura_id, grupo_id) VALUES (?, ?, ?)',
      [alumnoId, asignaturaId, grupoId]
    );
    return result.insertId;
  }

  
  async verificarInscripcion(alumnoId, asignaturaId, grupoId) {
    const [rows] = await pool.query(
      'SELECT * FROM alumno_asignatura WHERE alumno_id = ? AND asignatura_id = ? AND grupo_id = ?',
      [alumnoId, asignaturaId, grupoId]
    );
    return rows[0];
  }

 
  async desinscribirAlumno(inscripcionId) {
    const [result] = await pool.query(
      'DELETE FROM alumno_asignatura WHERE id = ?',
      [inscripcionId]
    );
    return result.affectedRows;
  }

 
  async getInscripcionesByAlumno(alumnoId) {
    const [rows] = await pool.query(`
      SELECT aa.id, aa.alumno_id, aa.asignatura_id, aa.grupo_id,
             al.nombre as alumno_nombre,
             asig.nombre as asignatura_nombre,
             asig.cuatrimestre,
             g.nombre as grupo_nombre
      FROM alumno_asignatura aa
      JOIN alumnos al ON aa.alumno_id = al.id
      JOIN asignaturas asig ON aa.asignatura_id = asig.id
      JOIN grupos g ON aa.grupo_id = g.id
      WHERE aa.alumno_id = ?
    `, [alumnoId]);
    return rows;
  }

 
  async getAlumnosByAsignaturaGrupo(asignaturaId, grupoId) {
    const [rows] = await pool.query(`
      SELECT aa.id as inscripcion_id, al.*
      FROM alumno_asignatura aa
      JOIN alumnos al ON aa.alumno_id = al.id
      WHERE aa.asignatura_id = ? AND aa.grupo_id = ?
    `, [asignaturaId, grupoId]);
    return rows;
  }

  
  async asignarDocente(docenteId, asignaturaId, grupoId) {
    const [result] = await pool.query(
      'INSERT INTO docente_asignatura (docente_id, asignatura_id, grupo_id) VALUES (?, ?, ?)',
      [docenteId, asignaturaId, grupoId]
    );
    return result.insertId;
  }

  
  async verificarAsignacionDocente(docenteId, asignaturaId, grupoId) {
    const [rows] = await pool.query(
      'SELECT * FROM docente_asignatura WHERE docente_id = ? AND asignatura_id = ? AND grupo_id = ?',
      [docenteId, asignaturaId, grupoId]
    );
    return rows[0];
  }

  async desasignarDocente(asignacionId) {
    const [result] = await pool.query(
      'DELETE FROM docente_asignatura WHERE id = ?',
      [asignacionId]
    );
    return result.affectedRows;
  }


  async getAsignacionesByDocente(docenteId) {
    const [rows] = await pool.query(`
      SELECT da.id, da.docente_id, da.asignatura_id, da.grupo_id,
             d.nombre as docente_nombre,
             asig.nombre as asignatura_nombre,
             asig.cuatrimestre,
             g.nombre as grupo_nombre
      FROM docente_asignatura da
      JOIN docentes d ON da.docente_id = d.id
      JOIN asignaturas asig ON da.asignatura_id = asig.id
      JOIN grupos g ON da.grupo_id = g.id
      WHERE da.docente_id = ?
    `, [docenteId]);
    return rows;
  }


  async getDocentesByAsignaturaGrupo(asignaturaId, grupoId) {
    const [rows] = await pool.query(`
      SELECT da.id as asignacion_id, d.*
      FROM docente_asignatura da
      JOIN docentes d ON da.docente_id = d.id
      WHERE da.asignatura_id = ? AND da.grupo_id = ?
    `, [asignaturaId, grupoId]);
    return rows;
  }
}

module.exports = new InscripcionRepository();
