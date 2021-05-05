module.exports = {
    name: 'serverinfo',
    description: "Serverinfo",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFD7E4')
        .setTitle('╔═══════ Serverinfo ═══════╗')
        .setDescription('All information of the server.')
        .addFields(
            {name: 'Server name', value: `${message.guild.name}`},
            {name: 'Total members', value: `${message.guild.memberCount}`},
            {name: 'Owner', value: `${message.guild.owner}`},
            {name: 'Region', value: `${message.guild.region}`}
        )
        .setFooter('Bot created by: Bencee#7253');

        message.channel.send(newEmbed);
    }
}