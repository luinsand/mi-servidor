const express = require('express');

const path = require('path');

const app = express();

const puerto = 3000;

app.use(express.urlencoded({ extended: true }));

const codigosDeAdmin = ['123o456p'];

app.post('/login', (req,res) => {
    const {codigo, nombre, cedula} = req.body;
    if (codigosDeAdmin.includes(codigo)){
        res.redirect('/operaciones.html');
    }
    else{
        res.send('codigo invalido, no puedes continuar.');
    }
});


// Middleware para servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar servidor
app.listen(puerto, '0.0.0.0', () => {
    console.log(`Servidor funcionando en http://localhost:${puerto}`);
});


