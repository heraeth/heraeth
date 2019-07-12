const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const ytdl = require('ytdl-core');
const ffmpeg = require("ffmpeg");
const queue = new Map();
const talkedRecently = new Set();
const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "ami", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq","amq",];

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Heraeth in özenle yazdığı botu ${client.user.tag} sunucuna geldi !`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'heraeth kimdir') {
    msg.reply('Heraeth bir oyuncudur ve zamanının büyük çoğunluğunu bilgisayar başında geçirir...');
  }
}); 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'prefix') {
    msg.reply('Prefix h! dir.');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Rise of star nedir ') {
    msg.reply('Rise of star birkaç League of Legends oyuncusunun kendi arasında kurduğu bir takımdır.');
  }

if (msg.content.toLowerCase() === prefix + 'heraeth' ) {
  msg.reply('Ulaşmak isterseniz özelden yazın :D')
}
if (msg.content.toLowerCase() === prefix + 'mimeren kimdir' ) {
  msg.channel.sendMessage('İpnedir')
	}
if (msg.content.toLowerCase() === prefix + 'rank' ) {
	var ranks = ["Copper 4", "Copper 3","Copper 2","Copper 1","Silver 4","Silver 3","Silver 2","Silver 1","Gold 4","Gold 3","Gold 2","Gold 1","Plat 3","Plat 2","Plat 1","Diamond"];
	var sayi = Math.floor(Math.random() * 17);
	msg.reply(ranks[sayi]);
	}
if (msg.content.toLowerCase() === prefix + 'kaç kill alırım') {
	var kill = Math.floor(Math.random() * 26)
	msg.reply([kill])
}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'bugün ne oynasam') {
    var ranks = ["League of Legends","Rainbow Six Siege (PC)","Paladins","The Sims 4","GTA V","Rainbow Six Siege (PS4)","Minecraft","Deceit"];
	var sayi = Math.floor(Math.random() * 8);
	  msg.reply(ranks[sayi] + ' Oynayabilirsin :smile:');
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'heraeth kimdir') {
  		msg.channel.sendMessage('Adamın Dibidir Dibi !!!');
	}
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'rise of star' ) {
  		msg.channel.sendMessage('Davet linki : https://discord.gg/Yhtw9HB');
	}
if (msg.content.toLowerCase() === prefix + 'yks den kaç alırım') {
	var kill = Math.floor(Math.random() * 381+180)
	var puan = Math.floor(Math.random() * 101)
	msg.reply([kill] + '.' + [puan])

}
if (msg.content.toLowerCase() === prefix + 'yks') {
	var kill = Math.floor(Math.random() * 381+180)
	var puan = Math.floor(Math.random() * 101)
	msg.reply([kill] + '.' + [puan])

}
if (msg.content.toLowerCase() === prefix + 'ne zaman ölücem'){
	var gunler = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
	var gun = Math.floor(Math.random() * 31)	
	var aylar = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
	var ay = Math.floor(Math.random() * 12)
	var yil = Math.floor(Math.random() * 60+2039)
	msg.reply(gunler[gun] + ' ' + aylar[ay] + ' ' + [yil])
}
if (msg.content.toLowerCase() === prefix + 'ne zaman evlenicem'){
	var gunler = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
	var gun = Math.floor(Math.random() * 31)	
	var aylar = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
	var ay = Math.floor(Math.random() * 12)
	var yil = Math.floor(Math.random() * 20+2019)
	msg.reply(gunler[gun] + ' ' + aylar[ay] + ' ' + [yil] + ' :heart:')
}
if (msg.content.toLowerCase() === prefix + 'çocuğumun cinsiyeti ne olacak'){
	var cins = ["erkek","kız"];
	var rand = Math.floor(Math.random() * 2)
	msg.reply(cins[rand] + ' olacak :smile:')
}
if (msg.content.toLowerCase() === prefix + 'kaç çocuğum olacak') {
	var kid = Math.floor(Math.random() * 6+1)
		msg.reply([kid] + ' çocuğun olacak :smile:')
}
if (msg.content.toLowerCase() === prefix + 'yks özel') {
	var kill = Math.floor(Math.random() * 381+180)
	var puan = Math.floor(Math.random() * 101)
	msg.author.sendMessage('Aldığın Puan' + ' ' + [kill] + '.' + [puan])
	msg.reply('Aldığın Puanı Özel Mesaj Olarak Gönderdim' + ' ' + ':wink:.')
	console.log('Aldığı puan' + ' ==> ' + [kill] + '.' + [puan])
}
if (msg.content.toLowerCase() === prefix + 'komutlar') {
	msg.channel.sendMessage('"h! mimeren kimdir","h! heraeth kimdir","h! rise of star","heraeth kimdir","prefix","rise of star nedir",h! heraeth","h! rank","h! kaç kill alırım","h! bugün ne oynasam","h! yks den kaç alırım","h! yks","h! yks özel","h! ne zaman ölücem","h! ne zaman evlenicem","h! kaç çocuğum olacak","h! kıyamet ne zaman kopacak","h! seviyor sevmiyor","h! beyin yaşım kaç" Bütün Komutlar')
}
if(msg.content.toLowerCase() === prefix + 'iqm kaç') {
	var iq = Math.floor(Math.random() *201)
	msg.reply('Senin IQ Seviyen ' + [iq] + ' ' + ':smile:' + ' ==> 0-25 : Ağır Gerilik / 26-50 : Orta Gerilik / 51-75 : Hafif Gerilik / 76-90 : Sınır Zekalı / 91-110 : Normal Zekalı / 111-119 : İleri Zekalı / 120-130 : Üstün Zekalı / 131-145 : Çok Üstün Zekalı / 146 > Deha')
}

if(msg.content.toLowerCase() === '30 şubat') { 		
	msg.delete(); 
	msg.reply('Böyle bir tarih yok tekrar dene ⚠')
	.then(msg => msg.delete(1531)); 
}
if(msg.content.toLowerCase() === '31 şubat') { 		
	msg.delete(); 
	msg.reply('Böyle bir tarih yok tekrar dene ⚠')
	.then(msg => msg.delete(1531)); 
}
if(msg.content.toLowerCase() === prefix + 'kıyamet ne zaman kopacak') {
	var gunler = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
	var gun = Math.floor(Math.random() * 31)	
	var aylar = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
	var ay = Math.floor(Math.random() * 12)
	var yil = Math.floor(Math.random() * 150+2020)
	msg.reply(gunler[gun] + ' ' + aylar[ay] + ' ' + [yil] + ' :frowning:')
}
if(msg.content.toLowerCase() === prefix + 'seviyor sevmiyor') {
	var sev = ["Seviyor :smile: :heart:","Sevmiyor :frowning: :cry:"];
	var sans = Math.floor(Math.random() *2)
	msg.reply(sev[sans])
}
if(msg.content.toLowerCase() === prefix + 'beyin yaşım kaç') {
	var yas = Math.floor(Math.random() * 90)
	msg.reply([yas] + ' yaşında :joy:')
}
});

client.login('NTkwOTgwMjEzNjA1NzkzNzk5.XQqTCg.rNKwgqntXWRLUaR4rloy4NT9XbY');