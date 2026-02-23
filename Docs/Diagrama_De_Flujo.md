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