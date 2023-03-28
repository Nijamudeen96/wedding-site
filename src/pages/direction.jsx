import Link from 'next/link'
import styles from '@/styles/Directions.module.css'

export default function direction() {
    return (
        <div>
            <div className={styles.navbar}>
                <h1><Link href="/">Celebrating Love</Link></h1>
                <button><Link href="/rsvp">RSVP</Link></button>
            </div>
            <h1>Directions</h1>
            <h2>Nearest MRT: Pioneer MRT Station (Exit A)</h2>
            <h2>Bus Service: Take 974 from Pioneer MRT Station</h2>
            <h2>Alight Opposite SAFTI Military Institute (After 6 Stops)</h2>
            <button><Link href="https://goo.gl/maps/EFEYSpcn8oToUs63A" target="_blank">Open location in Maps</Link></button>
        </div>
    )
}