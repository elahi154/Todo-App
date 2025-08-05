import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoCreate } from "react-icons/io5";

const Todo = () => {
    const [initial, setInitial] = useState("");
    const [data, setData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    const getInput = (e) => setInitial(e.target.value);

    const getVal = () => {
        if (initial.trim() !== "") {
            setData([...data, initial]);
            setInitial("");
        }
    };

    const deleteTask = (index) => {
        setData(data.filter((_, id) => id !== index));
    };

    const updateTask = (index) => {
        setEditIndex(index);
        setEditValue(data[index]);
    };

    const saveTask = (index) => {
        if (editValue.trim() !== "") {
            let updatedData = [...data];
            updatedData[index] = editValue;
            setData(updatedData);
        }
        setEditIndex(null);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 pt-24 px-4">
            <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">Todo List</h1>
                
                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        placeholder="Enter your todos..."
                        value={initial}
                        onChange={getInput}
                        className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-700 text-black dark:text-white"
                    />
                    <button
                        onClick={getVal}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Add
                    </button>
                </div>

                <div className="space-y-3">
                    {data.map((currVal, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center bg-gray-200 dark:bg-gray-700 p-3 rounded-lg shadow-sm"
                        >
                            {editIndex === index ? (
                                <input
                                    type="text"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                    className="w-full px-2 py-1 border rounded-md focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-600 text-black dark:text-white"
                                />
                            ) : (
                                <h1 className="text-gray-700 dark:text-white">{currVal}</h1>
                            )}

                            {editIndex === index ? (
                                <button
                                    onClick={() => saveTask(index)}
                                    className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition ml-2"
                                >
                                    Save
                                </button>
                            ) : (
                                <IoCreate
                                    onClick={() => updateTask(index)}
                                    className="text-blue-500 cursor-pointer hover:text-blue-700 transition ml-2"
                                    size={24}
                                />
                            )}

                            <MdDelete
                                onClick={() => deleteTask(index)}
                                className="text-red-500 cursor-pointer hover:text-red-700 transition ml-2"
                                size={24}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Todo;
