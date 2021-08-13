let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
  if (!text) throw 'Cari apa Kak?'
  let chat = global.DATABASE._data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let isVideo = /2$/.test(command)
  let yt = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nMencoba Menyambung Ke Server Lain...'}`)
    }
  }
  if (yt === false) throw 'Semua Server Hagal'
  if (yt2 === false) throw 'Semua Server Gagal'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  await conn.send2ButtonImg(m.chat, `
*Judul:* ${title}
*Ukuran File Audio:* ${filesizeF}
*Ukuran File Video:* ${yt2.filesizeF}
*Server y2mate:* ${usedServer}
          `.trim(),
    await (await fetch(thumb)).buffer(), 'Click To Continue', 'AUDIO', `.yta ${vid.url}`, 'VIDEO', `.yt ${vid.url}`)
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play$/i

handler.exp = 0

module.exports = handler
