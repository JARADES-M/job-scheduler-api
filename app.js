const express = require('express'),  app = express();
const Joi = require('joi');

port = process.env.PORT || 8800;

app.use(express.json());

const morgan = require('morgan');

const servicos = require('./servicos');

app.use(morgan('combined')); // user o comando (node app.js > log-[data].txt) para iniciar o serviço

app.get('/', (req, res) => {
   res.end("Working...\nIP: " + req.ip);
});

app.get('/servicos', (req, res) => {
   res.end(`Todos os Serviços`);
});

app.get('/servicos/:name', (req, res) => {
   const serv = req.params.name;
   res.end(`Status do ${serv}`);
});

// Criação dos Jobs
app.post('/servicox', (req, res) => {
   test = servicos.criarHTTPJob('*/03 * * * * *', 'http://www.google.com:80', 'get', {});
   res.end("Job iniciado...");
});

app.get('/servicox', (req, res) => {
   test = servicos.criarHTTPJob('*/03 * * * * *', 'http://www.google.com:80', 'get', {});
   res.end("Job iniciado...");
});

app.listen(port, () => console.log(`Serviço iniciado. Porta: ${port}...`));