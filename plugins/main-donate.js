
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
ONLY WANT YOUR LOVE
SUPPORT ME ON INSTAGRAM`
let img = 'https://raw.githubusercontent.com/RedAlpha137/api/Alpha/alpha.jpg'
conn.sendHydrated2(m.chat, don, '▢ Life Is Very Short Always Be Happy\n▢ Chintu-Bot\n▢ Subscribe  Youtube\nhttps://youtube.com/@user-gq5sx7cg4v\n', img,'https://www.instagram.com/mukarrammhmd', 'Instagram', 'https://t.me/redalpha1', 'TELEGRAM', [
    ], m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
