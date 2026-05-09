---
layout: gforce-release
title: GForce v2.0.13
release_date: 2026-05-09
release_version: 2.0.13
new_features:
  - 'Métrica de tiempo de atención: En el dashboard para supervisores ahora se muestra el tiempo de atención promedio del equipo, siendo definido como la duración media desde que un chat lo empezó a atender un agente del equipo hasta que lo finalizó o lo transfirió a otro equipo. Como contraste, el tiempo de resolución cuenta desde el inicio de la conversación hasta que fue finalizado por un agente del equipo, por lo que incluye el tiempo que estuvo en espera y tiempo que fue atendido por el bot y otros equipos.'
  - 'Nuevo flujo del panel de detalle: Ahora, si se encuentran los datos del cliente por su número de teléfono, se habilita inmediatamente la pestaña de contratos (y por consiguiente las de facturas y tickets), sin tener que asociar los datos al contacto primero. Además, se provee un botón para buscar otro cliente por su cédula o RIF en caso de que los datos encontrados no sean los correctos, por ejemplo, si el teléfono ya no le pertenece a ese cliente. La función de asociar datos de cliente al contacto permanece como opción para hacer que se obtenga el cliente desde GOffice directamente por su ID en lugar de buscarlo por teléfono o manualmente por CI/RIF.'
improvements:
  - 'Mejoras visuales al panel de detalle: Ahora la cabecera del panel de detalle donde se encuentran las diferentes pestañas (cliente, contratos, facturas, y tickets) se queda fija al hacer scroll al contenido. Además, se corrigió el espaciado y las divisiones de los elementos para mayor armonía visual.'
fixes:
  - 'Envío de imágenes: Se corrigió un bug que causaba que las imágenes enviadas de forma directa se subieran al almacenamiento compartido del equipo.'
  - 'Pestaña inicial del panel de detalle: El panel de detalle ya no se cambia automáticamente a la pestaña de contratos si el contacto tiene datos de cliente asociados, sino que se inicializa de forma consistente en la primera pestaña con los datos del contacto y cliente.'
cta_url: https://g-force.app
cta_text: Ir a la app
report_url: https://forms.gle/hgQcpsrFs7utxspEA
---