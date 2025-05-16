import express from 'express';
import swaggerUi from 'swagger-ui-express';
import type { OpenAPIObject } from 'openapi3-ts/dist/oas31';

const app = express();
const port = process.env.PORT || 3000;

const openApiSpec: OpenAPIObject = {
  openapi: '3.1.0',
  info: {
    title: 'Humidity & Temperature Sensor API',
    version: '1.0.0',
    description: 'API for accessing humidity and temperature sensor data.'
  },
  servers: [
    { url: 'http://localhost:3000', description: 'Local server' }
  ],
  paths: {
    '/': {
      get: {
        summary: 'Root endpoint',
        responses: {
          '200': {
            description: 'API is running',
            content: {
              'application/json': {
                schema: { type: 'object', properties: { message: { type: 'string' } } }
              }
            }
          }
        }
      }
    }
  }
};

app.get('/', (req, res) => {
  res.json({ message: 'Humidity & Temperature Sensor API' });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiSpec));

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
  console.log(`Swagger docs at http://localhost:${port}/api-docs`);
});
