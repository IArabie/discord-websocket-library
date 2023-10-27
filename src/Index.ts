import Client from './client/Client';

const bot = new Client('', {
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'MESSAGE_CONTENT'
    ]
})

bot.on('ready', async(d) => {
    console.log(bot.readyAt)
    console.log(bot.readyTimestamp);
    console.log(bot.user.avatarURL());
    console.log(bot.user.createdAt)
})

bot.on('messageCreate', async(message) => {
    if(message.content == 'hi') {
        message.pin({ reason: 'Discord WebSocket Library' })
        setTimeout(() => { 
            message.delete({ reason: 'Time Over. Man' }).then((msg) => {
                console.log(msg.content)
            })
        }, 5000)
    }
});

