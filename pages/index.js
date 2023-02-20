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
                    name='title'
                    content='Project Play | Game.Play.Give | Thank you for 6 amazing years'
                />
                <meta
                    name='description'
                    content='Thank you for 6 amazing years of Project Play. You helped us make Project Play bigger, and made it last longer than we ever planned. And, you made it fun - thanks again!'
                />

                <meta property='og:type' content='website' />
                <meta property='og:url' content='https://projectplay.ca/' />
                <meta
                    property='og:title'
                    content='Project Play | Game.Play.Give | Thank you for 6 amazing years'
                />
                <meta
                    property='og:description'
                    content='Thank you for 6 amazing years of Project Play. You helped us make Project Play bigger, and made it last longer than we ever planned. And, you made it fun - thanks again!'
                />
                <meta
                    property='og:image'
                    content='https://projectplay.ca/project-play-social.jpg'
                />

                <meta property='twitter:card' content='summary_large_image' />
                <meta
                    property='twitter:url'
                    content='https://projectplay.ca/'
                />
                <meta
                    property='twitter:title'
                    content='Project Play | Game.Play.Give | Thank you for 6 amazing years'
                />
                <meta
                    property='twitter:description'
                    content='Thank you for 6 amazing years of Project Play. You helped us make Project Play bigger, and made it last longer than we ever planned. And, you made it fun - thanks again!'
                />
                <meta
                    property='twitter:image'
                    content='https://projectplay.ca/project-play-social.jpg'
                />

                <link rel='canonical' href='https://projectplay.ca/' />
            </Head>
            <Header className={'container'} />
            <Main className={'container'} />
            <Footer className={'container'} />
            <Background />
        </>
    )
}
