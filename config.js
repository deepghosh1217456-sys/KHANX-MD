const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VU25KiSBD9l3rFGAEVxIiOWERUVLwh2PTGPhRQXBQorCoQmPDfN7Cne+ZhdqKXpyIrMvPkOSfrO8hxQtEaNWDyHRQkqSBD3ZE1BQITMC3DEBHQAwFkEEwA3i9vx9HpTpg1pfY9cHeRWydqeT96TRwmHFSxnMvmSBSuL+DRA0XppYn/h4KHdqpe7wFfLjeYa6XZNJuNkb6WZOmYOfvz6lVI8f5cako8fgGPriJMSJJHehGjDBGYrlGzhwn5GvxGlwoJj2/XrF1yh3BdvVJjDbMhofruIM+peLoHgiyrwdL8Gnx6EzfeoiSJFUn3uXJAWsyFZ+qgC6vqZf62M5bz/gUhNeXf4dMkylFgBChnCWu+zLu0GSSidURoe1nv1aBl6kiX6G7gRo7lCpy48CLPobXX5u7XgLuVa5H9yiyu2q2vhDLXZ1bc4JtyqC0jhtwp311Te7xaLOivwPfkwyvX/8O7asztipYXSZzXuSAGWUuKcT1T0qOviO2K38qbNHO2912GvwZ/vHbk0NDNaKusvLNteHc1w+V6+jo38oJi7mRbJHu776YD/yd8yEryJ5TcJYCz6azErr/xTqg6rY7KrRHr0mBrVUy8Q3514td1P+bj/caqlmmDL2m2QVN9VA030RFnRJV4z1xH8i6G3nxjTytVfXlOdEWNEYCJ8OgBgqKEMgJZgvMuJo6GPQCDykI+QexJLzi7LZLs2o5rPsAzOa9N287DQX++ut4s5XbyUs3XdWPm7OgL6IGCYB9RioJlQhkmjYkohRGiYPL3Pz2Qo5q9C9e1GwuDHggTQpmdl0WKYfAh6+ct9H1c5sxqcl/rDoiACf8zjBhL8oh2TJY5JH6cVEiLIaNgEsKUos8ZEUEBmDBSos+91XDQUa9bznmhDTTQA9lTkiQAE6AIkqjw0pCXJX4ykP6i3+5dWVgU33LEQA/kMHsKBz2YgB5In1kyPxSVocQrI2U4HHZ5XfzxibcrHyAGk5SCCdA251Gk08O1f7m3d9dVLVVdq2rH4sd8H1Z5l0KPxIqY1304d9zBEKU1LyEv20sGMsxdUFJ3xFhrHsdydvhdETABJyqZ5sbPqz60mht2I30wUG28MPYHw91i9zYwdrcD5u3LeKMJGcKIvYW+YZxq7tU5CtOo3Qbb4xvO4NHBl7OzOV/OWvTSdQtQlfjo12ZUOytvG1zxSt3q3CxeilHoDhGnenw/YPvyIJw85kaKUpxWaTZqRql93R+FVuXmprBc2FLmxguzXpnEufSnY2e+5YpZ9G7i5xKlPx6v5GmvTrnuN0zQ8y34odDvNfnA2xmNf/R+Sf3xqPzHYk6PxpZI7Wo2qJ3zllsWfrDLs9GFS5bJbJZ7ZLHzPL/Vw93oCh6Pf3qgSCELMck6QjIPgh4guOxca+Qh/kMnTTUNTY2sbtoUUqb+3IRTkiHKYFaAiSDLY2EwFgZKD2SNWhQWg+xjg4DafYv7ETz+BePiDKNeBwAA",  // Your bot's session ID (keep it secure)
    XDEV: process.env.XDEV || "",  // Github Username 
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
    CHATBOT: getConfig("CHATBOT") || "off", // on/off chat bot 
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "KHAN-MD",  // Bot's display name
    MODE: getConfig("MODE") || process.env.MODE || "private",        // Bot mode: public/private/group/inbox
    REPO: process.env.REPO || "https://github.com/JawadTechXD/KHAN-MD",  // Bot's GitHub repo
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",  // Bot's BAILEYS

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923427582273",  // Owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "Jᴀᴡᴀᴅ TᴇᴄʜX",           // Owner's name
    DEV: process.env.DEV || "923427582273",                     // Developer's contact number
    DEVELOPER_NUMBER: '923427582273@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // Enable/disable auto-reply
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?
    REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    OWNER_REACT: process.env.OWNER_REACT || "false",              // Auto-react to messages?
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // set custom reacts
    STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?
    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
    MENTION_REPLY: process.env.MENTION_REPLY || "false",   // reply on mentioned message 
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/7zfdcq.jpg",  // Bot's "alive" menu mention image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // true antidelete to recover deleted messages 
    ANTI_CALL: process.env.ANTI_CALL || "false", // enble to reject calls automatically 
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",    // Block bad words?
    ANTI_LINK: process.env.ANTI_LINK || "true",    // Block links in groups
    ANTI_VV: process.env.ANTI_VV || "true",   // Block view-once messages
    DELETE_LINKS: process.env.DELETE_LINKS || "false",          // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", // inbox deleted messages (or 'same' to resend)
    ANTI_BOT: process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // Allow public commands?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // React to status updates?
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // VIEW to status updates?
    AUTO_BIO: process.env.AUTO_BIO || "false", // ture to get auto bio 
    WELCOME: process.env.WELCOME || "false", // true to get welcome in groups 
    GOODBYE: process.env.GOODBYE || "false", // true to get goodbye in groups 
    ADMIN_ACTION: process.env.ADMIN_ACTION || "false", // true if want see admin activity 
};
        
