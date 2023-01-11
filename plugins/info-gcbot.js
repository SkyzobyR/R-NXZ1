import fs from 'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let pp = fs.readFileSync('./thumbnail.jpg')
         let gc1 = ''
         let caption = `*Gc Bot Coming Soon*`
         await conn.sendButtonDoc(m.chat, caption, wm, 'Owner', '.owner', m, { contextInfo: { 
             externalAdReply: {
               sourceUrl: `${gc1}`,
               title: 'Soon', 
               body: 'R-NXZ',
               thumbnail: pp
             } 
         }})
         }

handler.tags = ['info']
handler.command = /^gcbul$/i
 export default handler