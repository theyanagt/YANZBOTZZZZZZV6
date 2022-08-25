let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
  let { indo, character, anime } = json.result[0]
m.reply(`${indo}\n\n${character}\n${anime}`)
}
handler.help = ['katanime']
handler.tags = ['qoutes']
handler.command = /^(katanime|kataanime)$/i
handler.limit = false
module.exports = handler