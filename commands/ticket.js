module.exports  = {
    name: 'ticket',
    aliases: [],
    permissions: [],
    description: 'Open a ticket!',
    async execute(message, args, cmd, client, discord){
        const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
        channel.setParent('839522299769520128');

        channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGE: false,
            VIEW_CHANNEL: false,
        });
        channel.updateOverwrite(message.author, {
            SEND_MESSAGE: true,
            VIEW_CHANNEL: true,
        });

        const reactionMessage = await channel.send('Thank you for contacting support!');

        try{

            await reactionMessage.react(":lock:");
            await reactionMessage.react(":no_entry:");
        }catch(err){
            channel.send('Error sending emojis!');
            throw err;
        }

        const collector = reactionMessage.createReactionCollector((reaction, user) => 
          message.guild.members.cache.find((member) => member.id === user.id).hasPermission('ADMINISTRATOR'),
          { dispose: true }
        );

        collector.on('collect', (reaction, user) => {
            switch (reaction.emoji.name){
                case ":lock:":
                    channel.updateOverwrite(message.author, { SEND_MESSAGES: false})
                    break;
                case ":no_entry:":
                    channel.send('Deleting this channel in 5 seconds!');
                    setTimeout(() => channel.delete(), 5000);
                    break;
            }
        });
        message.channel.send(`We will be right with you! ${channel}`).then((msg) => {
            setTimeout(() => msg.delete(), 7000);
            setTimeout(() => message.delete(), 3000);
        }).catch((err) => {
            throw err;
        });
    },
};