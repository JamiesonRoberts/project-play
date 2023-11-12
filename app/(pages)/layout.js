import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Background from '@/components/Background'

import styles from './layout.module.css'

export default function Layout({ children }) {
    return (
        <>
            <header className={`${styles.container} ${styles.header}`}>
                <Header />
            </header>
            <main className={`${styles.container} ${styles.main}`}>
                {children}
            </main>
            <footer className={`${styles.container} ${styles.footer}`}>
                <Footer />
            </footer>
            <Background />
        </>
    )
}
