exports.ProficienciesChoices = class ProficienciesChoices {

    protest = []

    constructor(choice, fromP) {
      this.choose = choice;
      this.from = fromP
    }


    printChoice() {
        return this.choose
    }

    printFrom(){
        this.from.forEach(element => {this.protest.push(element['name'])})
        return this.protest.join(', ')
    }

    printMsg(){
       return  `choose: ${this.printChoice()} \n  ${this.printFrom()} \n\n`
    }

  }


