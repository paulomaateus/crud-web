const express = require('express')
const routes = express.Router()

const connection = require('./database/connection')


const books_controller = require('./controllers/books-controller')

// Rota para adicionar livros 
routes.post('/books',books_controller.create )


// Rota para listar todos os livros 
routes.get('/books', async (request, response) => {
    const books = connection('books').select('*')
    return response.json(books)
})

module.exports = routes