const connect = require('../../model/config');

module.exports = {
    async store(req, res){
        const person = await req.body;

        const [id] = await connect('users').insert(person)

        try{
            return res.json({id})
        }catch(err){
            return res.status(401).json({message: 'Unable to save user'});
        }   
    },

    async show(req, res){
        const users = await connect.select('*').from('users');

        try{
            return res.json(users);
        }catch(err){
            return res.status(401).json({message: 'Unable to retrieve users'});
        }
    },

    async delete(req, res){
        const {id} = await req.params;

        try{
           await connect('users').where({id: id}).del();
           return res.json({message: 'Successfuly deleted'})
        }catch(err){
           return res.status(500).json({message: 'Unable to delete'}) 
        }
       
    }
}

