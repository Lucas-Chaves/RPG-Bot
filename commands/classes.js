const {classes} = require('../controllers/index')

module.exports = {
	name: 'class',
	description: 'Show class!',
	async execute(msg, args) {
		msgReply = await reply(args)
		msg.channel.send(msgReply);
	},
}


const reply = async(args) => {
	switch(args[0]){
		case 'all':
			return await classes.allClasses();
			break;
		default:
			return await classes.classSpecified(args[0]);
			break;
	}
}