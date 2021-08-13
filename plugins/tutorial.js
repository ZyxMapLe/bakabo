let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: *~ZyxMapLeBOT*

Ketik di *[TERMUX]*
1) $ apt update
2) $ apt upgrade
3) $ pkg install ffmpeg
4) $ pkg install imagemagick
5) $ pkg install nodejs

Untuk SC Nya..
Gak ada.....
6) $ termux-setup-storage
7) $ cd storage/downloads/(nama file yg kmu rename)

*Terakhir*..
Penginstalannya cuy :)
9 ) $ npm start

[ Note : Tanda $ Ga Perlu Di Ketik ]

*nanti ya*..
....

 Yaa!!
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['tutor']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
