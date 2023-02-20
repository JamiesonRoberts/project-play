import Head from 'next/head'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import Background from '@/components/Background'

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Project Play | Game.Play.Give | Thank you for 6 amazing
                    years
                </title>
                <meta name='description' content='Project Play' />
            </Head>
            <Header className={'container'} />
            <Main className={'container'} />
            <Footer className={'container'} />
            <Background />
        </>
    )
}
