//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "adamsandra8056.gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/BADBOI-v1/Queen-BHAD-DC-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/dad04122a49867dffb830.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/53353f917aa29807b8a64.jpg,https://telegra.ph/file/9f7c67312af37da75d47e.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUEyMkd3U2dML3kyNEQyYVp5T3hVMzRjTnFFcm9VZFVVQUhOc1g1NHAyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjNqcEpsNzhjQ1BIMjZaaFRNN0FmNVpEN0FpMEh3K2RMbnRzUXR3NjRndz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSmVheVd0REJFT2tVYWdQSGFSYW13Uy9zeEp4amszZVhHclc3RWZGdkZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxWnhnbnpkTGpkYmhibklXRFB0NXppQzhZT3RyQytzbTk2SUQwcVpGbEdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVFL05xdVZmNktBRlJWNVJyeVJQV3F1MFVoRU5vMmdrb2xybHZZV2dhMWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk4T2dscXBtVzg4bWxDdU9FS3c3SW9mbzhvRkRSLzRrcE9mcjQ0bXN5M1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0VadGFnL2N1b0FqWEF0cWtndG1ZMmw0VGp4eG1GbGN0eTRXUW5xdlowWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0hQZ3gxU0JLMmtFcUNPcTFGbGRsY3JuV1JNNlZ1bGEraEpoQWVlWkttdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVoWGNFa1BOcXY3eUQxU0VKRFhrTC9uam0wSENNUXlxSDB3UTBFZzZsMVQzd1lySjFsejFUYzRFUGkwS001cGwvTWpqcVdDRStvWDlydDh5TGxLMUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiI2SnBhWE1MYXFDTHhSZ2FGbThBUG5zamZ5bW5na0pCRGZOSjhoczkvMElBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSelVWMTV0eFJWLV9kVl9PNXBMb1JnIiwicGhvbmVJZCI6ImFhMjJiYjJjLTNlYmMtNDFiZi05NzJlLTQ0MDhlMmZhZTkyYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoSlZyTXhHUlJWc2NiTi9EMXl3WXZCbnRGWWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0dyOFQweVpOdkxPV09JRzhFYm5CR2huSkxFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFSNEJYUldSIiwibWUiOnsiaWQiOiIyMzQ5MTMzNTIyODUyOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWZKazlRRUVKN3lrN2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVkFGWW9GY3FOMGd2Z0JaWjYwbWh6aFVReUNlMlNFREVnNy9KOExRUHFBWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaUkwdmZOWUtSYk11d3ZTMG01MDZPRm4yOHplUXRmVS95RmFWUUxRUmN1RDE0TjdsY3UxK1NKTENVa25RZE1IZkhTcUFrMDRTbkJRNzlVVDhFSktQRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IkErdUZjanRzamVXc3hRdk1hYjFMa3Jxd1V0emphVXE4Z1ROcCt2YXhqSGZSUjVWQjZXSDd0bGNYZ3R0WHR6azNTODJldzN5encvNmFVT1RQQnVNT0FRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEzMzUyMjg1MjoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZRQldLQlhLamRJTDRBV1dldEpvYzRWRU1nbnRraEF4SU8veWZDMEQ2Z0cifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjYyODIwMjl9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_♡ƁӇƛƊ ƊƇᴸᴼᴿᴰ-MD™`",
  author: process.env.PACK_AUTHER || "QUEEN_♡ƁӇƛƊ ƊƇᴸᴼᴿᴰ-MD",
  packname: process.env.PACK_NAME || "♡ Ɓ Ӈ ƛ Ɗ Ɗ Ƈᴸ ᴼ ᴿ ᴰ",
  botname: process.env.BOT_NAME || "QUEEN_♡ƁӇƛƊ ƊƇᴸᴼᴿᴰ-MD",
  ownername: process.env.OWNER_NAME || "BADBOI HACKER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "B H A D").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
