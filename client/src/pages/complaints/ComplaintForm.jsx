import { useState } from 'react';

const ComplaintForm = ({ onCreateComplaint, categories, onClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '', // Use an empty string as the initial category value
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateComplaint(formData);
        setFormData({ title: '', description: '', category: '' }); // Reset the form data
        onClose(); // Close the form after submission
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="w-1/2 mx-auto">
            <div className="flex justify-between items-center">
                <h2>Create a New Complaint</h2>
                <button onClick={onClose} className="text-red-500 font-bold">
                    X
                </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    required
                />
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    required
                >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Create Complaint
                </button>
            </form>
        </div>
    );
};

export default ComplaintForm;
