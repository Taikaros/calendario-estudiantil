# 🗄️ Modelo de Datos (DER)

A continuación se detalla el Diagrama Entidad-Relación estructurado para la base de datos relacional (PostgreSQL) del sistema.

## Diagrama Visual

```mermaid
erDiagram
    USUARIO ||--o{ MATERIA : "gestiona"
    MATERIA ||--o{ HORARIO : "tiene"
    MATERIA ||--o{ ENTREGA : "posee"

    USUARIO {
        UUID id_usuario PK
        String nombre
        String email
        String token_drive "Encriptado"
    }

    MATERIA {
        UUID id_materia PK
        UUID id_usuario FK
        String nombre
        String profesor
        String carpeta_drive_url
    }

    HORARIO {
        UUID id_horario PK
        UUID id_materia FK
        String dia_semana
        Time hora_inicio
        Time hora_fin
    }

    ENTREGA {
        UUID id_entrega PK
        UUID id_materia FK
        String titulo
        DateTime fecha_vencimiento
        String estado "Pendiente / Entregado"
        String archivo_adjunto_url
    }