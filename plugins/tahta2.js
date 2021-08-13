let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'masukkan parameter'
  m.reply('*[❗] wait,tunggu bentar kak sedang dalam proses...*')
  let res = `https://api.zeks.xyz/api/hartatahta?apikey=ramaganzapikey&text=${response}`
  conn.sendfile(m.chat, res, 'nama.jpg', `nih mhank`, m, false)
}
handler.help = ['neontext'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(neontext)$/i
handler.limit = true
handler.register = true

module.exports = handler
