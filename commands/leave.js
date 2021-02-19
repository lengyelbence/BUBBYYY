module.exports = {
    name: 'leave',
    description: '',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("To use this command, you must join a sound room!");
        await voiceChannel.leave();
        await message.channel.send('Leaving audio channel... :pleading_face:')
 
    }
}