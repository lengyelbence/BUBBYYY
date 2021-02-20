module.exports = {
    name: 'botinfo',
    description: "Botinfo",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFD7E4')
        .setTitle('Botinfo')
        .setDescription('Everything you need to know about Bubby.')
        .addFields(
            {name: 'Owner', value: '@Bencee#7253'},
            {name: 'Help', value: 'Type: b!help'},
            {name: 'Prefix', value: 'b!'}
        )
        .setFooter('Bot created by: Bencee#7253');

        message.channel.send(newEmbed);
    }
}