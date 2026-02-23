# 📝 Especificación de Casos de Uso

Este documento detalla las interacciones principales entre el actor (Estudiante) y el sistema del Dashboard Universitario.

## Actores del Sistema
* **Estudiante:** Usuario principal que interactúa con la plataforma para gestionar su tiempo y archivos académicos.
* **Sistema (Google Drive API):** Actor secundario que recibe y almacena los archivos en la nube.

---

# 📝 Especificación de Casos de Uso
<br>

<table border="1">
  <tr>
    <td align="center"><strong>CU-01</strong></td>
    <td colspan="2" align="center"><strong>Iniciar Sesión y Sincronizar Cuenta</strong></td>
  </tr>
  <tr>
    <td><strong>Objetivos Asociados</strong></td>
    <td colspan="2">• OBJ-01 Autenticación segura y vinculación de cuenta.</td>
  </tr>
  <tr>
    <td><strong>Requisitos Asociados</strong></td>
    <td colspan="2">• RF-01 Autenticación con Google OAuth 2.0.</td>
  </tr>
  <tr>
    <td><strong>Actor Principal</strong></td>
    <td colspan="2">Estudiante</td>
  </tr>
  <tr>
    <td><strong>Precondición</strong></td>
    <td colspan="2">• El estudiante debe poseer una cuenta de Google activa.</td>
  </tr>
  <tr>
    <td><strong>Intención del Actor</strong></td>
    <td colspan="2">Acceder a la plataforma y habilitar los permisos para gestionar sus archivos en la nube.</td>
  </tr>
  <tr>
    <td><strong>Propósito del Sistema</strong></td>
    <td colspan="2">Validar la identidad del usuario y almacenar de forma segura el token de acceso a Google Drive.</td>
  </tr>
  <tr>
    <td><strong>Descripción General</strong></td>
    <td colspan="2">El estudiante inicia sesión mediante Google, autoriza los permisos requeridos y el sistema lo redirige al Tablero Principal con su sesión activa.</td>
  </tr>
  <tr>
    <td rowspan="6"><strong>Secuencia Normal</strong></td>
    <td align="center"><strong>Paso</strong></td>
    <td align="center"><strong>Acción</strong></td>
  </tr>
  <tr>
    <td align="center">1</td>
    <td>El caso de uso inicia cuando el estudiante hace clic en "Iniciar sesión con Google".</td>
  </tr>
  <tr>
    <td align="center">2</td>
    <td>El sistema redirige al portal de autorización de Google.</td>
  </tr>
  <tr>
    <td align="center">3</td>
    <td>El estudiante selecciona su cuenta y aprueba los permisos de lectura/escritura de Drive.</td>
  </tr>
  <tr>
    <td align="center">4</td>
    <td>El sistema recibe y valida el token OAuth 2.0 generado.</td>
  </tr>
  <tr>
    <td align="center">5</td>
    <td>El sistema crea la sesión local y redirige al dashboard finalizando el caso de uso.</td>
  </tr>
  <tr>
    <td><strong>Postcondición</strong></td>
    <td colspan="2">• Se establece la sesión del usuario y el token queda almacenado para futuras operaciones.</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>Excepciones</strong></td>
    <td align="center"><strong>Paso</strong></td>
    <td align="center"><strong>Acción</strong></td>
  </tr>
  <tr>
    <td align="center">3</td>
    <td>Si el estudiante rechaza los permisos, el sistema cancela el inicio de sesión y muestra un mensaje informando que los permisos son obligatorios.</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>Rendimiento</strong></td>
    <td align="center"><strong>Paso</strong></td>
    <td align="center"><strong>Cota de tiempo</strong></td>
  </tr>
  <tr>
    <td align="center">4</td>
    <td>Menos de 2 segundos.</td>
  </tr>
  <tr>
    <td><strong>Frecuencia</strong></td>
    <td colspan="2">Baja (Generalmente una vez por dispositivo hasta que expire la sesión).</td>
  </tr>
  <tr>
    <td><strong>Estabilidad</strong></td>
    <td colspan="2">Alta.</td>
  </tr>
  <tr>
    <td><strong>Comentarios</strong></td>
    <td colspan="2">El token de acceso debe manejarse de forma encriptada en el backend por motivos de seguridad.</td>
  </tr>
