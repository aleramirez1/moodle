const express = require('express');
const router = express.Router();

const alumnoRoutes = require('./alumnoRoutes');
const grupoRoutes = require('./grupoRoutes');
const docenteRoutes = require('./docenteRoutes');
const asignaturaRoutes = require('./asignaturaRoutes');
const programaEstudioRoutes = require('./programaEstudioRoutes');

router.use('/alumnos', alumnoRoutes);
router.use('/grupos', grupoRoutes);
router.use('/docentes', docenteRoutes);
router.use('/asignaturas', asignaturaRoutes);
router.use('/programas-estudio', programaEstudioRoutes);

module.exports = router;
