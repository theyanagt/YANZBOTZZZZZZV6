let handler = async (m, { conn, isOwner, text, isAdmin }) => {
  let who
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
    }
    if (isOwner) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    else who = m.chat
  } else {
    if (!isOwner) {
      global.dfail('owner', m, conn)
      throw false
    }
    who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
  }

  try {
    if (who.endsWith('g.us')) global.db.data.chats[who].isBanned = true
    else global.db.data.users[who].banned = true
    m.reply(`Berhasil ON IN FITUR ONLY ADMIN! ${await conn.user.name} HANYA BISA DI GUNAKAN OLEH ADMIN GRUP ${await conn.getName(who) == undefined ? 'ini' : await conn.getName(who)}. JIKA BOT INGIN DI GUNAKAN SEMUA MEMBER KETIK .allmem`)
  } catch (e) {
    throw `nomor tidak ada didatabase!`
  }
}
handler.help = ['adminonly']
handler.tags = ['group']
handler.command = /^adminonly?$/i
handler.admin = true
module.exports = handler
