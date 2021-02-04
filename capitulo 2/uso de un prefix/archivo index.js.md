# Despues de agregar usted puede cambiar el objeto prefix con el simbolo para el prefix de su BOT, para el ejemplo usare el simbolo - como prefix. Tambien copie el token de su BOT en el objeto token del archivo de configuración.

Guarde la configuración usando CONTROL +S

Referenciando el archivo de configuración json
Nos dirigimos a la parte superior del archivo de su BOT (mybot.js), agregamos una nueva línea de codigo para referenciar al archivo config.json mediante una variable.

1
const config = require("./config.json");
2
​
Descripción del codigo agregado
const crea una variable con el nombre config para referenciar al archivo de configuración config.json creado anteriormente.
Ahora usted utilizara la variable config para llamar a los objetos que estan dentro del archivo de configuración config.json.

Para llamar o utilizar el objeto prefix escribimos: config.prefix
Para llamar o utilizar el objeto token escribimos: config.token

Usando la variable de configuración 'config'
Vamos a usar la variable config que representa el archivo de configuración, primero cambiamos el token llamando al objeto token mediante la variable config.

La linea de nuestro bot se ve así:

1
client.login("MzASfasFWf_asdASDKKW-SFASfasFWf#f3KKsds51.sDSd");
2
​
Usando config y el objeto token seria así:

1
client.login(config.token);
Listo, la otra linea que tenemos que agregar es el objeto prefix, vamos a la linea de nuestro codigo debajo de config y agregamos el prefix creando una nueva variable para los comandos, de esta forma

1
let prefix = config.prefix;
2
​

Despues de agregar y referenciar nuestro archivo de configuración config.json a nuestro BOT, esto se deberia de ver así:


client.login('TokenSecreto');
1
const Discord = require("discord.js");
2
const client = new Discord.Client();
3
const config = require("./config.json");
4
​
5
let prefix = config.prefix;
6
​
7
client.on('ready', () => {
8
   console.log(`Estoy listo!`);
9
});
10
​
11
client.on('message', (message) => {
12
  if(message.content.startsWith(prefix + 'ping')) {
13
    message.channel.send(`pong 🏓!!`);
14
  }
15
​
16
});
17
​
18
client.login('TokenSecreto');
19
​

Ahora agregamos un nuevo comando de ejemplo basico para probar con el nuevo prefix

NOTA: Los nuevos comandos que agregemos deben estar dentro del evento message y siempre debe de abrir y cerrar las llaves '{ }', es importate para que pueda interactuar con los mensajes de un servidor a travez de condiciones y funciones agregadas.

Ejemplo: 1 Creamos una nueva condicion if() debajo de nuestro primer comando ping
