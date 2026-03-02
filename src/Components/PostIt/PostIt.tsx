import styles from './PostIt.module.scss';

interface PostItProps {
  title: string;
  value: string | number;
  variant: 'yellow' | 'blue' | 'green' | 'red' | 'purple';
  hasLine?: boolean;
}

export default function PostIt({ title, value, variant, hasLine }: PostItProps) {
       const mPingColor: Record<string, string> = {
        yellow : '#ef4444',
        blue: '#f97316',
        green: '#3b82f6',
        red:'#facc15',
        purple: '#22c55e',
    };

    const pinColor = mPingColor[variant];

    return(
        <div className={`${styles.postIt} ${styles[variant]} ${hasLine ? styles.line : ''}`} style={{ '--color-ping': pinColor } as React.CSSProperties}>
            <div className={styles.pin}></div>
            <span className={styles.title}>{title}</span>
            <span className={styles.value}>{value}</span>
        </div>
    );
}