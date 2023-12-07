const Discord = require('discord.js');
const client = new Discord.Client({
    intents:[
        Discord.IntentsBitField.Flags.Guilds,
        Discord.IntentsBitField.Flags.GuildMessages,
    ]
}) 


client.login('MTE0MjY1MTc1OTcxODgzMDE2MA.GWa3t3.7-yTjRk0k2n-hLUBledxP_cxUKCf1PG-hme1u8')
client.on('ready',readyDiscord);

function readyDiscord(){
    console.log('loggged in as Jarvis');
}
client.on('messageCreate', (message) => {
    const authorName = message.author.displayName;
    const bot_name = client.user.displayName;
    var msg_content = message.content;
    if (authorName === bot_name){
        
    }
    else {
        msg(msg_content=msg_content)
    }
});
function msg(msg_content) {
    console.log('it');
    if (message.channel.id == '1128711334163398706' && msg_content.includes('Jai shree ram')) {
        console.log('it');
        message.reply('Jai shree ram');
        
    }
}
