/* 
{
	"_id": "5ee2a1000b1bb138c5fe62a4",
	"index": "acid-arrow",
	"name": "Acid Arrow",
	"desc": [
		"A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn."
	],
	"higher_level": [
		"When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd."
	],
	"range": "90 feet",
	"components": [
		"V",
		"S",
		"M"
	],
	"material": "Powdered rhubarb leaf and an adder's stomach.",
	"ritual": false,
	"duration": "Instantaneous",
	"concentration": false,
	"casting_time": "1 action",
	"level": 2,
	"school": {
		"name": "Evocation",
		"url": "/api/magic-schools/evocation"
	},
	"classes": [
		{
			"name": "Wizard",
			"url": "/api/classes/wizard"
		}
	],
	"subclasses": [
		{
			"name": "Lore",
			"url": "/api/subclasses/lore"
		},
		{
			"name": "Land",
			"url": "/api/subclasses/land"
		}
	],
	"url": "/api/spells/acid-arrow"
}

*/


exports.SpellModel = class SpellModel {
    

    constructor(spell) {
        this.spell = spell
    }



    printSpell(){
		let {
			name,
			range,
			components,
			material,
			ritual ,
			duration,
			casting_time,
			level,
			desc,
			higher_level,
			concentration,
		} = this.spell

		
        let aboutClass =
		`\`\`\` 
		Name: ${name} \n
		desc: 
			${desc.join("\n    ")} \n
		range: ${range} \n 
		components: ${components.join(', ')} \n
		material: ${material} \n 
		ritual: ${ritual} \n 
		duration: ${duration} \n 
		concentration: ${concentration} \n 
		level: ${level} \n
		casting time: ${casting_time} \n 
		`

		if(higher_level != undefined){
			const highLevel = `higher level: ${higher_level.join("\n    ")} \n`
			console.log(highLevel)
			aboutClass = aboutClass.concat(highLevel);
		}
		
		var aboutSpell = [aboutClass.slice(0, aboutClass.length), "\`\`\`", aboutClass.slice(aboutClass.length)].join('');
		return aboutSpell
	}
	




}