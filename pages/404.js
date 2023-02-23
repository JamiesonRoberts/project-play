import Head from 'next/head'
import Link from 'next/link'
import Background from '@/components/Background'

const layoutStyles = {
    minHeight: 'calc(100vh - 2rem)',
    width: 'calc(100vw - 2rem)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    position: 'relative',
    zIndex: 2,
}

export default function Home() {
    return (
        <>
            <Head>
                <title>404 - Page not found</title>
            </Head>

            <main style={layoutStyles}>
                <h1>404 - Page Not Found</h1>
                <Link href={'/'}>Return back to the main page</Link>
            </main>
            <Background />
        </>
    )
}
