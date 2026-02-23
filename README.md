# calendario-estudiantil
---
# Proposito del Proyecto.
Este proyecto, es para la optimizacion del espacio de trabajo de los estudiantes universitarios, asi como la centralizacion tanto de Horarios, Materias y sus respectivos materiales de estudio.

---
# Requerimientos Funcionales.
El sistema debe cumplir con las siguientes funciones:

* **RF01 - Autenticación:** Permitir el inicio de sesión seguro utilizando Google OAuth 2.0.
* **RF02 - Gestión de Materias (CRUD):** Permitir al usuario crear, leer, actualizar y eliminar materias en curso.
* **RF03 - Sincronización con Nube:** Al crear una materia, el sistema debe generar automáticamente una carpeta correspondiente en el Google Drive del usuario.
* **RF04 - Gestión de Horarios:** Permitir la configuración de un horario semanal, asociando días y rangos horarios a materias específicas.
* **RF05 - Gestión de Entregas:** Permitir registrar trabajos prácticos o tareas con título, fecha límite y estado (Pendiente/Entregado).
* **RF06 - Carga de Archivos:** Proveer una interfaz para subir archivos desde el dispositivo local (PC o móvil) directamente a la carpeta de Google Drive asociada a la materia.
---
# Requerimientos No Funcionales.
* **RNF01 - Usabilidad (Mobile-First):** La interfaz debe estar optimizada para dispositivos móviles y funcionar como una PWA (instalable en la pantalla de inicio).
* **RNF02 - Seguridad:** El manejo de tokens de acceso a Google Drive debe ser encriptado y temporal, garantizando que solo el usuario tenga acceso a sus datos.
* **RNF03 - Rendimiento:** El tablero principal debe renderizar la información crítica (clases del día y próximas entregas) en menos de 2 segundos.
---
# Roadmap.
- [ ] Diseño de Base de Datos
- [ ] Wireframes y Diseño UI/UX
- [ ] Desarrollo de la API REST / Backend
- [ ] Integración del Frontend y API de Google Drive
---
## 6. Stack Tecnológico 
Para la construcción de este MVP se seleccionaron tecnologías modernas, orientadas a la escalabilidad y al desarrollo eficiente de Aplicaciones Web Progresivas (PWA):

* **Frontend (Interfaz de Usuario):**
  * **Framework:** React.js con Next.js (Garantiza un renderizado rápido y facilita la configuración como PWA).
  * **Estilos y Arquitectura:** CSS Modules con SASS (Implementado para garantizar el encapsulamiento de estilos, evitar colisiones en el DOM y mantener una arquitectura escalable a nivel corporativo).
* **Backend (Lógica del Servidor):**
  * **Entorno:** Node.js (Rutas de API de Next.js o Express.js).
  * **Autenticación:** NextAuth.js (Implementación segura y directa para el inicio de sesión con Google).
* **Base de Datos:**
  * **Motor:** PostgreSQL (Base de datos relacional robusta, ideal para vincular usuarios, materias, horarios y entregas).
  * **ORM:** Prisma (Facilita el modelado de la base de datos y la escritura de consultas seguras).
* **Integraciones y APIs:**
  * **Google Workspace APIs:** Uso de Google Drive API (OAuth 2.0) para la creación automatizada de carpetas y gestión de archivos en la nube del usuario.
* **Infraestructura y Despliegue (Deploy):**
  * Vercel (Para el alojamiento del Frontend y Backend de forma gratuita y continua).
  * Supabase o Railway (Para el alojamiento de la base de datos PostgreSQL).