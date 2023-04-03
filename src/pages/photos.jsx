import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Photos.module.css'
import ExpandedView from './components/ExpandedView'
import * as i from '../images'
import logo from '../images/logo-no-background.png'
import { CldImage } from 'next-cloudinary';


export default function Photos() {
    const [expandView, setExpandView] = useState(0)
    const photo_ids = [
        { id: 1, image: 'wedding/AVSA9229_bgebol' },
        // { id: 2, image: 'wedding/AVSA8894_pi5gdg' },
        // { id: 3, image: 'wedding/0I1A4429_h7hv92' },
        // { id: 4, image: 'wedding/0I1A4411_tnmece' },
        // { id: 5, image: 'wedding/0I1A4405_wmsfjr' },
        // { id: 6, image: 'wedding/0I1A4366_mpvngy' },
        // { id: 7, image: 'wedding/0I1A4361_zahb5g' }
    ]

    const clickHandler = (event) => {
        console.log(event.currentTarget.id)
        setExpandView(event.currentTarget.id)
    }

    return (
        <div className={styles.common_bg}>
            <div className={styles.navbar}>
                <Link href="/"><Image src={logo} className={styles.logo} alt="logo" /></Link>
                <Link href="/rsvp"><button className={styles.cta_btn}>RSVP</button></Link>
            </div>
            {/* {
                photo_ids.map((photo) => (
                    < CldImage
                        width="300"
                        height="300"
                        src={photo.image}
                        crop="thumb"
                        gravity="faces"
                        alt={photo.image}
                    />
                )
                )
            } */}
            < CldImage
                width="300"
                height="300"
                src='wedding/AVSA9229_bgebol'
                crop="thumb"
                gravity="faces"
                alt='wedding/AVSA9229_bgebol'
            />
            {/* <div className={styles.gallery_container}>
                {
                    photo_ids.map((photo) => (
                        <Image key={photo.id} id={photo.id} className={styles.gallery_small} src={photo.image} onClick={clickHandler} />
                    ))
                }
                {
                    expandView != 0 ? <ExpandedView photo={photo_ids[expandView - 1]} setPhoto={setExpandView} maxLength={photo_ids.length} /> : null
                }
            </div> */}
        </div>
    )
}