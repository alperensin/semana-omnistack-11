const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async index(request, response){

        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        //const queryParams = request.query; //Acesso aos QUERY PARAMS (/users?nome=AndreLuiz)
        //const routeParams = request.params; //Acesso aos ROUTE PARAMS (/users/:id)
        //const body = request.body; //Acesso ao BODY (/users)

        //return response.send('Hello World!');
        return response.json({ id });
    }
};