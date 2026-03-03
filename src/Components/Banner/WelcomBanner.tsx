import styles from './WelcomBanner.module.scss';

export default function WelcomBanner() {
    const date = new Date();//obtener la fecha de hoy
    const opcion: Intl.DateTimeFormatOptions = {//opciones para formatear la fecha
        weekday: 'long',//Lunes
        year: 'numeric',//2026
        month: 'long',//Febrero
        day: 'numeric',//29
    };
    const fechaFormateada = date.toLocaleDateString('es-ES', opcion);//poner la fecha en español
    const fechaFinal = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);//formatear la fecha
    const hora= date.getHours();//obtener la hora actual para determinar el saludo adecuado
    let saludo = "Bienvenido";//saludo por defecto, se ajustará según la hora del día

    /*Logica del Saludo */
    if(hora >= 6 && hora < 12){
        saludo = "Buenos días";
    } else if(hora >= 12 && hora < 18){
        saludo = "Buenas tardes";
    } else {
        saludo = "Buenas noches";
    }

    return(
        <div className={styles.banner}>
            <div className={`${styles.hole} ${styles.hole1}`}></div>
            <div className={`${styles.hole} ${styles.hole2}`}></div>
            <div className={`${styles.hole} ${styles.hole3}`}></div>
            <div className={`${styles.pin} ${styles.pinizq}`}></div>
            <div className={`${styles.pin} ${styles.pinder}`}></div>
            <h1 className={styles.title}>{saludo}</h1>
            <p className={styles.date}>{fechaFinal}</p>
        </div>
    );
}