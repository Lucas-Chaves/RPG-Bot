const axios = require('axios');


    const spell = async () =>{
        try{
            response  = await axios.get('https://www.potterapi.com/v1/sortingHat')
            magic = response.data
            return magic
        }catch(e){
            return 'Das piores histórias saem as grandes ideias (Mas você errou como se roda o dado mesmo).'
        }

    }


module.exports = spell