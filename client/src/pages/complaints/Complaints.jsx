import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComplaintForm from './ComplaintForm';

const Complaints = () => {
    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [sortByVotes, setSortByVotes] = useState(false);
    const [groupByCategory, setGroupByCategory] = useState(false);

    useEffect(() => {
        axios
            .get(
                'https://hostel-management-v2.onrender.com/students/complaints/get',
            )
            .then((response) => {
                setComplaints(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching complaints:', error);
                setLoading(false);
            });
    }, []);

    const handleCreateFormToggle = () => {
        setShowCreateForm(!showCreateForm);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowCreateForm(false);
    };

    const handleUpvote = (complaintId) => {
        const upvotedComplaints =
            JSON.parse(localStorage.getItem('upvotedComplaints')) || [];

        if (upvotedComplaints.includes(complaintId)) {
            alert('You have already upvoted this complaint.');
            return;
        }

        axios
            .post(
                `https://hostel-management-v2.onrender.com/students/complaints/${complaintId}/upvote`,
            )
            .then((response) => {
                if (response.status === 200) {
                    const updatedComplaints = complaints.map((complaint) => {
                        if (complaint.id === complaintId) {
                            return { ...complaint, votes: complaint.votes + 1 };
                        }
                        return complaint;
                    });
                    setComplaints(updatedComplaints);

                    upvotedComplaints.push(complaintId);
                    localStorage.setItem(
                        'upvotedComplaints',
                        JSON.stringify(upvotedComplaints),
                    );
                }
            })
            .catch((error) => {
                console.error('Error upvoting complaint:', error);
            });
    };

    const handleDownvote = (complaintId) => {
        const downvotedComplaints =
            JSON.parse(localStorage.getItem('downvotedComplaints')) || [];

        if (downvotedComplaints.includes(complaintId)) {
            alert('You have already downvoted this complaint.');
            return;
        }

        axios
            .post(
                `https://hostel-management-v2.onrender.com/students/complaints/${complaintId}/downvote`,
            )
            .then((response) => {
                if (response.status === 200) {
                    const updatedComplaints = complaints.map((complaint) => {
                        if (complaint.id === complaintId) {
                            return { ...complaint, votes: complaint.votes - 1 };
                        }
                        return complaint;
                    });
                    setComplaints(updatedComplaints);

                    downvotedComplaints.push(complaintId);
                    localStorage.setItem(
                        'downvotedComplaints',
                        JSON.stringify(downvotedComplaints),
                    );
                }
            })
            .catch((error) => {
                console.error('Error downvoting complaint:', error);
            });
    };

    const toggleSortByVotes = () => {
        setSortByVotes(!sortByVotes);
    };

    const toggleGroupByCategory = () => {
        setGroupByCategory(!groupByCategory);
    };

    const sortedComplaints = sortByVotes
        ? [...complaints].sort((a, b) => b.votes - a.votes)
        : complaints;

    const groupedComplaints = groupByCategory
        ? sortedComplaints.reduce((groups, complaint) => {
              const category = complaint.category;
              groups[category] = groups[category] || [];
              groups[category].push(complaint);
              return groups;
          }, {})
        : null;

    if (loading) {
        return <div>Loading...</div>;
    }

    const onCreateComplaint = async (complaintData) => {
        try {
            const response = await axios.post(
                'https://hostel-management-v2.onrender.com/students/complaints/create',
                complaintData,
            );
            if (response.status === 201) {
                console.log('Complaint created successfully:', response.data);
                // You can handle success actions here, such as updating the UI or displaying a success message.
            }
        } catch (error) {
            console.error('Error creating complaint:', error);
            // Handle error scenarios, e.g., display an error message.
        }
    };

    return (
        <div>
            <div className="mb-4">
                <button
                    onClick={toggleSortByVotes}
                    className={`bg-${
                        sortByVotes ? 'blue-600' : 'blue-500'
                    } hover:bg-${
                        sortByVotes ? 'blue-700' : 'blue-600'
                    } text-white px-4 py-2 rounded mr-4`}
                >
                    Sort by Votes
                </button>
                <button
                    onClick={toggleGroupByCategory}
                    className={`bg-${
                        groupByCategory ? 'green-600' : 'green-500'
                    } hover:bg-${
                        groupByCategory ? 'green-700' : 'green-600'
                    } text-white px-4 py-2 rounded`}
                >
                    Group by Category
                </button>
            </div>
            {groupByCategory ? (
                <div>
                    {Object.keys(groupedComplaints).map((category) => (
                        <div key={category}>
                            <h2 className="text-xl font-semibold mb-2">
                                {category}
                            </h2>
                            {groupedComplaints[category].map((complaint) => (
                                <div
                                    key={complaint.id}
                                    className="p-4 border mb-2"
                                >
                                    <h3>{complaint.title}</h3>
                                    <p>{complaint.description}</p>
                                    <p>Status: {complaint.status}</p>
                                    <div className="mt-2">
                                        <p>{complaint.votes}</p>
                                        <button
                                            onClick={() =>
                                                handleUpvote(complaint.id)
                                            }
                                            className="mr-2"
                                        >
                                            Upvote
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    {sortedComplaints.map((complaint) => (
                        <div key={complaint.id} className="p-4 border mb-2">
                            <h3>{complaint.title}</h3>
                            <p>{complaint.description}</p>
                            <p>Status: {complaint.status}</p>
                            <div className="mt-2">
                                <p>{complaint.votes}</p>
                                <button
                                    onClick={() => handleUpvote(complaint.id)}
                                    className="mr-2"
                                >
                                    Upvote
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="fixed bottom-4 right-4">
                <button
                    onClick={handleCreateFormToggle}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
                >
                    {showCreateForm ? '-' : '+'}
                </button>
            </div>
            <div
                className={`${
                    showCreateForm
                        ? 'fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50 transition-opacity'
                        : 'hidden'
                }`}
            >
                <ComplaintForm
                    onCreateComplaint={onCreateComplaint}
                    onClose={handleSubmit}
                    categories={['Food', 'Infrastructure', 'Water']}
                />
            </div>
        </div>
    );
};

export default Complaints;