</table>

<br>

<table border="1">
  <tr>
    <td align="center"><strong>CU-02</strong></td>
    <td colspan="2" align="center"><strong>Registrar Nueva Materia y Crear Carpeta</strong></td>
  </tr>
  <tr>
    <td><strong>Objetivos Asociados</strong></td>
    <td colspan="2">• OBJ-02 Estructuración del entorno académico.</td>
  </tr>
  <tr>
    <td><strong>Requisitos Asociados</strong></td>
    <td colspan="2">• RF-02 Gestión de Materias (CRUD).<br>• RF-03 Sincronización con Nube.</td>
  </tr>
  <tr>
    <td><strong>Actor Principal</strong></td>
    <td colspan="2">Estudiante</td>
  </tr>
  <tr>
    <td><strong>Precondición</strong></td>
    <td colspan="2">• El usuario debe tener una sesión iniciada y un token de Google Drive válido (CU-01).</td>
  </tr>
  <tr>
    <td><strong>Intención del Actor</strong></td>
    <td colspan="2">Dar de alta una asignatura para comenzar a gestionar sus horarios y entregas.</td>
  </tr>
  <tr>
    <td><strong>Propósito del Sistema</strong></td>
    <td colspan="2">Registrar la materia en la base de datos y crear automáticamente su respectivo directorio en la nube.</td>
  </tr>
  <tr>
    <td><strong>Descripción General</strong></td>
    <td colspan="2">El estudiante ingresa los datos de la materia, el sistema la guarda localmente y se comunica con Google Drive para crear una carpeta contenedora.</td>
  </tr>
  <tr>
    <td rowspan="7"><strong>Secuencia Normal</strong></td>
    <td align="center"><strong>Paso</strong></td>
    <td align="center"><strong>Acción</strong></td>
  </tr>
  <tr>
    <td align="center">1</td>
    <td>El caso de uso inicia cuando el estudiante selecciona "Añadir Materia".</td>
  </tr>
  <tr>
    <td align="center">2</td>
    <td>El sistema despliega un formulario solicitando Nombre de la Materia y Profesor.</td>
  </tr>
  <tr>
    <td align="center">3</td>
    <td>El estudiante completa los datos y confirma la acción.</td>
  </tr>
  <tr>
    <td align="center">4</td>
    <td>El sistema registra la materia en la base de datos PostgreSQL.</td>
  </tr>
  <tr>
    <td align="center">5</td>
    <td>El sistema envía una petición a la API de Drive para crear una carpeta con el nombre de la materia.</td>
  </tr>
  <tr>
    <td align="center">6</td>
    <td>El sistema guarda la URL de la carpeta generada, notifica el éxito y finaliza el caso de uso.</td>
  </tr>
  <tr>
    <td><strong>Postcondición</strong></td>
    <td colspan="2">• La materia es visible en el dashboard y existe una carpeta vacía vinculada en Google Drive.</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>Excepciones</strong></td>
    <td align="center"><strong>Paso</strong></td>
    <td align="center"><strong>Acción</strong></td>
  </tr>
  <tr>
    <td align="center">5</td>
    <td>Si la API de Google falla (ej. falta de espacio o token inválido), el sistema hace un rollback (deshace) la creación de la materia en la base de datos y muestra un error.</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>Rendimiento</strong></td>
    <td align="center"><strong>Paso</strong></td>
    <td align="center"><strong>Cota de tiempo</strong></td>
  </tr>
  <tr>
    <td align="center">5</td>
    <td>Aproximadamente 2 a 4 segundos (depende de la latencia de la API de Google).</td>
  </tr>
  <tr>
    <td><strong>Frecuencia</strong></td>
    <td colspan="2">Media (Al inicio de cada cuatrimestre).</td>
  </tr>
  <tr>
    <td><strong>Estabilidad</strong></td>
    <td colspan="2">Alta.</td>
  </tr>
  <tr>
    <td><strong>Comentarios</strong></td>
    <td colspan="2">El sistema debería crear todas estas carpetas dentro de una carpeta principal (raíz) llamada "Dashboard Universitario" en el Drive del usuario para mantener el orden.</td>
  </tr>
