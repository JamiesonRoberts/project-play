import Image from 'next/image'
import classNames from 'classnames'

import styles from './index.module.css'

export default function Header({ className, ...rest }) {
    return (
        <main {...rest} className={classNames(className, styles.main)}>
            <h2>Thank you, London, for 6 amazing years!</h2>
        </main>
    )
}
