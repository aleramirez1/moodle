const express = require('express');
const router = express.Router();

const alumnoRoutes = require('./alumnoRoutes');
const grupoRoutes = require('./grupoRoutes');
const docenteRoutes = require('./docenteRoutes');
const asignaturaRoutes = require('./asignaturaRoutes');
const programaEstudioRoutes = require('./programaEstudioRoutes');
const inscripcionRoutes = require('./inscripcionRoutes');

router.use('/alumnos', alumnoRoutes);
router.use('/grupos', grupoRoutes);
router.use('/docentes', docenteRoutes);
router.use('/asignaturas', asignaturaRoutes);
router.use('/programas-estudio', programaEstudioRoutes);
router.use('/inscripciones', inscripcionRoutes);

module.exports = router;
