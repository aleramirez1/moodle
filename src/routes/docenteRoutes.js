const express = require('express');
const router = express.Router();
const docenteController = require('../controllers/docenteController');

/**
 * @swagger
 * /api/docentes:
 *   get:
 *     summary: Obtener todos los docentes
 *     tags: [Docentes]
 *     responses:
 *       200:
 *         description: Lista de docentes
 */
router.get('/', docenteController.getAll.bind(docenteController));

/**
 * @swagger
 * /api/docentes/{id}:
 *   get:
 *     summary: Obtener un docente por ID
 *     tags: [Docentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Docente encontrado
 *       404:
 *         description: Docente no encontrado
 */
router.get('/:id', docenteController.getById.bind(docenteController));

/**
 * @swagger
 * /api/docentes:
 *   post:
 *     summary: Crear un nuevo docente
 *     tags: [Docentes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DocenteInput'
 *     responses:
 *       201:
 *         description: Docente creado exitosamente
 */
router.post('/', docenteController.create.bind(docenteController));

/**
 * @swagger
 * /api/docentes/{id}:
 *   put:
 *     summary: Actualizar un docente
 *     tags: [Docentes]
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
 *             $ref: '#/components/schemas/DocenteInput'
 *     responses:
 *       200:
 *         description: Docente actualizado
 */
router.put('/:id', docenteController.update.bind(docenteController));

/**
 * @swagger
 * /api/docentes/{id}:
 *   delete:
 *     summary: Eliminar un docente
 *     tags: [Docentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Docente eliminado
 */
router.delete('/:id', docenteController.delete.bind(docenteController));

/**
 * @swagger
 * /api/docentes/{id}/asignaturas:
 *   get:
 *     summary: Obtener asignaturas de un docente
 *     tags: [Docentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de asignaturas del docente
 */
router.get('/:id/asignaturas', docenteController.getAsignaturas.bind(docenteController));

module.exports = router;
