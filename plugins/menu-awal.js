import fs from 'fs'
import os from 'os'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
let tagnya = `@${m.sender.split`@`[0]}`
let usrs = db.data.users[m.sender]
let psan = 'bagaimana kabarmu?'
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
let premium = global.db.data.users[m.sender].premiumTime
let prems = `${premium > 0 ? 'Premium': 'Free'}`
let platform = os.platform()
let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')

//------------------< MENU >----------------
let mangkane25 = "mangkane25"
let mangkane26 = "mangkane26"
let mangkane27 = "mangkane27"
let mangkane28 = "mangkane28"
let mangkane29 = "mangkane29"
let mangkane30 = "mangkane30"
let mangkane31 = "mangkane31"
let mangkane32 = "mangkane32"
let mangkane33 = "mangkane33"
let mangkane34 = "mangkane34"
let mangkane35 = "mangkane35"
let mangkane36 = "mangkane36"
let mangkane37 = "mangkane37"
let mangkane38 = "mangkane38"
let mangkane39 = "mangkane39"
let mangkane40 = "mangkane40"
let snd = `${pickRandom([mangkane25,mangkane26,mangkane27,mangkane28,mangkane29,mangkane30,mangkane31,mangkane32,mangkane33,mangkane34,mangkane35,mangkane36,mangkane37,mangkane38,mangkane39,mangkane40])}`
let audio = `./mp3/jancok.mp3`
await conn.sendFile(m.chat, audio, 'araa.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: sgc,
    mediaType: 2, 
    description: sgc,
    title: "Join Grup",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/714ad42b3854526c957b9.jpg')).buffer(),
    sourceUrl: sgc
  await conn.sendHydrated(m.chat, `
*Halo Kak ${usrs.registered ? usrs.name : conn.getName(m.sender)} bagaimana kabarmu?*

*Nama: ${usrs.registered ? usrs.name : conn.getName(m.sender)}*
*Nomor:* @${m.sender.split`@`[0]}
*Status: ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}*
*Pengguna: ${usrs.premiumTime > 1 ? 'Yes': 'No'}*
*Role: ${usrs.role}*
*Limit: ${usrs.limit}*
*Uang* : ${money}
*Type: Nodejs*
*Baileys: Multi Device*

*Waktu* ${moment.tz('Asia/Jakarta').format('HH')} H${moment.tz('Asia/Jakarta').format('mm')} M${moment.tz('Asia/Jakarta').format('ss')} S
  `.trim(), wm, giflogo, 'https://chat.whatsapp.com/EPmjuw9X1wZDGX1p4NCV1e', 'My Group', null, null, [, 'https://chat.whatsapp.com/EPmjuw9X1wZDGX1p4NCV1e', 'My Group', null, null, [
    ['SIMPLE', `.tesm`],
    ['ALL', `.?all`],
    ['SEWA', `.sewa`]
  ], m)
}
handler.help = ['menu']
handler.tags = ['menu']
handler.command = /^(menu|help)$/i

export default handler
