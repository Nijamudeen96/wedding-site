import { useCallback, useEffect } from 'react';
import Image from 'next/image'
import styles from '@/styles/Photos.module.css'
import *  as img from '../../images'

export default function ExpandedView({ photo, setPhoto, maxLength }) {
    if (!photo) {
        photo = { id: 1, image: img.img_1 }
    }

    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            setPhoto(0)
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    const handleBackClick = () => {
        if (photo.id == 1) {
            setPhoto(maxLength)
        } else {
            setPhoto(photo.id - 1)
        }
    }

    const handleFrontClick = () => {
        if (photo.id == maxLength) {
            setPhoto(1)
        } else {
            setPhoto(photo.id + 1)
        }
    }

    const handleCloseClick = () => {
        setPhoto(0)
    }


    // const isLandscape = photo.image.default.width > photo.image.default.height

    return (
        <div className={styles.expanded_view_container}>
            {/* {isLandscape ? <Image className={styles.expanded_view_image_landscape} src={photo.image} /> : <Image className={styles.expanded_view_image} src={photo.image} />} */}
            <Image className={styles.expanded_view_image_landscape} src={photo.image} alt="wedding_photo" />
            <button className={styles.expanded_view_back} onClick={handleBackClick}> &#60; </button>
            <button className={styles.expanded_view_front} onClick={handleFrontClick}> &#62; </button>
            <button className={styles.expanded_view_close} onClick={handleCloseClick}> X </button>
        </div >
    )
}