const express = require('express');
const router = express.Router();
const programaEstudioController = require('../controllers/programaEstudioController');

/**
 * @swagger
 * /api/programas-estudio:
 *   get:
 *     summary: Obtener todos los programas de estudio
 *     tags: [Programas de Estudio]
 *     responses:
 *       200:
 *         description: Lista de programas de estudio
 */
router.get('/', programaEstudioController.getAll.bind(programaEstudioController));

/**
 * @swagger
 * /api/programas-estudio/{id}:
 *   get:
 *     summary: Obtener un programa de estudio por ID
 *     tags: [Programas de Estudio]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Programa de estudio encontrado
 *       404:
 *         description: Programa de estudio no encontrado
 */
router.get('/:id', programaEstudioController.getById.bind(programaEstudioController));

/**
 * @swagger
 * /api/programas-estudio:
 *   post:
 *     summary: Crear un nuevo programa de estudio
 *     tags: [Programas de Estudio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProgramaEstudioInput'
 *     responses:
 *       201:
 *         description: Programa de estudio creado exitosamente
 */
router.post('/', programaEstudioController.create.bind(programaEstudioController));

/**
 * @swagger
 * /api/programas-estudio/{id}:
 *   put:
 *     summary: Actualizar un programa de estudio
 *     tags: [Programas de Estudio]
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
 *             $ref: '#/components/schemas/ProgramaEstudioInput'
 *     responses:
 *       200:
 *         description: Programa de estudio actualizado
 */
router.put('/:id', programaEstudioController.update.bind(programaEstudioController));

/**
 * @swagger
 * /api/programas-estudio/{id}:
 *   delete:
 *     summary: Eliminar un programa de estudio
 *     tags: [Programas de Estudio]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Programa de estudio eliminado
 */
router.delete('/:id', programaEstudioController.delete.bind(programaEstudioController));

/**
 * @swagger
 * /api/programas-estudio/{id}/asignaturas:
 *   get:
 *     summary: Obtener asignaturas de un programa de estudio
 *     tags: [Programas de Estudio]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de asignaturas del programa
 */
router.get('/:id/asignaturas', programaEstudioController.getAsignaturas.bind(programaEstudioController));

/**
 * @swagger
 * /api/programas-estudio/{id}/asignaturas:
 *   post:
 *     summary: Agregar una asignatura a un programa de estudio
 *     tags: [Programas de Estudio]
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
 *             $ref: '#/components/schemas/AddAsignaturaInput'
 *     responses:
 *       200:
 *         description: Asignatura agregada al programa
 */
router.post('/:id/asignaturas', programaEstudioController.addAsignatura.bind(programaEstudioController));

module.exports = router;
