const express = require('express');
const router = express.Router();
const grupoController = require('../controllers/grupoController');

/**
 * @swagger
 * /api/grupos:
 *   get:
 *     summary: Obtener todos los grupos
 *     tags: [Grupos]
 *     responses:
 *       200:
 *         description: Lista de grupos
 */
router.get('/', grupoController.getAll.bind(grupoController));

/**
 * @swagger
 * /api/grupos/{id}:
 *   get:
 *     summary: Obtener un grupo por ID
 *     tags: [Grupos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Grupo encontrado
 *       404:
 *         description: Grupo no encontrado
 */
router.get('/:id', grupoController.getById.bind(grupoController));

/**
 * @swagger
 * /api/grupos:
 *   post:
 *     summary: Crear un nuevo grupo
 *     tags: [Grupos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GrupoInput'
 *     responses:
 *       201:
 *         description: Grupo creado exitosamente
 */
router.post('/', grupoController.create.bind(grupoController));

/**
 * @swagger
 * /api/grupos/{id}:
 *   put:
 *     summary: Actualizar un grupo
 *     tags: [Grupos]
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
 *             $ref: '#/components/schemas/GrupoInput'
 *     responses:
 *       200:
 *         description: Grupo actualizado
 */
router.put('/:id', grupoController.update.bind(grupoController));

/**
 * @swagger
 * /api/grupos/{id}:
 *   delete:
 *     summary: Eliminar un grupo
 *     tags: [Grupos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Grupo eliminado
 */
router.delete('/:id', grupoController.delete.bind(grupoController));

module.exports = router;
