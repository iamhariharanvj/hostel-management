import { db } from '../../config/firebase.js'; // Make sure to import the Firestore instance from your Firebase setup
import { Complaint } from '../../models/Complaints.js';
export const createComplaint = async (req, res) => {
    const { title, description, category } = req.body;
    try {
        const complaintsRef = db.collection('complaints');
        const newComplaint = {
            title: title,
            description: description,
            votes: 0,
            category: category,
            status: 'applied',
        };

        await complaintsRef.add(newComplaint);
        res.status(201).json(newComplaint);
    } catch (error) {
        console.error('Error creating complaint:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getComplaints = async (req, res) => {
    try {
        const complaintsRef = db.collection('complaints');
        const snapshot = await complaintsRef.get();
        const complaints = snapshot.docs.map((doc) => {
            const data = doc.data();
            return new Complaint(
                data.title,
                data.description,
                data.votes,
                data.category,
                data.status,

                doc.id,
            );
        });
        res.json(complaints);
    } catch (error) {
        console.error('Error fetching complaints:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const upvoteComplaint = async (req, res) => {
    const { complaintId } = req.params;
    try {
        const complaintRef = db.collection('complaints').doc(complaintId);
        const complaint = await complaintRef.get();

        if (!complaint.exists) {
            res.status(404).json({ error: 'Complaint not found' });
            return;
        }

        const complaintData = complaint.data();
        console.log(complaint.data());
        await complaintRef.update({ votes: complaintData.votes + 1 });

        res.status(200).json({ message: 'Upvoted successfully' });
    } catch (error) {
        console.error('Error upvoting complaint:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const downvoteComplaint = async (req, res) => {
    const { complaintId } = req.params;
    try {
        const complaintRef = db.collection('complaints').doc(complaintId);
        const complaint = await complaintRef.get();

        if (!complaint.exists) {
            res.status(404).json({ error: 'Complaint not found' });
            return;
        }

        const complaintData = complaint.data();
        await complaintRef.update({ votes: complaintData.votes - 1 });

        res.status(200).json({ message: 'Downvoted successfully' });
    } catch (error) {
        console.error('Error downvoting complaint:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const changeStatusComplaint = async (req, res) => {
    const { complaintId } = req.params;
    const { newStatus } = req.body;
    try {
        const complaintRef = db.collection('complaints').doc(complaintId);
        const complaint = await complaintRef.get();

        if (!complaint.exists) {
            res.status(404).json({ error: 'Complaint not found' });
            return;
        }

        await complaintRef.update({ status: newStatus });

        res.status(200).json({ message: 'Status changed successfully' });
    } catch (error) {
        console.error('Error changing status of complaint:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
