
const connection = require('../database/connection')

module.exports = {
    async create (request, response) {
    const {name, autor, gender, release_date} = request.body 

    await connection('books').insert({
        name,
        autor,
        gender, 
        release_date
    })

    return response.status(204).send()
    }
}