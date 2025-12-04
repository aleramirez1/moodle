const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Moodle - Sistema de Gestión Academica',
      version: '1.0.0',
      description: 'API REST para gestionar alumnos, docentes, asignaturas, grupos y programas de estudio',
      contact: {
        name: 'API Support',
        email: 'support@moodle.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desarrollo'
      }
    ],
    tags: [
      { name: 'Alumnos', description: 'Gestión de alumnos' },
      { name: 'Grupos', description: 'Gestión de grupos' },
      { name: 'Docentes', description: 'Gestión de docentes' },
      { name: 'Asignaturas', description: 'Gestión de asignaturas' },
      { name: 'Programas de Estudio', description: 'Gestión de programas de estudio' }
    ],
    components: {
      schemas: {
        Alumno: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            nombre: { type: 'string', example: 'Juan Pérez' },
            created_at: { type: 'string', format: 'date-time' },
            updated_at: { type: 'string', format: 'date-time' }
          }
        },
        AlumnoInput: {
          type: 'object',
          required: ['nombre'],
          properties: {
            nombre: { type: 'string', example: 'Juan Pérez' }
          }
        },
        Grupo: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            nombre: { type: 'string', example: 'Grupo A' },
            created_at: { type: 'string', format: 'date-time' },
            updated_at: { type: 'string', format: 'date-time' }
          }
        },
        GrupoInput: {
          type: 'object',
          required: ['nombre'],
          properties: {
            nombre: { type: 'string', example: 'Grupo A' }
          }
        },
        Docente: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            nombre: { type: 'string', example: 'María García' },
            created_at: { type: 'string', format: 'date-time' },
            updated_at: { type: 'string', format: 'date-time' }
          }
        },
        DocenteInput: {
          type: 'object',
          required: ['nombre'],
          properties: {
            nombre: { type: 'string', example: 'María García' }
          }
        },
        Asignatura: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            nombre: { type: 'string', example: 'Matemáticas' },
            cuatrimestre: { type: 'integer', example: 1 },
            created_at: { type: 'string', format: 'date-time' },
            updated_at: { type: 'string', format: 'date-time' }
          }
        },
        AsignaturaInput: {
          type: 'object',
          required: ['nombre', 'cuatrimestre'],
          properties: {
            nombre: { type: 'string', example: 'Matemáticas' },
            cuatrimestre: { type: 'integer', example: 1, minimum: 1 }
          }
        },
        ProgramaEstudio: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            nombre: { type: 'string', example: 'Ingeniería en Sistemas' },
            created_at: { type: 'string', format: 'date-time' },
            updated_at: { type: 'string', format: 'date-time' }
          }
        },
        ProgramaEstudioInput: {
          type: 'object',
          required: ['nombre'],
          properties: {
            nombre: { type: 'string', example: 'Ingeniería en Sistemas' }
          }
        },
        AddAsignaturaInput: {
          type: 'object',
          required: ['asignaturaId'],
          properties: {
            asignaturaId: { type: 'integer', example: 1 }
          }
        },
        SuccessResponse: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: true },
            data: { type: 'object' }
          }
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: false },
            message: { type: 'string', example: 'Error message' }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
