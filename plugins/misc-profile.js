import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'

let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  var { status, setAt } = await conn.fetchStatus(who).catch(() => {
          return {
            status: "",
            setAt: "",
          };
        });
  let pp = await conn.profilePictureUrl((who), "image");
   
  try {
    pp = await conn.ProfilePictureUrl(who)
  } catch (e) {

  } finally {
    let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || ''
    let username = conn.getName(who)
    let str = `
• Name: ${username}, \n• Tag: @${who.replace(/@.+/, '')}, ${about ? '\n• Bio: ' + about : ''}, \n• Set At Bio: ${(setAt && moment(setAt).format("DD MMMM YYYY")) || "Unknown"}, \n• Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')},\n• Link: https://wa.me/${who.split`@`[0]}`.trim()

    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpeg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^(profile)$/i
handler.group = false

export default handler

// parel dan kaliph
// johnes dan cina