module.exports = {
    name: 'generalhelp',
    description: "All the help you may need.",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFD7E4')
        .setTitle('General Help')
        .setDescription('All the help you may need.')
        .addFields(
            {name: 'Serverinfo', value: 'Type: serverinfo'},
        )
        .setFooter('Bot created by: Bencee#7253');

        message.channel.send(newEmbed);
    }
}