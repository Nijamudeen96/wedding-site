import Image from 'next/image'
import styles from '@/styles/Photos.module.css'

const placeHolderPhoto = {
    id: 0,
    image: null
}

export default function ExpandedView({ photo = placeHolderPhoto, setPhoto, maxLength }) {
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

    const isLandscape = photo.image.default.width > photo.image.default.height

    return (
        <div className={styles.expanded_view_container}>
            {isLandscape ? <Image className={styles.expanded_view_image_landscape} src={photo.image} /> : <Image className={styles.expanded_view_image} src={photo.image} />}
            <button className={styles.expanded_view_back} onClick={handleBackClick}> 🡄 </button>
            <button className={styles.expanded_view_front} onClick={handleFrontClick}> 🡆 </button>
            <button className={styles.expanded_view_close} onClick={handleCloseClick}> X </button>
        </div >
    )
}