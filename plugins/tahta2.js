let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[❗] Wait,Tunggu Bentar Kak Sedang Dalam Proses...*')
  let res = `https://api.zeks.xyz/api/hartatahta?apikey=ramaganzapikey&text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['tahta2'].map(v => v + ' <teks>')
handler.tags = ['nulis']
handler.command = /^(tahta2)$/i
handler.limit = true
handler.register = true
handler.group = false
handler.owner = false
handler.premium = false

module.exports = handler
