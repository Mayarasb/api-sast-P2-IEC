import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'API SAST P2',
    description: 'Documentação automática gerada via Swagger Autogen'
  },
  host: process.env.SWAGGER_HOST || 'localhost:3000',
  schemes: ['http']
};

// Onde o swagger.json será gerado
const outputFile = './swagger.json';

// Arquivos onde suas rotas estão definidas
const endpointsFiles = [
  './src/routes/usuarios.routes.js',
  './src/routes/org.routes.js'
];

swaggerAutogen()(outputFile, endpointsFiles, doc);
