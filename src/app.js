const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const swaggerSpec = require('./config/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//rutas
app.get('/', (req, res) => {
  res.json({ 
    message: 'API Moodle - Sistema de Gestión Académica',
    version: '1.0.0',
    documentation: '/api-docs',
    endpoints: {
      alumnos: '/api/alumnos',
      grupos: '/api/grupos',
      docentes: '/api/docentes',
      asignaturas: '/api/asignaturas',
      programasEstudio: '/api/programas-estudio'
    }
  });
});

app.use('/api', routes);


app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
