import Image from 'next/image'
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
                <figure>
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
                        gracefully are being practiced.&quot;
                    </blockquote>
                    <figcaption>
                        <a
                            href={
                                'https://www.londonpubliclibrary.ca/story/2018/03/09/borrow-board-game-play-home'
                            }
                            target={'_blank'}
                            rel={'noopener nofollow'}
                        >
                            - London Public Library
                        </a>
                    </figcaption>
                </figure>
                <p></p>
            </section>
            <section className={styles.section}>
                <h2>Thank you, London, for 6 amazing years!</h2>
            </section>
        </main>
    )
}
