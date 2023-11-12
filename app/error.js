'use client'

import Link from 'next/link'
import Background from '@/components/Background'

const layoutStyles = {
    minHeight: 'calc(100vh - 1rem)',
    width: 'calc(100vw - 1rem)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    position: 'relative',
    zIndex: 2,
}

export default function Error() {
    return (
        <>
            <main style={layoutStyles}>
                <h1>Whoops - Something didn&apos;t quite go right there</h1>
                <Link href='/'>Return back to the main page</Link>
            </main>
            <Background />
        </>
    )
}
