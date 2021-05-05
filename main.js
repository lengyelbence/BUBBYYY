const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'b!';

const fs = require('fs');
const { CLIENT_RENEG_WINDOW } = require('tls');

client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Bubby is online!');
    client.user.setActivity(`b!help <- to get help.`, {type: "PLAYING"}); 
});

client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    } else if (command === 'play') {
        client.commands.get('play').execute(message, args);
    } else if (command === 'leave') {
        client.commands.get('leave').execute(message, args);
    } else if (command === 'serverinfo') {
        client.commands.get('serverinfo').execute(message, args, Discord);
    } else if (command === 'generalhelp') {
        client.commands.get('generalhelp').execute(message, args, Discord);
    } else if (command === 'botinfo') {
        client.commands.get('botinfo').execute(message, args, Discord); 
    } else if (command === 'musichelp') {
        client.commands.get('musichelp').execute(message, args, Discord);
    } else if (command === 'servers') {
		return message.channel.send(`***Bubby online on ${client.guilds.cache.size} servers***`);
	} else if (command === 'ticket') {
        client.commands.get('ticket').execute(message, args, cmd, client, discord);
    }


});

client.login(process.env.BOT_TOKEN);