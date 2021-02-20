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
	} 
      // If the message content starts with "!kick"
    if (message.content.startsWith('!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }


});

client.login(process.env.BOT_TOKEN);