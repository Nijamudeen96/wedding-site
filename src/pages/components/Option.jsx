export default function Option({ total_attendance, setVegetarian }) {
    let list = []
    for (let i = 0; i <= total_attendance; i++) {
        list = [...list, {
            id: i,
            value: i
        }]
    }
    return (
        <select id="vegetarian" name="vegetarian" onChange={(e) => setVegetarian(e.target.value)} required>
            {list.map((i) => (
                <option key={i.id} value={i.value}>{i.value}</option>
            ))}
        </select >
    )
}