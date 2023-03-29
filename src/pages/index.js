import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>MNM Celebrating Love</title>
        <meta name="description" content="Welcome to our wedding site!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <Image src={hero_img} className={styles.hero_img} /> */}
        <div className={styles.hero}>
          <h1 className={styles.name} >Nijam & Madhu</h1>
          <h2 className={styles.time}>02 June 2023 | 5.30pm - 9.00pm</h2>
          <h2 className={styles.location}>Arena Country Club</h2>
          <p className={styles.description}>We are looking forward to celebrating this joyous day with you!</p>
          <Link href="/rsvp" className={styles.rsvp_link}><button className={styles.rsvp_btn}>RSVP</button></Link>
          <button className={styles.photo_btn}><Link href="/photos">Photos</Link></button>
          <button className={styles.direction_btn}><Link href="/direction">Directions</Link></button>
        </div>
      </main>
    </>
  )
}
