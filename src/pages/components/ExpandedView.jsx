import Image from 'next/image'
import styles from '@/styles/Photos.module.css'

export default function ExpandedView({ photo, setPhoto, maxLength }) {
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
            {photo ? <Image className={styles.expanded_view_image} src={photo.image} /> : null}
            <button className={styles.expanded_view_back} onClick={handleBackClick}> 🡄 </button>
            <button className={styles.expanded_view_front} onClick={handleFrontClick}> 🡆 </button>
            <button className={styles.expanded_view_close} onClick={handleCloseClick}> X </button>
        </div >
    )
}