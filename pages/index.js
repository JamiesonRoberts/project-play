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
                <meta
                    name='description'
                    content='Thank you for 6 amazing years of Project Play. You helped us make Project Play bigger, and made it last longer than we ever planned. And, you made it fun - thanks again!'
                />
            </Head>
            <Header className={'container'} />
            <Main className={'container'} />
            <Footer className={'container'} />
            <Background />
        </>
    )
}
