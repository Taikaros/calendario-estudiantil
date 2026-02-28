import Link from "next/link";
import styles from "./Navbar.module.scss";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        🎓Mi Universidad
      </div>
      <div className={styles.spacer}>
      <ul className={styles.links}>
        <li><Link href="/">🏠 Inicio</Link></li>
        <li><Link href="/Materias">📚 Materias</Link></li>
        <li><Link href="/Entregas">📋 Entregas</Link></li>
      </ul>
      <div className={styles.profile}>
        👤 Perfil
      </div>
      </div>
    </nav>
  );
}