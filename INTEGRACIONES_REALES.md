# Integraciones reales Rappi + Picap

Esta versión no falsifica una conexión. El frontend y backend tienen el flujo de consentimiento y una capa de integración preparada para OAuth/API.

## Para habilitar una integración real
1. Obtener de la plataforma un mecanismo oficial de autorización para terceros (OAuth/API) y sus credenciales de aplicación.
2. Registrar la URL de callback en la plataforma.
3. Configurar en el servidor las variables/secretos entregados por la plataforma.
4. Implementar el adapter específico siguiendo su documentación vigente.
5. Solicitar únicamente los scopes necesarios.
6. Guardar tokens cifrados en servidor y permitir revocación.

No introducir contraseñas de Rappi/Picap en ReActiva, no capturar sesiones, no interceptar tráfico y no automatizar aceptación de pedidos.

El endpoint `/api/oauth/:platform/start` devuelve explícitamente `501 INTEGRATION_NOT_CONFIGURED` hasta que exista una autorización oficial configurada; no presenta un estado falso de conectado.
