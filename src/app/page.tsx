import Navbar from "@/Components/Navbar/Navbar";
import PostIt from "@/Components/PostIt/PostIt";
import { title } from "process";

type ColorNota = "yellow" | "blue" | "green" | "red" | "purple";

interface DatosNota {
  id: number;
  title: string;
  value: number;
  variant: ColorNota;
  hasLine: boolean;
}

export default function Home() {
  
  const notas: DatosNota[] = [
    { id: 1, title: "Materias Activas", value: 6, variant: "yellow", hasLine: true },
    { id: 2, title: "Trabajos Pendientes", value: 8, variant: "blue", hasLine: false },
    { id: 3, title: "Clases de Hoy", value: 3, variant: "green", hasLine: false },
    { id: 4, title: "Carpetas", value: 2, variant: "red", hasLine: true },
    { id: 5, title: "Próximos exámenes", value: 5, variant: "purple", hasLine: false },
  ];

  return (
    <main style={{ padding: '3rem 2rem' }}>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {notas.map((nota) => (
          <PostIt 
            key={nota.id} 
            title={nota.title} 
            value={nota.value} 
            variant={nota.variant} 
            hasLine={nota.hasLine} 
          />
        ))}
      </div>
    </main>
  );
}
