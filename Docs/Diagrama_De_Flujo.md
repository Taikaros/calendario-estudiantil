# 🔄 Diagrama de Flujo: Subida de Entrega

Este diagrama detalla la lógica de decisión y el flujo de datos al momento de registrar una nueva tarea y subir su archivo adjunto a Google Drive.

```mermaid
flowchart TD
    %% Nodos principales
    A([Inicio: Usuario selecciona 'Nueva Entrega']) --> B{¿Está autenticado<br>con Google?}
    
    %% Flujo de Autenticación
    B -- No --> C[Redirigir a Login de Google]
    C --> D[Guardar Token OAuth en Sesión]
    D --> E[Retornar a la Materia]
    E --> F
    
    %% Flujo de Formulario
    B -- Sí --> F[Mostrar Formulario de Entrega]
    F --> G[/Usuario ingresa: Título, Fecha y Archivo/]
    G --> H{¿Datos válidos y<br>archivo < 5MB?}
    
    %% Validación de Errores locales
    H -- No --> I[Mostrar Alerta: 'Revisa los campos o el peso del archivo']
    I --> F
    
    %% Interacción con API y Base de Datos
    H -- Sí --> J[Llamar a API de Google Drive]
    J --> K{¿Subida<br>Exitosa?}
    
    %% Manejo de Errores de API
    K -- No --> L[Mostrar Alerta: 'Error de conexión con Drive']
    L --> F
    
    %% Éxito y guardado
    K -- Sí --> M[Obtener URL del archivo guardado]
    M --> N[(Guardar registro en PostgreSQL<br>con Estado: Pendiente)]
    N --> O[Actualizar Interfaz: Mostrar nueva entrega]
    O --> P([Fin del Proceso])

    %% Estilos opcionales para destacar bases de datos y decisiones
    style B fill:#f9f,stroke:#333,stroke-width:2px
    style H fill:#f9f,stroke:#333,stroke-width:2px
    style K fill:#f9f,stroke:#333,stroke-width:2px
    style N fill:#bbf,stroke:#333,stroke-width:2px
```
---
## 🔐 Diagrama de Flujo: Inicio de Sesión y Autorización (CU-01)

Este diagrama representa el flujo de autenticación mediante OAuth 2.0 con Google.

```mermaid
flowchart TD
    A([Inicio: Usuario entra a la App]) --> B[Mostrar pantalla de Login]
    B --> C([Clic en 'Iniciar sesión con Google'])
    C --> D[Redirección al portal de Google OAuth]
    D --> E{¿Usuario concede<br>permisos de Drive?}
    
    E -- No --> F[Mostrar Alerta: 'Los permisos son requeridos']
    F --> B
    
    E -- Sí --> G[Google retorna Token de Acceso]
    G --> H[(Guardar sesión y Token encriptado)]
    H --> I[Redirigir al Tablero Principal]
    I --> J([Fin del Proceso])

    style E fill:#f9f,stroke:#333,stroke-width:2px
    style H fill:#bbf,stroke:#333,stroke-width:2px   
```
---
## 🔐 Diagrama de Flujo: Registrar Materia y Crear Carpeta (CU-02)
```mermaid
flowchart TD
    A([Inicio: Selecciona 'Añadir Materia']) --> B[Mostrar Formulario]
    B --> C[/Ingresa: Nombre y Profesor/]
    C --> D{¿Campos vacíos o<br>caracteres inválidos?}
    
    D -- Sí --> E[Mostrar Alerta: 'Completa todos los datos correctamente']
    E --> B
    
    D -- No --> F[(Insertar Materia en PostgreSQL)]
    F --> G[Llamar a API: Crear Carpeta en Drive]
    G --> H{¿Se creó la<br>carpeta con éxito?}
    
    H -- No --> I[Mostrar Alerta de Error de API]
    I --> J[(Rollback: Eliminar Materia de PostgreSQL)]
    J --> B
    
    H -- Sí --> K[Obtener URL de la nueva carpeta]
    K --> L[(Actualizar Materia en PostgreSQL con la URL)]
    L --> M[Actualizar Interfaz: Mostrar nueva materia]
    M --> N([Fin del Proceso])

    style D fill:#f9f,stroke:#333,stroke-width:2px
    style H fill:#f9f,stroke:#333,stroke-width:2px
    style F fill:#bbf,stroke:#333,stroke-width:2px
    style J fill:#bbf,stroke:#333,stroke-width:2px
    style L fill:#bbf,stroke:#333,stroke-width:2px
    ```