const express = require('express');
const router = express.Router();
const inscripcionController = require('../controllers/inscripcionController');

/**
 * @swagger
 * /api/inscripciones/alumnos:
 *   post:
 *     summary: Inscribir un alumno a una asignatura en un grupo
 *     tags: [Inscripciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - alumnoId
 *               - asignaturaId
 *               - grupoId
 *             properties:
 *               alumnoId:
 *                 type: integer
 *                 example: 1
 *               asignaturaId:
 *                 type: integer
 *                 example: 1
 *               grupoId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Alumno inscrito exitosamente
 *       400:
 *         description: El alumno ya está inscrito
 *       404:
 *         description: Alumno, asignatura o grupo no encontrado
 */
router.post('/alumnos', inscripcionController.inscribirAlumno.bind(inscripcionController));

/**
 * @swagger
 * /api/inscripciones/alumnos/{id}:
 *   delete:
 *     summary: Desinscribir un alumno de una asignatura
 *     tags: [Inscripciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la inscripción
 *     responses:
 *       200:
 *         description: Alumno desinscrito exitosamente
 *       404:
 *         description: Inscripción no encontrada
 */
router.delete('/alumnos/:id', inscripcionController.desinscribirAlumno.bind(inscripcionController));

/**
 * @swagger
 * /api/inscripciones/alumnos/{alumnoId}:
 *   get:
 *     summary: Obtener todas las inscripciones de un alumno
 *     tags: [Inscripciones]
 *     parameters:
 *       - in: path
 *         name: alumnoId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de inscripciones del alumno
 *       404:
 *         description: Alumno no encontrado
 */
router.get('/alumnos/:alumnoId', inscripcionController.getInscripcionesByAlumno.bind(inscripcionController));

/**
 * @swagger
 * /api/inscripciones/asignaturas/{asignaturaId}/grupos/{grupoId}/alumnos:
 *   get:
 *     summary: Obtener todos los alumnos inscritos en una asignatura y grupo
 *     tags: [Inscripciones]
 *     parameters:
 *       - in: path
 *         name: asignaturaId
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: grupoId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de alumnos inscritos
 *       404:
 *         description: Asignatura o grupo no encontrado
 */
router.get('/asignaturas/:asignaturaId/grupos/:grupoId/alumnos', inscripcionController.getAlumnosByAsignaturaGrupo.bind(inscripcionController));

/**
 * @swagger
 * /api/inscripciones/docentes:
 *   post:
 *     summary: Asignar un docente a una asignatura en un grupo
 *     tags: [Asignaciones Docentes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - docenteId
 *               - asignaturaId
 *               - grupoId
 *             properties:
 *               docenteId:
 *                 type: integer
 *                 example: 1
 *               asignaturaId:
 *                 type: integer
 *                 example: 1
 *               grupoId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Docente asignado exitosamente
 *       400:
 *         description: El docente ya está asignado
 *       404:
 *         description: Docente, asignatura o grupo no encontrado
 */
router.post('/docentes', inscripcionController.asignarDocente.bind(inscripcionController));

/**
 * @swagger
 * /api/inscripciones/docentes/{id}:
 *   delete:
 *     summary: Desasignar un docente de una asignatura
 *     tags: [Asignaciones Docentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la asignación
 *     responses:
 *       200:
 *         description: Docente desasignado exitosamente
 *       404:
 *         description: Asignación no encontrada
 */
router.delete('/docentes/:id', inscripcionController.desasignarDocente.bind(inscripcionController));

/**
 * @swagger
 * /api/inscripciones/docentes/{docenteId}:
 *   get:
 *     summary: Obtener todas las asignaciones de un docente
 *     tags: [Asignaciones Docentes]
 *     parameters:
 *       - in: path
 *         name: docenteId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de asignaciones del docente
 *       404:
 *         description: Docente no encontrado
 */
router.get('/docentes/:docenteId', inscripcionController.getAsignacionesByDocente.bind(inscripcionController));

/**
 * @swagger
 * /api/inscripciones/asignaturas/{asignaturaId}/grupos/{grupoId}/docentes:
 *   get:
 *     summary: Obtener todos los docentes asignados a una asignatura y grupo
 *     tags: [Asignaciones Docentes]
 *     parameters:
 *       - in: path
 *         name: asignaturaId
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: grupoId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de docentes asignados
 *       404:
 *         description: Asignatura o grupo no encontrado
 */
router.get('/asignaturas/:asignaturaId/grupos/:grupoId/docentes', inscripcionController.getDocentesByAsignaturaGrupo.bind(inscripcionController));

/**
 * @swagger
 * /api/inscripciones/alumnos/{id}:
 *   put:
 *     summary: Actualizar inscripción de un alumno a otra asignatura o grupo
 *     tags: [Inscripciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la inscripción
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - asignaturaId
 *               - grupoId
 *             properties:
 *               asignaturaId:
 *                 type: integer
 *                 example: 1
 *               grupoId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Inscripción actualizada exitosamente
 *       400:
 *         description: Datos inválidos o alumno ya inscrito en el nuevo grupo
 *       404:
 *         description: Inscripción, asignatura o grupo no encontrado
 */
router.put('/alumnos/:id', inscripcionController.actualizarInscripcionAlumno.bind(inscripcionController));

/**
 * @swagger
 * /api/inscripciones/docentes/{id}:
 *   put:
 *     summary: Actualizar asignación de un docente a otra asignatura o grupo
 *     tags: [Asignaciones Docentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la asignación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - asignaturaId
 *               - grupoId
 *             properties:
 *               asignaturaId:
 *                 type: integer
 *                 example: 1
 *               grupoId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Asignación actualizada exitosamente
 *       400:
 *         description: Datos inválidos o docente ya asignado al nuevo grupo
 *       404:
 *         description: Asignación, asignatura o grupo no encontrado
 */
router.put('/docentes/:id', inscripcionController.actualizarAsignacionDocente.bind(inscripcionController));

module.exports = router;
