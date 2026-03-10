import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.logo}>ANXIETY.COURSE</div>
        
        <div className={styles.links}>
          <Link href="/offer" target="_blank" rel="noopener noreferrer">
            Договір оферти
          </Link>
          
          <Link href="/privacy" target="_blank" rel="noopener noreferrer">
            Політика конфіденційності
          </Link>
        </div>

        {/* Ліцензійне посилання для Storyset */}
        <div className={styles.credits}>
          Illustrations by <a href="https://storyset.com/" target="_blank" rel="noopener noreferrer">Storyset</a>
        </div>
        
        <div className={styles.copy}>
          © {new Date().getFullYear()} Усі права захищені.
        </div>
      </footer>
    </div>
  );
}