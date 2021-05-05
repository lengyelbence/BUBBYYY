module.exports = {
    name: 'serverinfo',
    description: "Serverinfo",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFD7E4')
        .setTitle('╔═══════ Serverinfo ═══════╗')
        .setDescription('All information of the server.')
        .setDescription(`Owner: ${message.guild.owner.user.tag} (${message.guild.owner.id})`)
        .addField('Member Count', `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} (${message.guild.members.filter(m=>m.user.bot).size} bots)`, true)
        .addField('AFK Timeout', `${message.guild.afkTimeout / 60} minutes`, true)
        .addField('AFK Channel', `${message.guild.afkChannelID === null ? 'No AFK Channel' : client.channels.get(message.guild.afkChannelID).name} (${message.guild.afkChannelID === null ? '' : message.guild.afkChannelID})`, true)
        .addField('Location', message.guild.region, true)
        .addField('Created', message.guild.createdAt.toLocaleString(), true)
        .addBlankField(true)
        .setTimestamp()
        .setFooter('Bot created by: Bencee#7253');

        message.channel.send(newEmbed);
    } 
}