const fs = require("fs") 

const axios = require ("axios")

const fetch = require("node-fetch")

let handler = async (m, { conn, args }) => {
	let code = (args[0] || '').replace(/\D/g, '')
	if (!code) throw 'DOWNLOAD SENDIRI DI NHENTAI.COM/CODE NYA' 
	await m.reply('DOWNLOAD SENDIRI DI NHENTAI.COM/CODE NYA')
	let res = await fetch('nhentai.com?code='+code)
	if (!res.ok) throw await res.statusText
	let json = await res.json()
	let buffer = await (await fetch('https://external-content.duckduckgo.com/iu/?u=' + json.result.pages[0])).buffer()
	let jpegThumbnail = await extractImageThumb(buffer)
	conn.sendMessage(m.chat, { document: { url: 'https://nhentai.com/'+code }, jpegThumbnail, fileName: json.result.title + '.pdf', mimetype: 'application/pdf' }, { quoted: m })
}
handler.help = ['nhentai']
handler.tags = ['premium']
handler.command = /^(nhentai)$/i

handler.limit = false
handler.premium = true
module.exports = handler