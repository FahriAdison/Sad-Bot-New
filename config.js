import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { watchFile, unwatchFile } from 'fs'
import moment from 'moment-timezone'

global.owner = [
  ['+62 822-8721-9167'],
  ['+62 895-6121-53565'],
  ['+62 822-8721-9167', 'Papah-Chan', true],
  ['+62 895-6121-53565', 'Johannes', true],
  ['+687 86.94.15', 'Johannes2', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.wm = ["New Base Papah-Chan"]
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  violetics: 'https://violetics.pw',
  hadi: 'http://hadi-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://violetics.pw': 'beta'
}

global.thumbnailUrl = [
  'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
  'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
  'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
  'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'
]

global.wm = '                「 ꜱᴀᴅ BOT あ⁩ 」' 

global.wm2 = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘օառɛʀ - chαn˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'

global.wm3 = '⫹⫺ ꜱᴀᴅ 𝗕𝗢𝗧'

global.botdate = `⫹⫺ Date :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`

global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`

global.titlebot = `⫹⫺ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}\n⫹⫺ Date Server :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
`

global.author = '                「 ꜱᴀᴅ BOT あ⁩ 」'

// Sticker WM
global.packname = ''
global.author = ''

global.sgc = 'https://chat.whatsapp.com/Eo0rT2MCSiWIijy7fMHlB7'
global.sig = 'https://instagram.com/bot_whangsaf'
//========Url Template Buttons=========//
global.dtu = 'ɪɴꜱᴛᴀɢʀᴀᴍ'
global.urlnya = "https://www.instagram.com/bot_whangsaf"

//============= callButtons =============//
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '+62 822-8721-9167'
global.multiplier = 69 // The higher, The harder levelup
/*============== NOMOR ==============*/
global.nomorbot = '66801944580'
global.nomorown = '6282287219167'
global.namebot = 'Sad-Bot'
global.nameown = 'Papah-Chan'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = '❏═┅═━–〈' //top
global.dmenub = '┊›' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU
global.dashmenu = '┅━━━━━═┅═❏ *DASHBOARD* ❏═┅═━━━━━┅'
global.cmenut = '❏––––––『' //top
global.cmenuh = '』––––––' //header
global.cmenub = '┊々 ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '✦' //pembatas menu selector

global.htki = '––––––『' //hiasan title kiri
global.htka = '』––––––' //hiasan title kanan
global.lopr = 'Ⓟ'
global.lolm = 'Ⓛ'
global.htjava = '⫹⫺' 
global.hsquere = '⛶', '❏', '⫹⫺'
global.l = '「'
global.r = '」'

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      bibitanggur: '🍇',
      bibitpisang: '🍌',
      bibitjeruk: '🍊',
      bibitapel: '🍎',
      bibitmangga: '🥭',
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
