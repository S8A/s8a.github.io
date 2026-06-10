---
layout: gforce-release
title: GForce v2.0.14
release_date: 2026-06-09
release_version: 2.0.14
new_features:
  - 'Vistas de estadísticas: Los supervisores tienen acceso a un nuevo apartado de "Estadísticas" en el panel de navegación. Allí se encuentran enlaces a vistas de estadísticas por equipo y por agente, teniendo hasta ahora tres vistas disponibles (Productividad de equipo, Contactos recurrentes y Productividad individual) y dos vistas deshabilitadas que estarán disponibles pronto (Encuestas de satisfacción y Estado de agente). Cada vista permite obtener métricas, tablas y gráficos de diferentes granularidades para el rango de fechas seleccionado.'
  - 'Página de inicio: Ahora, al iniciar sesión, se redirige a una página de inicio sencilla con un mensaje de bienvenida y un enlace para entrar al chat. Esto es para tener un punto de partida común para cuando se despliegue el módulo de registro de clientes y los módulos que se desarrollen después.'
  - 'Mensajes de solicitud de ubicación: Se implementó el componente para visualizar en el chat los mensajes de solicitud de ubicación enviados por el bot. Esto es para el flujo de solicitud de servicio que se desplegará próximamente.'
improvements:
  - 'Tablas: Se mejoraron los componentes de tablas del dashboard y de la vista de gestión de agentes para que tengan un tamaño y espaciado consistentes independientemente del número de ítems en la página actual. Además, ahora se ven las cabeceras de la tabla incluso si no se encuentran ítems para mostrar.'
  - 'Prefijos de documentos de identidad: Se agregaron las opciones faltantes E, G, C y P al selector de prefijos de documento de identidad en el buscador de clientes del panel de detalle.'
  - 'Tipografía: Ahora se utiliza la tipografía Inter en lugar de la tipografía predeterminada de cada sistema para garantizar consistencia visual en todos los dispositivos.'
fixes:
  - 'Duplicación de contactos: Se aplicaron cambios para evitar que se dupliquen los ítems de la lista de contactos, un bug que ocurría esporádicamente si llegaba un evento al mismo tiempo que cargaba el siguiente lote o página de la lista.'
  - 'Agente asignado en panel de detalle: Se corrigió un bug que causaba que en el panel de detalle siempre se mostrara el nombre del agente que ve el chat en lugar del agente que está asignado realmente. Esto solo se notaba en las vistas de Supervisión, Bot y Finalizadas.'
  - 'Búsqueda de contactos: Se corrigió un bug que impedía escribir espacios en el campo de búsqueda de la lista de contactos.'
  - 'Números resaltados en mensajes: Se corrigió un bug que causaba que los números de cédula o RIF en los mensajes se resaltaran como si fueran números de teléfono, y otro que causaba que los números resaltados como teléfonos rompieran el flujo del texto del mensaje.'
  - 'Íconos en botones: Los botones de descargar archivo y de desplazarse al mensaje más reciente ahora tienen sus íconos del tamaño correcto en lugar de verse diminutos.'
cta_url: https://g-force.app
cta_text: Ir a la app
report_url: https://forms.gle/hgQcpsrFs7utxspEA
---