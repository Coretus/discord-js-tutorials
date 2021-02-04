// la guía está enfocada para los usuarios que desean y requieren desarrollar su propio BOT Discord, ya sea para su servidor privado o al público. Toda la información y ejemplos de esta guía, están basadas en la documentación oficial de Discord.js y DiscordAPI.

///Esta guía te llevará a través de los primeros pasos de la creación de un BOT, la configuración, la adición de comandos y más. Utilizando la librería Discord.js

///Esta guía utiliza la versión 12 de Discord.js, es la versión que ofrece una mejor estabilidad, así como soporte para nuevas funciones como registros de auditoría y servers boost, integración discordjs/opus, RichPresence, creación de categorías, emojis animados y búsqueda de mensajes

const Discord = require("discord.js");
const client = new Discord.Client();
// const crea una variable/constante llamada Discord para referenciar el modulo npm discord.js instalado anteriormente.
const crea la varible client para instanciar una nueva clase Client() de la variable Discord referenciado, client representa a la clase Client() que es el eje principal para interactuar con la API de Discord, y el punto de partida para cualquier BOT en discordjs.
client.on('ready', () => {
   console.log(`Estoy listo!`);
});
// En la primera linea la varible client activa el evento llamado ready, ready es el evento de inicio cuando se activa un BOT en discord.js, se puede ingresar un mensaje o funcion que se ejecutara cuando el BOT se aya activado correctamente.
Utilizamos tambien el evento message, message es el manejador de los mensajes y argumentos de un servidor, detro del mismo podemos crear comandos(funciones/tareas) para su BOT. Un ejemplo basico es el comando ping. dentro de una condicion if() basica.
Y por ultimo y no menos importante la funcion login, que se encarga de iniciar seccion de su BOT (loggear) y autenticarlo con la API de Discord.
client.on('message', (message) => {
  if(message.content.startsWith('ping')) {
    message.channel.send(`pong 🏓!!`);
  }

});

client.login('TokenSecreto');


client.login('TokenSecreto');

//Bien, luego de agregar las lineas de codigo, ahora reemplace en la linea del metodo client.login("TokenSecreto") por el Token de su BOT creado anteriormente.
