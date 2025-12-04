const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');

/**
 * @swagger
 * /api/alumnos:
 *   get:
 *     summary: Obtener todos los alumnos
 *     tags: [Alumnos]
 *     responses:
 *       200:
 *         description: Lista de alumnos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Alumno'
 */
router.get('/', alumnoController.getAll.bind(alumnoController));

/**
 * @swagger
 * /api/alumnos/{id}:
 *   get:
 *     summary: Obtener un alumno por ID
 *     tags: [Alumnos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del alumno
 *     responses:
 *       200:
 *         description: Alumno encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Alumno'
 *       404:
 *         description: Alumno no encontrado
 */
router.get('/:id', alumnoController.getById.bind(alumnoController));

/**
 * @swagger
 * /api/alumnos:
 *   post:
 *     summary: Crear un nuevo alumno
 *     tags: [Alumnos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AlumnoInput'
 *     responses:
 *       201:
 *         description: Alumno creado exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', alumnoController.create.bind(alumnoController));

/**
 * @swagger
 * /api/alumnos/{id}:
 *   put:
 *     summary: Actualizar un alumno
 *     tags: [Alumnos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AlumnoInput'
 *     responses:
 *       200:
 *         description: Alumno actualizado
 *       404:
 *         description: Alumno no encontrado
 */
router.put('/:id', alumnoController.update.bind(alumnoController));

/**
 * @swagger
 * /api/alumnos/{id}:
 *   delete:
 *     summary: Eliminar un alumno
 *     tags: [Alumnos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Alumno eliminado
 *       404:
 *         description: Alumno no encontrado
 */
router.delete('/:id', alumnoController.delete.bind(alumnoController));

/**
 * @swagger
 * /api/alumnos/{id}/asignaturas:
 *   get:
 *     summary: Obtener asignaturas de un alumno
 *     tags: [Alumnos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de asignaturas del alumno
 *       404:
 *         description: Alumno no encontrado
 */
router.get('/:id/asignaturas', alumnoController.getAsignaturas.bind(alumnoController));

module.exports = router;
