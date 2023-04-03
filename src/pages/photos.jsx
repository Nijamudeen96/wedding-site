import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Photos.module.css'
import ExpandedView from './components/ExpandedView'
import logo from '../images/logo-no-background.png'
import { CldImage } from 'next-cloudinary';


export default function Photos() {
    const [expandView, setExpandView] = useState(0)
    const photo_ids = [
        { id: 1, image: 'wedding/img_7_dfoepz' },
        { id: 2, image: 'wedding/img_6_xzzoqe' },
        { id: 3, image: 'wedding/img_5_mb0ich' },
        { id: 4, image: 'wedding/img_4_hkwzis' },
        { id: 5, image: 'wedding/img_46_unnuss' },
        { id: 6, image: 'wedding/img_45_lcfbt4' },
        { id: 7, image: 'wedding/img_43_p1so4v' },
        { id: 8, image: 'wedding/img_40_ledrlw' },
        { id: 9, image: 'wedding/img_3_qu1jrx' },
        { id: 10, image: 'wedding/img_33_knnwgy' },
        { id: 11, image: 'wedding/img_30_frmnnd' },
        { id: 12, image: 'wedding/img_2_cuxcjy' },
        { id: 13, image: 'wedding/img_28_g0y98s' },
        { id: 14, image: 'wedding/img_24_dhuxo8' },
        { id: 15, image: 'wedding/img_21_vptuom' },
        { id: 16, image: 'wedding/img_20_zbuaya' },
        { id: 17, image: 'wedding/img_16_mnvpij' },
        { id: 18, image: 'wedding/img_13_jfimvf' },
        { id: 19, image: 'wedding/img_12_muneqa' },
        { id: 20, image: 'wedding/img_11_ig6rpi' },
        { id: 21, image: 'wedding/img_10_dm4vxo' }
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
            <div className={styles.gallery_container}>
                {
                    expandView === 0 ? photo_ids.map((photo) => (
                        < CldImage
                            id={photo.id}
                            key={photo.id}
                            alt={photo.image}
                            onClick={clickHandler}
                            className={styles.cld_img}
                            width="1024"
                            height="1024"
                            src={photo.image}
                            crop="thumb"
                            gravity="faces"
                            zoom="0.1"
                        />
                    )
                    ) : null
                }
                {
                    expandView != 0 ? <ExpandedView photo={photo_ids[expandView - 1]} setPhoto={setExpandView} maxLength={photo_ids.length} /> : null
                }
            </div>
        </div >
    )
}