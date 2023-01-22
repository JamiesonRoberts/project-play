import PlausibleProvider from 'next-plausible'

import '@/styles/globals.css'

const App = ({ Component, pageProps }) => {
    return (
        <PlausibleProvider domain='projectplay.ca' trackOutboundLinks={true}>
            <style jsx global>{`
                :root {
                }
            `}</style>
            <Component {...pageProps} />
        </PlausibleProvider>
    )
}

export default App
