module.exports = {
    name: 'help',
    description: "All the help you may need.",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFD7E4')
        .setTitle('Help')
        .setDescription('All the help you may need.')
        .addFields(
            {name: 'General', value: 'Type: b!generalhelp'},
            {name: 'Music', value: 'Type: b!musichelp'},
        )
        .setFooter('Bot created by: Bencee#7253');

        message.channel.send(newEmbed);
    }
}