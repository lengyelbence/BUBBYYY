module.exports = {
    name: 'leave',
    description: 'Állítsd le a lejátszást és a bot kilép.',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("Ahhoz, hogy használd ezt a parancsot, csatlakoznod kell egy hangszobába!");
        await voiceChannel.leave();
        await message.channel.send('Hangcsatorna elhagyása :smiling_face_with_tear:')
 
    }
}