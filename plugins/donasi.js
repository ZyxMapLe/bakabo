let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *THREE:* [0895-3782-64836]
┣➥ *Gopay:* [0895-3782-64836]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/62895378264836*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