</table>
<table border="1">
  <tr>
    <td align="center"><strong>CU-03</strong></td>
    <td colspan="2" align="center"><strong>Subir Entrega / Trabajo Práctico</strong></td>
  </tr>
  <tr>
    <td><strong>Objetivos Asociados</strong></td>
    <td colspan="2">• OBJ-02 Centralización de archivos académicos.</td>
  </tr>
  <tr>
    <td><strong>Requisitos Asociados</strong></td>
    <td colspan="2">• RF-05 Gestión de Entregas.<br>• RF-06 Carga de Archivos.</td>
  </tr>
  <tr>
    <td><strong>Actor Principal</strong></td>
    <td colspan="2">Estudiante</td>
  </tr>
  <tr>
    <td><strong>Precondición</strong></td>
    <td colspan="2">• Debe existir al menos una materia registrada en el sistema.<br>• El usuario debe tener la sesión iniciada con Google.</td>
  </tr>
  <tr>
    <td><strong>Intención del Actor</strong></td>
    <td colspan="2">Registrar una tarea resuelta y almacenar su archivo directamente en la nube.</td>
  </tr>
  <tr>
    <td><strong>Propósito del Sistema</strong></td>
    <td colspan="2">Permitir al estudiante subir un archivo al Google Drive asociado y actualizar el estado de la entrega en la base de datos.</td>
  </tr>
  <tr>
    <td><strong>Descripción General</strong></td>
    <td colspan="2">El estudiante selecciona una materia, indica los datos de la entrega, adjunta un archivo y el sistema lo sube a la carpeta de Drive correspondiente, marcando la tarea como pendiente de calificación.</td>
  </tr>
  <tr>
    <td rowspan="6"><strong>Secuencia Normal</strong></td>
    <td align="center"><strong>Paso</strong></td>
    <td align="center"><strong>Acción</strong></td>
  </tr>
  <tr>
    <td align="center">1</td>
    <td>El caso de uso inicia cuando el estudiante selecciona "Nueva Entrega" dentro del detalle de una materia.</td>
  </tr>
  <tr>
    <td align="center">2</td>
    <td>El sistema solicita Título, Fecha de Vencimiento y Archivo adjunto.</td>
  </tr>
  <tr>
    <td align="center">3</td>
    <td>El estudiante completa los datos, selecciona el archivo de su dispositivo y confirma.</td>
  </tr>
  <tr>
    <td align="center">4</td>
    <td>El sistema sube el archivo a la carpeta de Drive de la materia y guarda el registro de la entrega.</td>
  </tr>
  <tr>
    <td align="center">5</td>
    <td>El sistema informa que la entrega fue exitosa y finaliza el caso de uso.</td>
  </tr>
  <tr>
    <td><strong>Postcondición</strong></td>
    <td colspan="2">• La entrega aparece en el listado y el archivo queda resguardado en la nube.</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>Excepciones</strong></td>
    <td align="center"><strong>Paso</strong></td>
    <td align="center"><strong>Acción</strong></td>
  </tr>
  <tr>
    <td align="center">4</td>
    <td>Si el token de Google Drive expiró o el archivo excede el tamaño, el sistema notifica el error y pide reintentar.</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>Rendimiento</strong></td>
    <td align="center"><strong>Paso</strong></td>
    <td align="center"><strong>Cota de tiempo</strong></td>
  </tr>
  <tr>
    <td align="center">4</td>
    <td>Menos de 3 segundos (dependiendo de la conexión del usuario).</td>
  </tr>
  <tr>
    <td><strong>Frecuencia</strong></td>
    <td colspan="2">Alta (semanalmente por materia).</td>
  </tr>
  <tr>
    <td><strong>Estabilidad</strong></td>
    <td colspan="2">Alta.</td>
  </tr>
  <tr>
    <td><strong>Comentarios</strong></td>
    <td colspan="2">El sistema debe validar que el archivo tenga un formato soportado (PDF, JPG, PNG, DOCX) antes de iniciar la subida.</td>
  </tr>
</table>