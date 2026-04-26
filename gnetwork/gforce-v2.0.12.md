---
layout: gforce-release
title: GForce v2.0.12
release_date: 2026-04-24
release_version: 2.0.12
new_features:
improvements:
  - 'Mejoras internas: Se implementó una refactorización en el frontend para simplificar el código y hacerlo más mantenible a largo plazo (se mantiene la misma funcionalidad).'
fixes:
  - 'Nombre mostrado en los mensajes salientes: Se corrigió un bug que causaba que, al enviar mensajes de texto y mensajes internos, estos mensajes se mostraran en el momento con el nombre del contacto en lugar del nombre del agente que los envió, mientras que al recargar los mensajes aparecían con el nombre correcto.'
  - 'Visualización de imágenes cuadradas: Se corrigió un bug (notificado por el formulario de feedback) que causaba que ciertos mensajes de imagen no mostraran la imagen; pudimos descubrir que esto ocurría específicamente si la imagen era cuadrada (mismo ancho que alto).'
  - 'Menú de acciones del chat: El menú de acciones del chat (ícono de tres puntos) en la barra superior ahora se esconde completamente si ninguna de las acciones del menú (transferir y finalizar) están habilitadas para el chat actual, en lugar de desplegar un menú vacío; este caso solo aplica para chats finalizados, los cuales lógicamente no se pueden transferir ni finalizar.'
cta_url: https://g-force.app
cta_text: Ir a la app
report_url: https://forms.gle/hgQcpsrFs7utxspEA
---