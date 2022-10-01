import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix, command }) => {

let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://github.com/FahriAdison/Sad-Bot-New*\nSubscribe Untuk Mengetahui Update Selanjutnya:bit.ly/Papah-Chan\nSilahkan follow github saya dibawah ,Terimakasih`

conn.sendButton(m.chat, str, null,null,[['Menu',`${usedPrefix}menu`]], m, { viewOnce: true})

}

handler.command = handler.help = ['sc']

handler.tags = ['info']

export default handler
