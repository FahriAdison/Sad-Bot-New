import { tiktokdlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    await m.reply('_In progress, please wait..._')
    if (!args[0]) throw `Input URL`
    const { author: { nickname }, video, description } = await tiktokdlv3(args[0])
    const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark 
    if (!url) throw 'Can\'t download video!'
conn.sendHydrated(m.chat, `> *Url:* ${await shorten(url)}\n> *Author:* ${nickname}${description ? `\n> *Description:* ${description}` : ''}`, await shorten(url), url, null, null, null, null, ['Audio', `${usedPrefix}tomp3`], m, { viewOnce: true })
    /* conn.sendFile(m.chat, url,  `
${l} 🔗 ${r}*Url:* ${await shorten(url)}\n${l} 🔭 ${r} *Author:* ${nickname}${description ? `\n${l} 📝 ${r} *Description:* ${description}` : ''}
`.trim(), m) */
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tt|tiktok)(dl|nowm)?$/i

export default handler

async function shorten(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}
