REACTIVA DRIVER PRO — versión SaaS base

Esta versión incorpora:
- consentimiento autónomo por conductor y por plataforma;
- registro local del estado de autorización;
- registro remoto de consentimiento cuando se configura el backend;
- revocación;
- conexión hacia sitios oficiales sin capturar credenciales;
- motor de análisis, filtros, estadísticas e historial;
- PWA Android;
- planes comerciales y WhatsApp;
- backend Node preparado para una integración oficial OAuth/API.

IMPORTANTE: GitHub Pages solo sirve el frontend. Para guardar consentimientos en servidor y para futuras integraciones reales se debe desplegar /api en un servidor HTTPS y configurar la URL en localStorage con la clave `reactiva_api`.

No se presenta como “conectado” ningún servicio externo sin autorización real. El backend devuelve 501 para OAuth hasta que existan credenciales y documentación oficiales de la plataforma.

Sube todo el contenido de esta carpeta al repositorio de GitHub Pages, conservando assets/ y api/ (api/ es código fuente; GitHub Pages no lo ejecuta).

WhatsApp: +57 315 127 7782
Planes: $35.000/7 días · $50.000/30 días · $99.000/90 días
