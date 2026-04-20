---
layout: gforce-release
title: GForce v2
release_date: 2026-04-19
release_version: 2.0
new_features:
  - 'Vistas de chat separadas: Sin atender, Asignadas, Supervisión, Bot, y Finalizadas. Ya no es una sola vista con filtros complejos.'
  - 'Vista "Sin atender": Muestra las conversaciones en espera del equipo. Permite a los agentes tomar conversaciones.'
  - 'Vista "Asignadas": Muestra las conversaciones asignadas al agente específicamente. Permite al agente atender, transferir, y finalizar conversaciones.'
  - 'Vistas de "Supervisión": Cada vista muestra las conversaciones asignadas a todos los agentes del equipo seleccionado. Permite a los supervisores monitorear, tomar, y transferir conversaciones.'
  - 'Vista "Bot": Muestra las conversaciones asignadas al agente bot (GNet). Permite a los agentes con el privilegio correspondiente monitorear y tomar conversaciones del bot.'
  - 'Vista "Finalizadas": Muestra las conversaciones finalizadas de todos los equipos. Permite a los agentes con el privilegio correspondiente revisar el historial de conversaciones.'
  - 'Contadores de vistas de chats: El panel de navegación muestra los respectivos contadores de conversaciones de las vistas de chat. Los contadores se actualizan a intervalos regulares, al cambiar de vista, y cada vez que un chat llega o se va de la vista de chat actual, de forma que el contador de la vista actual está siempre actualizado en tiempo real, mientras que los de las demás vistas se actualizan un poco más lento como compromiso para mantener alto rendimiento.'
  - 'Dashboard para supervisores de equipos: Muestra los KPIs del día (contadores y tiempos promedio), una tabla de monitoreo de agentes (estatus y chats abiertos), y una tabla de chats esperando por respuesta. Todas estas métricas y tablas se actualizan en tiempo real.'
  - 'Metadatos de conversación: En el panel de detalle ahora se muestra el agente asignado, el equipo asignado, y la fecha y hora de inicio de la conversación actual o más reciente del contacto.'
  - 'Nombres de contacto personalizables: En el panel de detalle, al lado del nombre del contacto se provee un botón para asignarle al contacto un nombre diferente al nombre que tiene en WhatsApp, y un botón para restablecer el nombre original.'
  - 'Búsqueda de cliente por CI/RIF: Se muestra un cuadro de búsqueda de CI/RIF en el panel de detalle si no se consiguen los datos del cliente por su número de teléfono o si el número pertenece a varios clientes, y si se encuentra el cliente en GOffice se provee un botón para utilizar esos datos.'
  - 'Asociar cliente a contacto: En el panel de detalle, los datos de cliente encontrados proveen una opción para asociarlos al contacto de forma que el sistema los obtenga directamente por ID la próxima vez que se comunique ese contacto. Una vez que se asocian los datos del cliente al contacto, se habilitan las demás pestañas (contratos, facturas, y tickets).'
  - 'Facturas y tickets segregados por contrato: Para los clientes que tienen más de un contrato, las pestañas de facturas y tickets permanecen deshabilitadas hasta que se seleccione un contrato para gestionar, y se mostrarán solo las facturas y tickets de ese contrato con su respectiva información y un botón para gestionar otro contrato.'
  - 'Respuestas rápidas: Botón en el campo de mensaje que despliega un menú para gestionar mensajes predefinidos del equipo y aplicarlos rápidamente.'
  - 'Indicador de chat recién llegado: Los chats que recién lleguen a la vista de chat actual (asignados/transferidos) se muestran con un punto rojo llamativo en una esquina del avatar hasta que el agente abra ese chat por primera vez, de forma que ningún chat pase desapercibido.'
  - 'Botón para bajar al mensaje más reciente: Si el agente sube en el chat para ver mensajes anteriores, aparece un botón flotante con una flecha hacia abajo para hacer scroll hasta el mensaje más reciente.'
  - 'Botón para cerrar chat: Ahora hay un botón con una equis en la barra superior del chat actual para cerrarlo (no finalizarlo) sin tener que abrir otro chat.'
  - 'Integración de Google Maps: Los mensajes de ubicación ahora abren un modal con un mapa de Google integrado en lugar de abrir un enlace en otra pestaña, para una experiencia más cómoda y para eliminar la limitación temporal de peticiones.'
  - 'Menú de agentes: Botón al lado del selector de estatus del agente que despliega un menú para listar todos los agentes, buscar por nombre, y visualizar sus estatus.'
  - 'Selector de emojis: Menú desplegable en el campo de mensaje para buscar, seleccionar, y aplicar emojis.'
improvements:
  - 'Visibilidad de botones de acción de chat: Los botones para tomar, transferir, y finalizar el chat actual ahora se muestran y ocultan apropiadamente dependiendo del estatus de la conversación, el equipo y agente asignados, y los permisos del agente.'
  - 'Panel de detalle colapsable: El panel de detalle ahora está oculto por defecto y se provee un botón en la parte superior para mostrarlo y esconderlo de nuevo.'
  - 'Atajos de teclado: Se establecieron atajos de teclado para enviar mensaje (Ctrl&nbsp;Enter), mostrar/ocultar el campo para mensaje interno (Ctrl&nbsp;I), mostrar/ocultar el panel de navegación (Ctrl&nbsp;S), mostrar/ocultar el panel de detalle (Ctrl&nbsp;D), mostrar/ocultar el menú de respuestas rápidas (Ctrl&nbsp;F), y mostrar/ocultar el menú de agentes (Ctrl&nbsp;A).'
  - 'Diseño mejorado: Se pulieron varios componentes para mejorar el estilo, consistencia, alineación, animaciones, y demás detalles visuales de la interfaz.'
  - 'Backend optimizado: Las peticiones de base de datos y los eventos de socket se optimizaron aún más para mejorar el rendimiento y reducir la carga a los servidores.'
  - 'Frontend optimizado: Se reestructuró a fondo para mejorar la fluidez de la interfaz y reducir los recursos requeridos por la aplicación.'
  - 'Menos sonidos: Ahora solo suenan las notificaciones para mensajes entrantes y salientes en el chat que está abierto, no de los demás chats en la vista actual.'
  - 'Reforzamiento de seguridad: Se aplicaron medidas de seguridad adicionales en el frontend para formularios sensibles como el de inicio de sesión.'
  - 'Nuevo formulario de feedback: Ahora con modalidades separadas para dar ratings, reportar errores, y sugerir mejoras.'
fixes:
  - 'Estabilidad de sesión: Se corrigió el problema de que la sesión fallaba abruptamente con error inesperado por un bug en el manejo del token de sesión. Ahora el token de sesión se refresca cada hora durante 24 horas y luego de eso la sesión se cierra de forma controlada y redirige al formulario de inicio de sesión.'
  - 'Scroll infinito de la lista de contactos: Al hacer scroll, se cargan correctamente más contactos (si los hay) correspondientes a la vista de chat actual, sin mezclar resultados de otras vistas o equipos.'
  - 'No más scroll automático por chats y mensajes nuevos: La lista de contactos ya no salta hacia arriba sin control automáticamente cuando se asigna o desasigna un chat. De igual manera, los mensajes se mantienen en su posición actual si se están visualizando mensajes viejos y aparece el botón para desplazarse hacia el final, de forma que el agente puede seguir visualizando el historial.'
cta_url: https://g-force.app
cta_text: Ir a la app
report_url: https://forms.gle/hgQcpsrFs7utxspEA
---