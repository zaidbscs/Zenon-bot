const { command, commands, bot } = require('./plugins')
let config = require('../config')
const { getBuffer, decodeJid, parseJid, parsedJid, getJson, isIgUrl, isUrl, getUrl, qrcode, secondsToDHMS, igdl, formatBytes, clockString, validateQuality, runtime, AddMp3Meta, Bitly, isNumber, getRandom, toAudio, readQr, getLyrics, isAdmin, toPTT } = require('./functions')
const { serialize, downloadMedia } = require('./serialize')
const { Greetings } = require('./Greetings')
const { sleep } = require('./utils')
module.exports = {
 bot,
 toAudio,
 toPTT,
 isPrivate: config.WORK_TYPE.toLowerCase() === 'private',
 Greetings,
 isAdmin,
 serialize,
 getLyrics,
 readQr,
 downloadMedia,
 getRandom,
 Function: command,
 command,
 commands,
 getBuffer,
 decodeJid,
 parseJid,
 parsedJid,
 getJson,
 isIgUrl,
 isUrl,
 getUrl,
 validateQuality,
 qrcode,
 secondsToDHMS,
 formatBytes,
 igdl,
 sleep,
 clockString,
 runtime,
 AddMp3Meta,
 Bitly,
 isNumber,
 sleep,
}
