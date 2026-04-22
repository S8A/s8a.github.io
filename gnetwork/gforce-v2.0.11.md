---
layout: gforce-release
title: GForce v2.0.11
release_date: 2026-04-22
release_version: 2.0.11
new_features:
  - 'Desvincular datos de cliente: En el panel de detalle, si el contacto tiene datos de cliente asociados, en la parte inferior de esa sección se mostrará un botón gris que dice "Desvincular del contacto". Presionar este botón desvinculará el ID de cliente del registro de contacto para permitir buscar de nuevo por CI/RIF en caso de que se haya asociado el cliente equivocado.'
improvements:
  - 'Vista "Sin asignar": Se renombró la vista "Sin atender" a "Sin asignar" para reflejar mejor lo que realmente se muestra en esa vista, que son los chats en la lista de espera del equipo porque no tienen agente asignado.'
  - 'Tiempos relativos: Ahora se actualizan en vivo los textos de tiempos relativos ("ahora", "hace 1m", "15m") que se muestran en la lista de contactos (para la fecha de último mensaje) y en el dashboard de supervisores (para el tiempo en el estado, la fecha de última actividad, y el tiempo de espera de respuesta).'
  - 'Atajo de teclado para almacenamiento compartido: El menú de almacenamiento compartido del chat ahora se puede desplegar y ocultar mediante el atajo de teclado Ctrl&nbsp;G.'
  - 'Scroll infinito para contratos y facturas: Ahora se aplica scroll infinito en las pestañas de contratos y facturas del panel de detalle para poder ver todos los ítems de clientes que tengan más de 10 contratos o facturas. Esto ya estaba aplicado en la pestaña de tickets.'
  - 'Presentación de montos decimales: Los montos de facturas y saldos ahora se muestran con un máximo de dos decimales para mantener la consistencia y evitar confusiones.'
  - 'Presentación de datos de cliente: Ahora el nombre y el correo electrónico del cliente ya no se muestran todo en mayúsculas, sino de forma natural para cada caso, es decir, con mayúscula al principio de cada palabra del nombre, mientras que el correo se queda todo en minúsculas.'
  - 'Ajustes visuales al panel de detalle: Se aplicaron algunas mejoras y correcciones visuales al panel de detalle del chat, especialmente cuando se visualiza en una ventana estrecha o en un teléfono o tablet.'
fixes:
  - 'Fecha de último mensaje: Las fechas de último mensaje de los ítems de la lista de contactos no se estaban actualizando correctamente al llegar o enviarse mensajes, requiriendo recargar la página. Ahora sí se actualizan para reflejar el verdadero último mensaje conforme se envían y reciben mensajes en la conversación.'
  - 'Navegación de dashboard a vistas de supervisión: Se corrigió un bug que impedía específicamente la navegación desde el dashboard directamente a las vistas de supervisión, lo cual obligaba a pasar primero a cualquier otra vista de chat.'
cta_url: https://g-force.app
cta_text: Ir a la app
report_url: https://forms.gle/hgQcpsrFs7utxspEA
---