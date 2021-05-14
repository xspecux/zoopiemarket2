const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '&komendy') {
	  msg.channel
		.send({
		  embed: {
			  title: 'Komendy:',
			  description: 'Ważne/important(tylko <#842644895956860958>)  -\n&cennik\n&lista\n&rangi\n\nGenerator(Przeznaczone kanały) -\n&psc\n&nitro', 
		  },
		});
  }		
});
			  

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomNumberString(length = 4) {
    return new Array(4).fill()
    .map(x => random(0, 9))
    .join("");
}
function generateFakePaySafeCardCode() {
    return new Array(4)
.fill()
.map(x => randomNumberString(4))
.join("-");
}

function randomString(length = 8) {  

    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;

};

client.on('message', msg => {
    if(!msg.content.startsWith("&")) return;
    let content = msg.content.slice(1);
    
  if (content.startsWith('psc')) {
	if (msg.channel.id === '842644895956860958') {
	msg.reply('\nZobacz wiadomość prywatną!');
    msg.author
        .send({
          embed: {
              title: 'Zoopie Market',
			  color: 2067276,
		      description: ("__**Dziękujemy za skorzystanie z ZoopieMarket!**__\n\n\n**Twój kod psc:**\n\`") + generateFakePaySafeCardCode() + ("\`"), 
          },
        });
		
	} 
  } else if (content.toLowerCase().startsWith('nitro')) {
	if (msg.channel.id === '842644895956860958') {
	msg.reply('\nZobacz wiadomość prywatną!');
    msg.author
        .send({
          embed: {
              title: 'Twoje nitro:',
			  color: 2067276,
              description: ("__**Dziękujemy za skorzystanie z ZoopieMarket!**__\n\n\n**Twoje kody nitro:**\n") + new Array(10).fill(undefined).map(x=> "https://discord.gift/" + randomString(15)).join("\n"), 
          },
        });
   
	}   
  }
});
			  
client.on('message', msg => {
  if (msg.content === '&pomoc') {
    msg.reply('\nLista komend jest dostępna pod &komendy .');
	
  }
});

client.on('message', msg => {
  if (msg.content === '&help') {
    msg.reply('\nFull list of commands you can get typing -> &komendy .');
	
  }
});

client.on('message', msg => {
  if (msg.content === '&cennik') {
  if (msg.channel.id === '842644895956860958') {
	msg.reply("Cennik:\nNetflix - 6 PLN\nSpotify - 3 PLN\nFortnite - 2 PLN\nMinecraft NFA - 1 PLN\nMinecraft SFA - 3 PLN\nAllegro - 1 PLN\nHulu - 1 PLN\nXBOX - 3 PLN\n\nMożliwe metody płatnosci: **PayPal, PSC, Blik, sms+, kryptowaluty oraz skrill**  ");
 
  }
 }
});

client.on('message', msg => {
  if (msg.content === '&rangi') {
  if (msg.channel.id === '842644895956860958') {
	msg.reply("\n<@799573696745701456> **koszt 20zł**\n\n-Specjalny generator kont\n-Dropy Premium\n-Niższy cooldown na generatorze\n30% na wszystko!\n\n<@797204885207908353> **koszt 50zł**\n\n-Specjalny generator kont\n-Dropy premium oraz ultimate\n-Specjalne Giveawaye\n-Wymiany kont jeżeli nie działają\n-Szybki kontakt z administracją\n-50% zniżki na wszystko!\n\nMożliwe metody płatnosci: **PayPal, PSC, Blik, sms+, kryptowaluty oraz skrill**  ");
 
  }
 }
});


client.login('ODQyMzU0Mzc5NzE3ODY5NTgx.YJ0Fpg.3uHvyEDUsTa9SZX_K8bUKUAfVlU');