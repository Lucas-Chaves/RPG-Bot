const {spell} = require('../controllers/index');

module.exports = {
	name: '.spell',
	description: 'return a spell!',
	async execute(msg, args) {
		const spellReturn = await spell(args);
		msg.channel.send(spellReturn);
	},
}