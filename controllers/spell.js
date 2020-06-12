const axios = require('axios');
const { SpellModel } = require('../model/Spell')


    const spell = async (StringSpell) =>{
        baseURL = 'https://www.dnd5eapi.co'
        try{
            StringSpell = StringSpell.join("%20");
            response  = await axios.get(`${baseURL}/api/spells/?name=${StringSpell}`)
            urlSpell = response.data['results'][0]['url']
            objectSpell  = await axios.get(`${baseURL}${urlSpell}`)
            const mySpell = new SpellModel(objectSpell.data);
            return mySpell.printSpell()
        }catch(e){
            return 'Das piores histórias saem as grandes ideias (Mas você errou como se roda o dado mesmo).'
        }

    }


module.exports = spell