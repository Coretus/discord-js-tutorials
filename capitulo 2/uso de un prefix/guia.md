# Uso de un prefix (simbolo indentificador) 
Usted puede ser que haya visto en muchos bots que responden a los comandos con un prefix unico y específicio. Ya se un signo de exclamación !, un signo de +, un signo de interrogación ? u otros carácteres. Esto es muy útil para:

En primer lugar, si no utiliza un prefix único y tiene más de un BOT en un servidor, ambos responderán a los mismos comandos.

En segundo lugar, en el ejemplo basico su BOT responden cuando el mensaje comienza con ping que son 4 caracteres, esto significa que la siguiente frase provocará la respuesta del BOT.

Para evitar todo estos casos se usa un prefix unico, vamos a crear un prefix, así como la capacidad de cambiar el prefix cuando guste desde un solo lugar.

Bien, hay dos formas de poder crear y usar una variable como prefix:

1. Creando una varible dentro del mismo archivo de su bot como prefix.
2. Dividir en partes la configuración de variables, creando un archivo json
Vamos por la forma mas recomendada, en crear un archivo .json para nuestra configuración de variables.


Creando un archivo json para nuestra variables
Crear un nuevo archivo dentro de la carpeta del bot y darle el nombre de config.json (.json es la extención del archivo).

config.json para las variables
JSON, son notaciones de objetos para javascript, mas información en json.org


Ahora que ya hemos creado el archivo de configuración hay 2 cosas de inicio que podemos agregar al archivo, son:

El token de su BOT
El prefix de su BOT
Asi como otros datos que considere de prioridad unica durante el desarrollo.

Agregar las siguientes lineas de configuración dentro del archivo json creado.
