const express = require("express") // forma de baixar a biblioteca express
const exphbs = require("express-handlebars")

const app = express() // variavel app passa a equivaler ao express

app.engine("handlebars", exphbs.engine()) 
app.set("view engine", "handlebars")

app.use(express.static('public')) // define que terá arquivos estáticos

app.get('/', (requisicao, resposta) => { // app quando requisitado, terá como resposta a variavel 'resposta'
    resposta.render('home') // resposta = home.handlebars
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})