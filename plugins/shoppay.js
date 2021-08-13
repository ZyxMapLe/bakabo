let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*METODE PEMBAYARAN*

*GOPAY*
0878-3499-3722
Raku

*PULSA* 
0878-3499-3722
Raku

*SHOPEEPAY* 
0818-242-668
Yesi Mahanta

NOTE : PEMBAYARAN TERKENA PAJAK 2RB
`.trim()

conn.fakeReply(m.chat, shoppay, '0@s.whatsapp.net', '*GAMESHOP*', 'status@broadcast')
}
handler.help = ['shoppay']
handler.tags = ['info']
handler.command = /^(shoppay)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
