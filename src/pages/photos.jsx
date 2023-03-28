import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Photos.module.css'
import ExpandedView from './components/ExpandedView'

import img_1 from './images/img_1.jpg'
import img_2 from './images/img_2.jpg'
import img_3 from './images/img_3.jpg'
import img_4 from './images/img_4.jpg'
import img_5 from './images/img_5.jpg'
import img_6 from './images/img_6.jpg'
import img_7 from './images/img_7.jpg'

export default function photos() {
    const [expandView, setExpandView] = useState(0)
    const photo_ids = [
        { id: 1, image: img_1 },
        { id: 2, image: img_2 },
        { id: 3, image: img_3 },
        { id: 4, image: img_4 },
        { id: 5, image: img_5 },
        { id: 6, image: img_6 },
        { id: 7, image: img_7 },
    ]

    const clickHandler = (event) => {
        console.log(event.currentTarget.id)
        setExpandView(event.currentTarget.id)
    }
    return (

        <div>
            <div className={styles.navbar}>
                <h1><Link href="/">Celebrating Love</Link></h1>
                <button><Link href="/rsvp">RSVP</Link></button>
            </div>
            <div className={styles.gallery_container}>
                {
                    photo_ids.map((photo) => (
                        <Image id={photo.id} className={styles.gallery_small} src={photo.image} onClick={clickHandler} />
                    ))
                }
                {
                    expandView != 0 ? <ExpandedView photo={photo_ids[expandView - 1]} setPhoto={setExpandView} maxLength={photo_ids.length} /> : null
                }
            </div>
        </div>
    )
}