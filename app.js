const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

// data parser - used to parse post data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Library API',
      version: '1.0.0'
    }
  },
  apis: ['app.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


/**
 * @swagger
 * /legos:
 *  get:
 *    description: Get all legos
 *    responses:
 *      200:
 *        description: Success
 * 
 */

app.get('/legos', (req,res) => {
  res.send([
    {
      item: '40499',
      title: 'Santa\'s Sleigh',
      pieces: '343',
      ages: '9+',
      price: '\$39.99'
    },
    {
      item: '21333',
      title: 'Vincent van Gogh - The Starry Night',
      pieces: '2316',
      ages: '18+',
      price: '\$169.99'
    },
    {
      item: '10311',
      title: 'Orchid',
      pieces: '608',
      ages: '18+',
      price: '\$49.99'
    }
  ])
});

app.post('/lego', (req,res) => {
  const title = req.body.title;
  res.send({ title });
});
/**
 * @swagger
 * /lego:
 *  post:
 *    description: Get one set
 *    parameters:
 *    - name: title
 *      description: Lego title
 *      in: body
 *      required: true
 *      type: string
 *    responses:
 *      200:
 *        description: Success
 * 
 */



 app.listen(3001, () => {
  console.log('App listening on port 3001!');
});
