import Link from 'next/link'

const sectionStyles = {
    position: 'relative',
    padding: '1rem',
    backdropFilter: 'blur(0.25rem)',
}

const title = 'Project Play | Game.Play.Give | Thank you for 6 amazing years'
const description =
    'Thank you for 6 amazing years of Project Play. You helped us make Project Play bigger, and made it last longer than we ever planned. And, you made it fun - thanks again!'
const url = 'https://projectplay.ca/'
const images = [{ url: '/project-play-social.jpg', alt: 'Project Play Logo with the text "Project Play - Game Play Give"' }]

export const metadata = {
    title,
    description,
    openGraph: {
        type: 'website',
        locale: 'en_CA',
        url,
        title,
        description,
        images,
    },
    twitter: {
        card: 'summary_large_image',
        url,
        title,
        description,
        images,
    },
    alternates: {
        canonical: '/',
    },
}

export default function Page() {
    return (
        <>
            <section style={sectionStyles}>
                <h2>The Project Play Legacy</h2>
                <p>
                    Project Play was founded over a shared platter of chicken
                    wings with the goal of giving the gift of gaming back to the
                    community. After 6 years,{' '}
                    <strong>over $40,000 dollars raised</strong>, helping out 20
                    different community centres and agencies; our final legacy
                    is giving the gift of gaming back to all of London and area,
                    with a partnership with the London Public Library.
                </p>
                <figure style={{ margin: '1rem 1.25rem' }}>
                    <blockquote
                        style={{ margin: '0 auto 1rem', fontStyle: 'italic' }}
                        cite={
                            'https://www.londonpubliclibrary.ca/story/2018/03/09/borrow-board-game-play-home'
                        }
                    >
                        &quot;For London Public Library, this new lending
                        collection is a perfect way to support London families.
                        Games help build skills like comprehension and problem
                        solving. Because they’re having fun, kids are motivated
                        to concentrate, understand and strategize. Many games
                        also require the use of numeracy skills and help expand
                        vocabulary, especially for those learning English. Even
                        social skills like waiting your turn and losing
                        gracefully are being practiced.
                        <br />
                        <br />
                        Perhaps the greatest benefit to playing board games is
                        that they are a fun way to connect across age, ability,
                        language and culture. And now Londoners, regardless of
                        circumstance, have access to this great resource through
                        their Library thanks to the generous support of local
                        organization Project Play.&quot;
                    </blockquote>
                    <figcaption>
                        <Link
                            href={
                                'https://www.londonpubliclibrary.ca/story/2018/03/09/borrow-board-game-play-home'
                            }
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                        >
                            - London Public Library
                        </Link>
                    </figcaption>
                </figure>
                <p>
                    To find out what games are available at your local branch,
                    search the{' '}
                    <Link
                        href={
                            'https://encore.londonpubliclibrary.ca/iii/encore/?lang=eng'
                        }
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                    >
                        London Public Library catalog
                    </Link>{' '}
                    for &quot;Games to go&quot;, or browse the{' '}
                    <Link
                        href={
                            'http://encore.londonpubliclibrary.ca/iii/encore/search/C__S%22games%20to%20go%22__Orightresult__U?'
                        }
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                    >
                        catalog here and filter by your local branch
                    </Link>
                    .
                </p>
            </section>
            <section style={sectionStyles}>
                <h2>Thank you, #ldnont (London), for 6 amazing years!</h2>
                <p>
                    <strong>The Origin Story</strong>: Founders Greg and Mathew
                    really did just conceive the idea over a shared platter of
                    chicken wings. “What if we held a gaming event, but made it
                    actually do some good for the community?”
                </p>

                <p>
                    <strong>The Supporting Cast</strong>: A crew of awesome
                    volunteers quickly assembled, as well as fantastic partners
                    who would be with us for our many years - like Digital
                    Extremes, Big Blue Bubble, Uber Cool Stuff, Fanshawe
                    College, LEDC and the Game Chamber
                </p>

                <p>
                    <strong>The Super Powers</strong>: We quickly realized that
                    by bringing together all of London’s gaming community, we
                    could raise a ton of money to help out organizations like
                    Merrymount Family Crisis Centre, Women’s Community House and
                    London Children’s Hospital. Over the years, we donated
                    bundles of TVs, video games and board games to places where
                    children in tough circumstances might find themselves - so
                    that these kids and their families could tap into “the power
                    of play” to find a bit of normalcy and fun during a rough
                    time.
                </p>

                <p>
                    <strong>The Amazing Run</strong>: Project Play held 6 annual
                    gaming events, raised over $40,000 to donate back to the
                    community, and helped out 20 different community centres and
                    agencies in the London area. We were also nominated for -
                    and won - a{' '}
                    <Link
                        href={'https://pcia.pillarnonprofit.ca/'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                    >
                        Pillar Community Award for Innovation
                    </Link>
                    . You can see it for yourself: go to the wall across from
                    the central library to see all the Pillar award winners.
                    We’re forever there! :)
                </p>

                <p>
                    <strong>The Epic Team-Up</strong>: In 2015, Project Play
                    joined forces with{' '}
                    <Link
                        href={'https://forestcitycomicon.ca'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                    >
                        Forest City ComicCon
                    </Link>
                    , who helped us put on even bigger, better events that
                    brought in more people to support us. What a great
                    partnership!
                </p>

                <p>
                    <strong>The last words</strong>: To every single one of you
                    who shared their time, money, energy or their creations with
                    us - thank you so much! You helped us make Project Play
                    bigger, and made it last longer than we ever planned. And,
                    you made it fun - thanks again!
                </p>
            </section>
        </>
    )
}
