import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
await conn.reply(m.chat, global.wait, m)

let type = (command).toLowerCase()

switch (type) {
case 'waifu':
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
  conn.sendButton(m.chat, 'Random Image Waifu', "By Papah-Chan", json.url, [['waifu', `${usedPrefix}waifu`]], m, { viewOnce: true })
break

case 'neko':
  let _neko = await fetch('https://api.waifu.pics/sfw/neko')
  if (!_neko.ok) throw await _neko.text()
  let neko = await _neko.json()
  if (!neko.url) throw global.error
  conn.sendButton(m.chat,  'Random Image Neko', "By Papah-Chan", neko.url, [['Next','.neko']],m, { viewOnce: true })
break 

case 'megumin':
  let _megumin = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!_megumin.ok) throw await _megumin.text()
  let megumin = await _megumin.json()
  if (!megumin.url) throw global.error
  conn.sendButton(m.chat, 'Random Image Megumin', "By Papah-Chan", megumin.url, [['Next','.megumin']],m, { viewOnce: true })
break

case 'shinobu':
  let _shinobu = await fetch('https://api.waifu.pics/sfw/shinobu')
  if (!_shinobu.ok) throw await _shinobu.text()
  let shinobu = await _shinobu.json()
  if (!shinobu.url) throw global.error
  conn.sendButton(m.chat, 'Random Image Shinobu', "By Papah-Chan", shinobu.url, [['Next','.shinobu']],m, { viewOnce: true })
break

default:
 }
}

handler.help = ['waifu', 'neko', 'megumin']
handler.tags = ['random']
handler.command = /^(waifu|neko|megumin|shinobu)$/i

export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
