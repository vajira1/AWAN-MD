const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *AWAN ZADA*

> *AWAM MD REPO:*
*|* *https://github.com/itzawanzada/AWAN-MD*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029VaxurQT1t90ad7JBJN00*
*╰──────────────●●►*

> *AWAN-MD*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '12036323288171807@newsletter',
      newsletterName: "UMAR",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'AWAN MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/itzawanzada/MUDASSAR-MD" ,
thumbnailUrl: "https://qu.ax/OAbEA.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
