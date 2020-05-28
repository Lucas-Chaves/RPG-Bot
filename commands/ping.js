module.exports = {
	name: 'roll',
	description: 'Ping!',
	execute(msg, args) {
		const roll = rollDice(args[0]);
		console.log(args)
		msg.reply(roll)
	},
  }


const rollDice = (dice => {
	let rolls = []
	let total = 0;
	try{
		numbers = dice.split("d")
		parseInt(numbers[0])
		for (let index = 0; index < numbers[0]; index++) {
			min = Math.ceil(1);
			max = Math.floor(numbers[1]);
			values = Math.floor(Math.random() * (max - min)) + min
			rolls.push(values)
			total = total + values
		}
		console.log(dice)
		return `\`${dice}\` = (${rolls.join("+")}) = ${total}`
	}catch(e){
		return 'error'
	}
});