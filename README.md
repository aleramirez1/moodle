# API Moodle - Sistema de Gestión Académica

API REST desarrollada con Node.js y Express usando arquitectura en capas para gestionar alumnos, docentes, asignaturas, grupos y programas de estudio.

## Arquitectura

La aplicación sigue una arquitectura en capas:

- **Controllers**: Manejan las peticiones HTTP y respuestas
- **Services**: Contienen la lógica de negocio
- **Repositories**: Interactúan con la base de datos
- **Routes**: Definen los endpoints de la API
- **Middlewares**: Funciones intermedias (manejo de errores, etc.)

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```

4. Editar el archivo `.env` con tus credenciales de MySQL

5. Ejecutar el script SQL para crear la base de datos y tablas

## Uso

Desarrollo:
```bash
npm run dev
```

Producción:
```bash
npm start
```

## Endpoints

### Alumnos
- `GET /api/alumnos` - Obtener todos los alumnos
- `GET /api/alumnos/:id` - Obtener un alumno por ID
- `POST /api/alumnos` - Crear un alumno
- `PUT /api/alumnos/:id` - Actualizar un alumno
- `DELETE /api/alumnos/:id` - Eliminar un alumno
- `GET /api/alumnos/:id/asignaturas` - Obtener asignaturas de un alumno

### Grupos
- `GET /api/grupos` - Obtener todos los grupos
- `GET /api/grupos/:id` - Obtener un grupo por ID
- `POST /api/grupos` - Crear un grupo
- `PUT /api/grupos/:id` - Actualizar un grupo
- `DELETE /api/grupos/:id` - Eliminar un grupo

### Docentes
- `GET /api/docentes` - Obtener todos los docentes
- `GET /api/docentes/:id` - Obtener un docente por ID
- `POST /api/docentes` - Crear un docente
- `PUT /api/docentes/:id` - Actualizar un docente
- `DELETE /api/docentes/:id` - Eliminar un docente
- `GET /api/docentes/:id/asignaturas` - Obtener asignaturas de un docente

### Asignaturas
- `GET /api/asignaturas` - Obtener todas las asignaturas
- `GET /api/asignaturas/:id` - Obtener una asignatura por ID
- `POST /api/asignaturas` - Crear una asignatura
- `PUT /api/asignaturas/:id` - Actualizar una asignatura
- `DELETE /api/asignaturas/:id` - Eliminar una asignatura

### Programas de Estudio
- `GET /api/programas-estudio` - Obtener todos los programas
- `GET /api/programas-estudio/:id` - Obtener un programa por ID
- `POST /api/programas-estudio` - Crear un programa
- `PUT /api/programas-estudio/:id` - Actualizar un programa
- `DELETE /api/programas-estudio/:id` - Eliminar un programa
- `GET /api/programas-estudio/:id/asignaturas` - Obtener asignaturas de un programa
- `POST /api/programas-estudio/:id/asignaturas` - Agregar asignatura a un programa

## Ejemplos de Uso

### Crear un alumno
```bash
curl -X POST http://localhost:3000/api/alumnos \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Juan Pérez"}'
```

### Crear una asignatura
```bash
curl -X POST http://localhost:3000/api/asignaturas \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Matemáticas", "cuatrimestre": 1}'
```

## Documentación API

Una vez iniciado el servidor, puedes acceder a la documentación interactiva de Swagger en:

```
http://localhost:3000/api-docs
```

La documentación incluye:
- Descripción de todos los endpoints
- Esquemas de datos
- Ejemplos de peticiones y respuestas
- Posibilidad de probar los endpoints directamente desde el navegador

## Tecnologías

- Node.js
- Express
- MySQL2
- dotenv
- CORS
- Swagger (swagger-jsdoc, swagger-ui-express)
"# moodle" 
