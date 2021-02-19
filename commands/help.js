module.exports = {
    name: 'help',
    description: "Egy kis segítség.",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFD7E4')
        .setTitle('Segítség')
        .setDescription('Minden, ami kellhet, itt van.')
        .addFields(
            {name: 'Első segítség', value: 'ASD'},
            {name: 'Második segítség', value: 'aASD'},
            {name: 'Harmadik segítség', value: 'dASD'},
            {name: 'Negyedik segítség', value: 'ASD'}
        )
        .setFooter('ASDASDASDASD');

        message.channel.send(newEmbed);
    }
}