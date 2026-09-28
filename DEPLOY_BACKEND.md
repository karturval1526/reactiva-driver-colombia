# Despliegue del backend

GitHub Pages sirve archivos estáticos y no ejecuta Node.js. Por eso la PWA va en GitHub Pages y el backend debe desplegarse en un servicio Node/HTTPS separado.

Variables mínimas:
- PORT=8787
- CLIENT_ORIGIN=https://TU-USUARIO.github.io/TU-REPO

Cuando exista una integración oficial, añade sus secretos exclusivamente como variables de entorno del servidor. Nunca los pongas en `index.html`, JavaScript público ni GitHub Pages.
