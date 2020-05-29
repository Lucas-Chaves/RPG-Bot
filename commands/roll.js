const {spell} = require('../controllers/index');

module.exports = {
	name: 'roll',
	description: 'roll a dice!',
	async execute(msg, args) {
		const roll = await rollDice(args[0]);
		msg.reply(roll)
	},
}


async function rollDice(dice) {
	let rolls = []
	let total = 0;
	console.log(dice)
	try {
		numbers = dice.split("d")
		for (let index = 0; index < numbers[0]; index++) {
			min = Math.ceil(1);
			max = Math.floor(parseInt(numbers[1]));
			values = Math.floor(Math.random() * (max - min + 1)) + min
			rolls.push(values)
			total = total + values
		}
		if (rolls.length == 0) throw Error
		return `\`${dice}\` = (${rolls.join("+")}) = ${total}`
	} catch (e) {
		reply = await spell()
		return reply
	}
};