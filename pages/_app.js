import Head from 'next/head'
import { Ubuntu, Source_Sans_Pro } from '@next/font/google'
import PlausibleProvider from 'next-plausible'

const ubuntu = Ubuntu({ weight: '400', subsets: ['latin'] })
const sourceSansPro = Source_Sans_Pro({
    weight: ['400', '700'],
    subsets: ['latin'],
})

import '@/styles/globals.css'

const App = ({ Component, pageProps }) => {
    return (
        <PlausibleProvider domain='projectplay.ca' trackOutboundLinks={true}>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />

                <link rel='shortcut icon' href='/favicon.ico' />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link rel='manifest' href='/site.webmanifest' />
                <link
                    rel='mask-icon'
                    href='/safari-pinned-tab.svg'
                    color='#0061C2'
                />
                <meta name='msapplication-TileColor' content='#0061C2' />
                <meta name='theme-color' content='#0061C2' />
            </Head>
            <style jsx global>{`
                :root {
                    --ubuntu: ${ubuntu.style.fontFamily};
                    --source: ${sourceSansPro.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </PlausibleProvider>
    )
}

export default App
