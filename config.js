const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.Owner = ['201126554338']
global.OwnerNumber = ['201126554338']
global.ownertag = ['201126554338']
global.BotName = "๐ ๐ด ๐ ๐ ๐ ๐ ๐ผ [๐ต๐๐]"
global.packname = "โ๐ ๐ด ๐ ๐ ๐ ๐ ๐ผ]โ"
global.author = "โ01126554338โ"
global.OwnerName = "๐ ๐ด ๐ ๐ ๐ ๐ ๐ผ "
global.BotSourceCode = "https://youtube.com/channel/UCxVaIay8BccgBtsofagA6_g"
global.SupportGroupLink = "https://chat.whatsapp.com/CMp1e9NHmHU5K5sCM2mmKn"
global.sessionName = "session"

// Prefix //
// ๐don't change the prefix if you can change the prefix may be bot doesn't work properly//
global.prefa = ['-'] 


global.location = "bihar, India"
global.reactmoji = "โค๏ธ"
global.themeemoji = "๐ญ"
global.vidmenu = { url: 'https://c.tenor.com/YGuLegQWubwAAAPo/miku-nakano-gotoubun-no-hanayome.mp4' }
global.websitex = "https://chat.whatsapp.com/CMp1e9NHmHU5K5sCM2mmKn"
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'ุชู...',
    useradmin: 'ุงูุงูุฑ ุฏุง ูุงุฏูู ุจุณ!',
    botadmin: 'ุงุฑูุน ุงูุจูุช ุงุฏูู ุงูุงูู.',
    botowner: 'ุงูููุฒู ุฏู ูููุงูู ุจุณ!',
    grouponly: 'ุงูููุฒู ุฏู ููุฌุฑูุจุงุช ุจุณ!',
    privateonly: 'ุงูููุฒู ุฏู ูู ุงูุฎุงุต ุจุณ!',
    botonly: 'ุงูููุฒู ุฏู ููุจูุช ุจุณ!',
    waiting: 'ุงุณุชูู ุดููู...',
    nolink: 'ููู ุงูุฑุงุจุท?',
    error: 'ุงูุฑูุฑ!',
    banned: 'ุงูุช ูุญุธูุฑ ูู ุงุณุชุฎุฏุงู ุงูุจูุช ุงุชูุงุตู ูุน ุงููุทูุฑ ูุงูุบุงุก ุญุธุฑู!',
    bangc: 'ุชู ุญุธุฑ ุงูุฌุฑูุจ ุฏุง ูู ุงุณุชุฎุฏุงู ุงูุจูุช!',
    nonsfw: 'ูุง ุชูู ููุญุฑูุง ูุฐู ุงููุฌููุนู ููุณุช ูุงุจุงุญู!'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
