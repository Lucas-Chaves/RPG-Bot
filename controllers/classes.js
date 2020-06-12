const axios = require('axios');
const { ProficienciesChoices } = require('../model/Proficiencies_choices')

const URL_CLASSES = "http://www.dnd5eapi.co"


const allClasses = async () => {
    try {
        classNames = []
        const response = await axios.get(`${URL_CLASSES}/api/classes`)
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
        saving_throws = []
        pro_choices = []
        proficiencyC = ""
        params = {
            name: args
        }
        //GET first class when receive a string search
        const response = await axios.get(`${URL_CLASSES}/api/classes`, { params })
        urlClass = response.data.results[0]['url']
        //GET everything about de class array[0]
        const responseClass = await axios.get(`${URL_CLASSES}${urlClass}`)
        //console.log(responseClass.data)

        //filter data to show
        responseClass.data['proficiencies'].forEach(element => {
            profi = element['name'].replace(", ", "-")
            proficiencies.push(profi)
        });
        responseClass.data['saving_throws'].forEach(element => { saving_throws.push(element['name']) })
        responseClass.data['proficiency_choices'].forEach(element =>{pro_choices.push(new ProficienciesChoices(element['choose'], element['from']))})
        pro_choices.forEach(element =>{proficiencyC = proficiencyC + element.printMsg()})
        if (proficiencies == []) throw Error

        const aboutClass =
            `\`\`\` 
 Classe: ${responseClass.data['name']}
 Hit die: ${responseClass.data['hit_die']} 
 Proficiencies: ${proficiencies.join(', ')}
 \n Proficiency choices: ${`\n\n ${proficiencyC}`}
 Saving throws: ${saving_throws.join(', ')}
 Subclasses: ${responseClass.data['subclasses'][0]['name']}
 
        \`\`\``
        return aboutClass
    } catch (e) {
        return "erro ao soletrar classe, você virou é um sapo com 1/1"
    }
}

module.exports = {
    allClasses,
    classSpecified
}