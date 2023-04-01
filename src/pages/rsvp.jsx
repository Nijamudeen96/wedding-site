import { useState } from "react"
import { useRouter } from "next/router";
import Option from './components/Option'
import styles from '@/styles/RSVP.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../images/logo-no-background.png'

export default function RSVP() {
    const router = useRouter();

    const [name, setName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [attendee, setAttendee] = useState(1)
    const [vegetarian, setVegetarian] = useState(0)
    const [wishes, setWishes] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const postData = async () => {
            const data = {
                name: name,
                contactNumber: contactNumber,
                attendee: attendee,
                vegetarian: vegetarian,
                wishes: wishes
            };

            const response = await fetch("/api/post", {
                method: "POST",
                body: JSON.stringify(data),
            });
            return response.json();
        };
        postData().then((data) => {
            alert(data.message);
            router.push('/')
        });
    };

    return (
        <div className={styles.common_bg}>
            <div className={styles.navbar}>
                <Link href="/"><Image src={logo} className={styles.logo} /></Link>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="Name">Name</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                    id="contactNumber"
                    type="number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                />
                <label htmlFor="attendee">Number Of People Attending</label>
                <input
                    id="attendee"
                    type="number"
                    value={attendee}
                    onChange={(e) => setAttendee(e.target.value)}
                    required
                />
                <label htmlFor="vegetarian">Number Of Vegetarians</label>
                <Option total_attendance={attendee} setVegetarian={setVegetarian} />
                {vegetarian != 0 ? <p>No. of Vegetarian: {vegetarian}</p> : null}
                {vegetarian != attendee ? <p>No. of Non-Vegetarian: {attendee - vegetarian}</p> : null}
                <label htmlFor="wishes">Your Wishes For The Couple (Optional)</label>
                <input
                    id="wishes"
                    type="text"
                    value={wishes}
                    onChange={(e) => setWishes(e.target.value)}
                />
                <button type="submit" className={styles.submit_btn} >Submit</button>
            </form>
        </div>
    )
}

