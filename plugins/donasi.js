let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭❰𝙮𝙖𝙣𝙯𝙗𝙤𝙩❱
┌─「 Donasi • Pulsa 」
│ • *Telkomsel:* [0812-5893-0466]
❏────

┌─「 Donasi • Non Pulsa 」
• *⫹⫺ PAYMENT:*
• *Dana:* [0812-5893-0466]
• *OVO:* [0812-5893-0466]
• *Gopay:* [0812-5893-0466]
• *SPAY:* [0812-5893-0466]

–––––– *🐾 Kebijakan* ––––––
🗣️: EMG HASIL DONASI NYA DI BUAT APA?
💬: JELAS BUAT KEPERLUAN BOT SEPERTI BELI VPS/RDP BIAR BOT ON 24JAM DAN FASTRESPON
❏────
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^dona(te|si)$/i

module.exports = handler