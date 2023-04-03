import { useCallback, useEffect } from 'react';
import styles from '@/styles/Photos.module.css'
import { CldImage } from 'next-cloudinary';

export default function ExpandedView({ photo, setPhoto, maxLength }) {
    if (!photo) {
        photo = { id: 1, image: 'wedding/AVSA9229_bgebol' }
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

    return (
        <div className={styles.expanded_view_container}>
            < CldImage
                id={photo.id}
                key={photo.id}
                alt={photo.image}
                className={styles.expanded_view_image}
                width="1024"
                height="1024"
                src={photo.image}
                crop="fit"
                zoom="0.1"
            />
            <button className={styles.expanded_view_back} onClick={handleBackClick}> &#60; </button>
            <button className={styles.expanded_view_front} onClick={handleFrontClick}> &#62; </button>
            <button className={styles.expanded_view_close} onClick={handleCloseClick}> X </button>
        </div >
    )
}