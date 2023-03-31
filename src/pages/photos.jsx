import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Photos.module.css'
import ExpandedView from './components/ExpandedView'
import * as i from '../images'
import logo from '../images/logo-no-background.png'


export default function Photos() {
    const [expandView, setExpandView] = useState(0)
    const photo_ids = [
        { id: 1, image: i.img_1 },
        { id: 2, image: i.img_2 },
        { id: 3, image: i.img_3 },
        { id: 4, image: i.img_4 },
        { id: 5, image: i.img_5 },
        { id: 6, image: i.img_6 },
        { id: 7, image: i.img_7 },
        { id: 8, image: i.img_8 },
        { id: 9, image: i.img_9 },
        { id: 10, image: i.img_10 },
        { id: 11, image: i.img_11 },
        { id: 12, image: i.img_12 },
        { id: 13, image: i.img_13 },
        { id: 14, image: i.img_14 },
        { id: 15, image: i.img_15 },
        { id: 16, image: i.img_16 },
        { id: 17, image: i.img_17 },
        { id: 18, image: i.img_18 },
        { id: 19, image: i.img_19 },
        { id: 20, image: i.img_20 },
        { id: 21, image: i.img_21 },
        { id: 22, image: i.img_22 },
        { id: 23, image: i.img_23 },
        { id: 24, image: i.img_24 },
        { id: 25, image: i.img_25 },
        { id: 26, image: i.img_26 },
        { id: 27, image: i.img_27 },
        { id: 28, image: i.img_28 },
        { id: 29, image: i.img_29 },
        { id: 30, image: i.img_30 },
        { id: 31, image: i.img_31 },
        { id: 32, image: i.img_32 },
        { id: 33, image: i.img_33 },
        { id: 34, image: i.img_34 },
        { id: 35, image: i.img_35 },
        { id: 36, image: i.img_36 },
        { id: 37, image: i.img_37 },
        { id: 38, image: i.img_38 },
        { id: 39, image: i.img_39 },
        { id: 40, image: i.img_40 },
        { id: 41, image: i.img_41 },
        { id: 42, image: i.img_42 },
        { id: 43, image: i.img_43 },
        { id: 44, image: i.img_44 },
        { id: 45, image: i.img_45 }
    ]

    const clickHandler = (event) => {
        console.log(event.currentTarget.id)
        setExpandView(event.currentTarget.id)
    }

    return (
        <div className={styles.common_bg}>
            <div className={styles.navbar}>
                <Link href="/"><Image src={logo} className={styles.logo} /></Link>
                <Link href="/rsvp"><button className={styles.cta_btn}>RSVP</button></Link>
            </div>
            <div className={styles.gallery_container}>
                {
                    photo_ids.map((photo) => (
                        <Image key={photo.id} id={photo.id} className={styles.gallery_small} src={photo.image} onClick={clickHandler} />
                    ))
                }
                {
                    expandView != 0 ? <ExpandedView photo={photo_ids[expandView - 1]} setPhoto={setExpandView} maxLength={photo_ids.length} /> : null
                }
            </div>
        </div>
    )
}