import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
    const { name, contactNumber, attendee, vegetarian, wishes } = JSON.parse(req.body);

    const filter = { contactNumber: contactNumber }
    const options = { upsert: true }
    const updateDoc = {
        $set: {
            name: name,
            contactNumber: contactNumber,
            attendee: attendee,
            vegetarian: vegetarian,
            wishes: wishes
        }
    }
    try {
        const client = await clientPromise;
        const db = client.db("Wedding");

        const result = await db
            .collection("Wedding_Invite")
            .updateOne(filter, updateDoc, options)

        console.log(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`)
        res.status(200).json({ message: `Hi ${name}, RSVP Successfully` });
    } catch (e) {
        console.error(e);
    }
}