import { useState } from "react"
import { useRouter } from "next/router";
import Option from './components/Option'
import styles from '@/styles/RSVP.module.css'
import Link from 'next/link'

export default function RSVP() {
    const router = useRouter();

    const [name, setName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [attendee, setAttendee] = useState(1)
    const [vegetarian, setVegetarian] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        const postData = async () => {
            const data = {
                name: name,
                contactNumber: contactNumber,
                attendee: attendee,
                vegetarian: vegetarian,
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
        <div>
            <div className={styles.navbar}>
                <h1><Link href="/">Celebrating Love</Link></h1>
            </div>
            <h1>RSVP Page!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                        id="contactNumber"
                        type="number"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="attendee">Number Of People Attending</label>
                    <input
                        id="attendee"
                        type="number"
                        value={attendee}
                        onChange={(e) => setAttendee(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="vegetarian">Number Of Vegetarians</label>
                    <Option total_attendance={attendee} setVegetarian={setVegetarian} />
                </div>
                {vegetarian != 0 ? <p>No. of vegetarian: {vegetarian}</p> : null}
                {vegetarian != attendee ? <p>No. of non-vegetarian: {attendee - vegetarian}</p> : null}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

