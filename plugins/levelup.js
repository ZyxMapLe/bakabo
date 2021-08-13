let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.DATABASE.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.role, user.exp, global.multiplier)) {
    let { min, xp, max, role } = levelling.xpRange(user.level, global.multiplier)
    throw `
Level *${user.level} (${user.exp - min}/${xp})*
Kurang *${max - user.exp}* Lagi!
`.trim()
  }
  user.level++
  m.reply(`
Selamat, anda telah naik level!
*${user.level - 1}* -> *${user.level}*
*${role}*
  `.trim())
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^levelup$/i

module.exports = handler
