module.exports = {
    name: 'musichelp',
    description: "All the help you may need.",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFD7E4')
        .setTitle('Music Help')
        .setDescription('All the help you may need.')
        .addFields(
            {name: 'Play', value: 'Type: play songname or link'},
            {name: 'Leave', value: 'Type: leave'},
        )
        .setFooter('Bot created by: Bencee#7253');

        message.channel.send(newEmbed);
    }
}