# discord-js-tutorials

#  la guía está enfocada para los usuarios que desean y requieren desarrollar su propio BOT Discord, ya sea para su servidor privado o al público. Toda la información y ejemplos de esta guía, están basadas en la documentación oficial de Discord.js y DiscordAPI.

Esta guía te llevará a través de los primeros pasos de la creación de un BOT, la configuración, la adición de comandos y más. Utilizando la librería Discord.js

Esta guía utiliza la versión 12 de Discord.js, es la versión que ofrece una mejor estabilidad, así como soporte para nuevas funciones como registros de auditoría y servers boost, integración discordjs/opus, RichPresence, creación de categorías, emojis animados y búsqueda de mensajes.

Introducción

# Discord.js es una librería que te permite interactuar con la API de Discord de una manera más fácil. Con un enfoque mucho más orientado a objetos que la mayoría de las otras librerías de Discord, haciendo que el código de su bot sea mucho más ordenado y fácil de comprender.

Antes de empezar
Usted esta por ver código(script) del lenguaje de programación JavaScript (JS), para desarrollar un bot con discord.js, deberías tener un conocimiento bastante decente del propio JavaScript. Si bien puedes hacer un bot con muy poco conocimiento de programación y JavaScript, tratar de hacerlo sin entender solo te dificultará y quedarse estancado en muchos problemas que para otros sean fáciles, si tiene alguna dificultad para encontrar soluciones, puede solicitar ayuda en nuestro servidor soporte en Discord.

Sobre el copiar y pegar
Recomendamos firmemente escribir el código a mano mientras sigues los capítulos de esta guía, sin copiar y pegar. Esto te ayudará a desarrollar una memoria muscular y un entendimiento de lo que estás agregando mucho más sólido.


Preguntas Frecuentes
Estas son preguntas que se hacen con frecuencia en el servidor de soporte en Discord MyBOT Team, si tiene problemas que no figuran en esta sección, pregunte en el servidor de Discord para poder ayudarlo con su consulta.

¿Por qué me aparece un error en la última línea de mi código?
1
Error: Unexpected token )
2
​

Respuesta: este error suele pasar porque no cerraste bien algún comando anterior, fíjate si te faltó algún paréntesis ) o alguna llave } o corchete ] por cerrar, este error suele ser muy común cuando estás empezando.


¿Por qué me aparece este error en mi consola cuando ejecuto mi bot?
1
message is not defined
2
​
Respuesta: es por que no has definido o puesto dentro del evento message.


¿Por qué me aparece este error en mi consola cuando ejecuto mi bot?
1
args is not defined
2
​
Respuesta: es porque no has definido la variable 'args' dentro del evento message. Ir al capítulo


¿Cómo puedo hacer que solo yo pueda usar X comando?
1
//Respuesta:
2
if (message.author.id !== 'IDUSUARIO') return;
3
​
4
​
Agregamos esta condicional dentro de un comando para validar que solo pueda ser usado por el usuario que fue agregando en 'IDUSUARO'.


¿Cómo puedo enviar un mensaje con el BOT al privado(MD) de un usuario?
1
//Respuesta:
2
client.users.cache.get('IDUSUARIO').send('MENSAJE')
3
​
4
​
Usamos la colección client.users y usando el método get(), ingresamos el id del usuario 'IDUSUARO', para luego usando el método send() enviar el mensaje.


¿Cómo puedo enviar un mensaje a un canal determinado?
1
//Respuesta:
2
client.channels.cache.get('IDCANAL').send('MENSAJE A ENVIAR');
3
​
4
​
Usamos la colección client.channels y usando el método get(), ingresamos el id del canal 'IDCANAL', para luego usando el método send() enviar el mensaje determinado.


¿Cómo puedo hacer que en mi bot funcione la reproducción de audio/musica?
Instale FFMPEG.
Para windows: npm install ffmpeg-binaries
Para Ubuntu: sudo apt install ffmpeg

