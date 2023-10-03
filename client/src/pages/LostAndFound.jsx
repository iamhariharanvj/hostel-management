import React, { useState } from 'react';

const LostAndFoundApp = () => {
    const [dummyData, setDummyData] = useState([
        {
            id: 1,
            type: 'Lost',
            name: 'Lost Phone',
            description: 'iPhone X, black color',
            location: 'Near B4',
            imageUrl: 'https://via.placeholder.com/150', // Replace with your image URL
        },
        {
            id: 2,
            type: 'Found',
            name: 'Beside Hostel Store',
            description: 'Brown leather wallet',
            location: 'Park',
            imageUrl: 'https://via.placeholder.com/150', // Replace with your image URL
        },
        // Add more dummy data as needed
    ]);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newItem, setNewItem] = useState({
        type: '',
        name: '',
        description: '',
        location: '',
        imageUrl: 'https://via.placeholder.com/150', // Replace with your image URL
    });

    const toggleAddModal = () => {
        setIsAddModalOpen(!isAddModalOpen);
    };

    const handleAddItem = () => {
        // Generate a unique ID for the new item (you can use a library like uuid)
        const newItemWithId = {
            ...newItem,
            id: Date.now(),
        };

        // Update the state with the new item
        setDummyData([...dummyData, newItemWithId]);

        // Clear the newItem object and close the modal
        setNewItem({
            type: '',
            name: '',
            description: '',
            location: '',
            imageUrl: '',
        });
        setIsAddModalOpen(false);
    };

    return (
        <div className="container mx-auto ">
            <h1 className="text-3xl font-semibold mb-4">
                Lost and Found Items
            </h1>
            <button
                onClick={toggleAddModal}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add Item
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {dummyData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white shadow-md rounded-lg p-4"
                    >
                        <h2 className="text-lg font-semibold">{item.type}</h2>
                        <p>Name: {item.name}</p>
                        <p>Description: {item.description}</p>
                        <p>Location: {item.location}</p>
                        <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="mt-2"
                        />
                    </div>
                ))}
            </div>

            {isAddModalOpen && (
                <div className="fixed inset-0  flex items-center justify-center z-50">
                    <div className="modal bg-white p-5 rounded shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Add Item</h2>
                        <input
                            type="text"
                            placeholder="Type (Lost/Found)"
                            value={newItem.type}
                            onChange={(e) =>
                                setNewItem({ ...newItem, type: e.target.value })
                            }
                            className="mb-2 p-2 border rounded"
                        />
                        <input
                            type="text"
                            placeholder="Name"
                            value={newItem.name}
                            onChange={(e) =>
                                setNewItem({ ...newItem, name: e.target.value })
                            }
                            className="mb-2 p-2 border rounded"
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            value={newItem.description}
                            onChange={(e) =>
                                setNewItem({
                                    ...newItem,
                                    description: e.target.value,
                                })
                            }
                            className="mb-2 p-2 border rounded"
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            value={newItem.location}
                            onChange={(e) =>
                                setNewItem({
                                    ...newItem,
                                    location: e.target.value,
                                })
                            }
                            className="mb-2 p-2 border rounded"
                        />
                        <input
                            type="text"
                            placeholder="Image URL"
                            value={newItem.imageUrl}
                            onChange={(e) =>
                                setNewItem({
                                    ...newItem,
                                    imageUrl: 'https://via.placeholder.com/150',
                                })
                            }
                            className="mb-4 p-2 border rounded"
                        />
                        <button
                            onClick={handleAddItem}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Add
                        </button>
                        <button
                            onClick={toggleAddModal}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LostAndFoundApp;
