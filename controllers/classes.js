const axios = require('axios');

const URL_CLASSES = "http://www.dnd5eapi.co"


const allClasses = async () => {
    try {
        classNames = []
        const response = await axios.get(URL_CLASSES)
        response.data.results.forEach(element => {
            classNames.push(element['name'])
        });
        return `Lista de Classes \n >>> ${classNames.join(" \n")}`
    } catch (e) {
        return "Tem alguns dragões atrapalhando nossos estudiosos espere um pouco para tentar novamente"
    }
}

const classSpecified = async (args) => {
    try {

        proficiencies = []

        params ={
            name: args
        }
        //GET first class when receive a string search
        const response = await axios.get(`${URL_CLASSES}/api/classes`, {params})
        urlClass = response.data.results[0]['url']

        //GET everything about de class array[0]
        const responseClass = await axios.get(`${URL_CLASSES}${urlClass}`)
        console.log(responseClass.data)

        //filter data to show
        responseClass.data['proficiencies'].forEach(element => {
            profi = element['name'].replace(", ", "-")
            proficiencies.push(profi)
        });
        
        const aboutClass = 
        `\`\`\` 
 class: ${responseClass.data['name']}
 hit die: ${responseClass.data['hit_die']} 
 proficiencies: ${proficiencies.join(', ')}
        \`\`\``
        return aboutClass
    } catch (e) {
        
    }
}

module.exports = {
    allClasses,
    classSpecified
}