import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Directions.module.css'
import logo from '../images/logo-no-background.png'

export default function direction() {
    return (
        <div className={styles.common_bg}>
            <div className={styles.navbar}>
                <Link href="/"><Image src={logo} className={styles.logo} /></Link>
                <Link href="/rsvp"><button className={styles.cta_btn}>RSVP</button></Link>
            </div>
            <div className={styles.d_address}>
                <h1>Arena Country Club</h1>
                <h1>d&apos;Arena</h1>
                <h2>AMARIS D ARENA Ballroom</h2>
                <p>511 Upper Jurong Rd, #02-05</p>
                <p>Singapore 638366</p>
                <Link className={styles.d_cta_btn} href="https://goo.gl/maps/EFEYSpcn8oToUs63A" target="_blank">Show in Maps</Link>
                <h1>Directions</h1>
                <h2>From Pioneer MRT Station</h2>
                <p>Take Bus 974</p>
                <p>Alight after 6 Stops at SAFTI Military Institute</p>
                <h2>From Joo Koon MRT Station</h2>
                <p>
                    10 minute walk from MRT Station
                </p>
            </div>

        </div>
    )
}