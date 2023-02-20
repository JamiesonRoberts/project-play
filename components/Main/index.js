import Link from 'next/link'
import classNames from 'classnames'

import styles from './index.module.css'

export default function Header({ className, ...rest }) {
    return (
        <main {...rest} className={classNames(className, styles.main)}>
            <section className={styles.section}>
                <h2>The Project Play Legacy</h2>
                <p>
                    Project Play was founded over a shared platter of chicken
                    wings with the goal of giving the gift of gaming back to the
                    community. After 6 years and{' '}
                    <strong>over $40,000 dollars raised</strong>, our legacy is
                    not only all of the community centers we have been able to
                    support, but the giving the gift of gaming back to all of
                    London, with a partnership with the London Public Library.
                </p>
                <figure className={styles.figure}>
                    <blockquote
                        className={styles.pullQuote}
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
            <section className={styles.section}>
                <h2>Thank you, #ldnont (London), for 6 amazing years!</h2>
            </section>
        </main>
    )
}
