const express = require('express');
const app = express()
const port = 8080
const handlebars = require('express-handlebars'); 
const bodyParser = require('body-parser');

// Configurações
    //Body parser
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());

    // Criando template engine
    app.engine('handlebars',handlebars({defaultLayout: 'main'}));
    app.set('view-engine', 'handlebars');



//Routes
app.get('/', (req, res) => {
    res.render(__dirname +'/views/layouts/login.handlebars')
})


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})