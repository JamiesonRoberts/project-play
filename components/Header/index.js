import Image from 'next/image'
import classNames from 'classnames'

import logo from '@/public/pp-weblogo-joystick.png'

import styles from './index.module.css'

export default function Header({ className, ...rest }) {
    return (
        <header {...rest} className={classNames(className, styles.header)}>
            <Image
                src={logo}
                alt={'Project Play Joystick'}
                priority={true}
                width={75}
                height={103}
            />
            <h1>PROJECT PLAY</h1>
        </header>
    )
}
