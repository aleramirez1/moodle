const express = require('express');
const router = express.Router();
const asignaturaController = require('../controllers/asignaturaController');

/**
 * @swagger
 * /api/asignaturas:
 *   get:
 *     summary: Obtener todas las asignaturas
 *     tags: [Asignaturas]
 *     responses:
 *       200:
 *         description: Lista de asignaturas
 */
router.get('/', asignaturaController.getAll.bind(asignaturaController));

/**
 * @swagger
 * /api/asignaturas/{id}:
 *   get:
 *     summary: Obtener una asignatura por ID
 *     tags: [Asignaturas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Asignatura encontrada
 *       404:
 *         description: Asignatura no encontrada
 */
router.get('/:id', asignaturaController.getById.bind(asignaturaController));

/**
 * @swagger
 * /api/asignaturas:
 *   post:
 *     summary: Crear una nueva asignatura
 *     tags: [Asignaturas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AsignaturaInput'
 *     responses:
 *       201:
 *         description: Asignatura creada exitosamente
 */
router.post('/', asignaturaController.create.bind(asignaturaController));

/**
 * @swagger
 * /api/asignaturas/{id}:
 *   put:
 *     summary: Actualizar una asignatura
 *     tags: [Asignaturas]
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
 *             $ref: '#/components/schemas/AsignaturaInput'
 *     responses:
 *       200:
 *         description: Asignatura actualizada
 */
router.put('/:id', asignaturaController.update.bind(asignaturaController));

/**
 * @swagger
 * /api/asignaturas/{id}:
 *   delete:
 *     summary: Eliminar una asignatura
 *     tags: [Asignaturas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Asignatura eliminada
 */
router.delete('/:id', asignaturaController.delete.bind(asignaturaController));

module.exports = router;
