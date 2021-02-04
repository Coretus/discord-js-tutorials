const client = new Discord.Client();
const config = require("./config.json");

let prefix = config.prefix;

client.on('ready', () => {
   console.log(`Estoy listo!`);
});

client.on('message', (message) => {
  if(message.content.startsWith(prefix + 'ping')) {
    const embedDatos = new Discord.MessageEmbed() 
    .setTitle("Este es su título, puede contener 256 caracteres")
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor(0x00AE86)
    .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
    .setFooter("Pie de página, puede contener 1024 caracteres", client.user.avatarURL())
    .setImage(message.author.displayAvatarURL())
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()
    .setURL("https://github.com/CraterMaik")
    .addField("Este es un título de campo", "Este es un valor de campo puede contener 1024 caracteres.")
    .addField("Campo en línea", "Debajo del campo en línea",  true)
    .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true);
    
message.channel.send({ embed: embedDatos });

  }

});

client.login('TokenSecreto');
