module.exports = {
    name: 'help',
    description: "Egy kis segítség.",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFD7E4')
        .setTitle('Help')
        .setDescription('Music')
        .addFields(
            {name: 'Play', value: 'Command: play song name or link'},
            {name: 'Leave', value: 'Command: leave'},
        )
        .setFooter('Note: Bubby doesn’t quit when the music is over, she just send a message.');

        message.channel.send(newEmbed);
    }
}