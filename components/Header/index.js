import Image from 'next/image'

import logo from '@/public/pp-weblogo-joystick.png'

import styles from './index.module.css'

export default function Header() {
    return (
        <>
            <Image
                src={logo}
                alt={'Project Play Joystick'}
                priority={true}
                width={75}
                height={103}
            />
            <h1 className={styles.text}>
                PROJECT PLAY
                <span className={styles.subText}>
                    <span>G</span>
                    <span>a</span>
                    <span>m</span>
                    <span>e</span>
                    <span>.</span>
                    <span>P</span>
                    <span>l</span>
                    <span>a</span>
                    <span>y</span>
                    <span>.</span>
                    <span>G</span>
                    <span>i</span>
                    <span>v</span>
                    <span>e</span>
                </span>
            </h1>
        </>
    )
}
