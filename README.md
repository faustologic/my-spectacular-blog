## Desarrollo de E-commerce

## Herramientas
 
* PHP, MySQL, Javascript y librerías preferidas, HTML, CSS, Git, XML.

## Desarrollo

* Construir un pequeño módulo de Magento 2 que tenga la funcionalidad de un blog, este consistirá sólo de una página responsive. 
* La estructura de la página y la información a mostrarse se pueden apreciar en los wireframes wf1.jpg, wf2.jpg, wf3.jpg. Los wireframes también indican los viewports que deben ser implementados.

En este blog de una página debe existir un form para guardar nuevos posts sin refrescar el navegador. La página debe mostrar todos los posts ordenados desde el más reciente hasta el más antiguo.

Si el usuario refresca la página la información ya guardada debe mantenerse preservada.

El form debe tener los siguientes campos:
* Título
* Contenido
* Imagen
* Dirección de email

No podría ser posible guardar el post si:
* La dirección de email está vacía o es inválida
* El título está vacío
* Ambos el contenido y la imagen están vacíos

En caso de un error de validación el usuario debe recibir feedback del error y el post no debe guardarse. Mientras el form se envía el usuario debe ser informado de que un proceso está sucediendo, provea algún feedback animado.

Después de enviar el post el backend PHP hará otra ronda de validación:
* Verificará que la dirección de email es igual a la dirección de email de algún usuario con el rol de Administrador de Magento
* El post fue enviado desde una fuente autorizada, es decir, el frontend del blog

Después de que el post ha sido validado
* Agregarle un timestamp
* Crear el markup frontend del post que será regresado a la página del blog
* Mostrar el post en el frontend como el más reciente

Desde el panel de administración de Magento
* Deben visualizarle los posts existentes
* Los posts deben poder ser eliminados

Crear historia de commits Git concisa y documentada. Cuando el desarrollo esté culminado crear un Merge Request para notificar a nuestro equipo técnico de que su prueba esta lista para ser evaluada. Sólo es necesario versionar el directorio correspondiente al módulo y no el sistema Magento entero. La extensión debe ser autoinstalable con el comando "magento setup:upgrade".

* Construir el feedback para el envío del post solo con CSS
