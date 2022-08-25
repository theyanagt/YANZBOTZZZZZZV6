let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭❰𝙮𝙖𝙣𝙯𝙗𝙤𝙩❱
╭━━━━「 *SEWA BOT PREMIUM HARGA VIA E WALLET* 」
 ┊⫹⫺ *Hemat:* _5K/grup (1 minggu)_
 ┊⫹⫺ *Normal:* _10K/grup (1 bulan)_
 ┊⫹⫺ *Standar:* _25K/grup (3bulan)_
 ┊⫹⫺ *Pro:* _40K/2grup (5 bulan)_                                                        
 ┊⫹⫺ *Vip:* = _60K/3grup (12 bulan)_
╰═┅═━––––––๑
*⫹⫺ PAYMENT • E WALLET:*
• *Dana:* [0812-5893-0466]
• *OVO:* [0812-5893-0466]
• *Gopay:* [0812-5893-0466]
• *SPAY:* [0812-5893-0466]

╭━━━━「 *SEWA BOT PREMIUM HARGA VIA PULSA* 」
 ┊⫹⫺ *Hemat:* _7500K/grup (1 minggu)_
 ┊⫹⫺ *Normal:* _15K/grup (1 bulan)_
 ┊⫹⫺ *Standar:* _35K/grup (3bulan)_
 ┊⫹⫺ *Pro:* _55K/2grup (5 bulan)_                                                        
 ┊⫹⫺ *Vip:* = _75K/3grup (12 bulan)_
╰═┅═━––––––๑
┌─「 PAYMENT • Pulsa 」
│ • *Telkomsel:* [0812-5893-0466]
❏────


 *KE UNTUNGAN MEMBELI BOT PREMIUM*
• *BOT BEDA NOMOR DARI YANG GRATIS*
• *MENDAPATKAN ROLE MODERATOR*
• *MENDAPATKAN ROLE PREMIUM*
• *TIDAK MENDAPATKAN BROADCAST/SIARAN DARI OWNER [TIDAK DI JAMIN]*


🗣️: APA ITU ROLE MODERATOR & PREMIUM
💬: ROLE MODERATOR BISA MENGAKSES SEBAGIAN FITUR YANG DI MILIKI OWNER SEPERTI ADD PREMIUM,MEMBERI PERINGATAN MEMBER,BANNED USER 

💬: ROLE PREMIUM ADALAH UNLIMITED LIMIT BISA MENGAKSES FITUR PREMIUM SEPERTI HENTAI

🗣️: APA ITU BANNED USER
💬: BANNED USER ADALAH NGELARANG PENGGUNA YANG DI BANNED UNTUK MEMAKAI BOT

💬: ADA YANG MAU DI TANYA KAN BISA LANGSUNG CHAT OWNER KETIK .owner 
UNTUK MENDAPATKAN NOMOR PEMILIK BOT 
–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
❏────
╰────
`.trim(), wm, 'NOMOR OWNER', usedPrefix + 'owner', m) // Tambah sendiri kalo mau
handler.help = ['sewapremium']
handler.tags = ['main']
handler.command = /^sewa(prem)(ium)$/i

module.exports = handler