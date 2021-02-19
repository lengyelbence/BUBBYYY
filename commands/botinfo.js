module.exports = {
    name: 'botinfo',
    description: "Everything you need to know about Bubby.",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFD7E4')
        .setTitle('Botinfo')
        .setDescription('Everything you need to know about Bubby.')
        .addFields(
            {name: 'Name', value: 'Bubby'},
            {name: 'Owner', value: 'Bencee#7253'},
            {name: 'Online', value: `${client.guild.cache.size}`},
            {name: 'Prefix', value: 'b!'},
            {name: 'Help', value: 'b!help'},
            {name: 'Support server', value: 'https://discord.gg/Rgcfqdkbxn'},
        )
        .setFooter('Bot created by: Bencee#7253');

        message.channel.send(newEmbed);
    }
}