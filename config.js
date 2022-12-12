import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['94740979220', 'RedAlpha', true],
  [''], 
  [''] 
] //Numeros de owner 

global.mods = ['94740979220'] 
global.prems = ['94740979220', '64764880177', '94711717897']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'Chintu Bot' 
global.author = '@RedAlpha' 
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/mukarrammhmd\n' 
global.dygp = 'https://chat.whatsapp.com/Jx7f5x3wSU7D8a9ntdFB3j'
global.fgsc = 'https://github.com/RedAlpha137/Chintu-Bot-V1' 
global.fgyt = 'https://youtube.com/@user-gq5sx7cg4v'
global.fgpyp = 'https://youtube.com/@user-gq5sx7cg4v'
global.fglog = 'https://raw.githubusercontent.com/RedAlpha/api/Alpha/alpha.jpg' 

global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
