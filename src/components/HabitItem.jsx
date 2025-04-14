import React from "react";

function Habbit({ name, frequency, streak, completed, onComplete }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-200">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium py-1 px-2 rounded">{streak} days</span>
            </div>
            <div className="mt-2">
                <p className="text-gray-600 text-sm">Frequency: {frequency || 'Daily'}</p>
                <div className="mt-3 flex items-center">
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={onComplete}
                        id={`habit-${name}`}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`habit-${name}`} className="ml-2 text-sm text-gray-700">
                        {completed ? 'Completed' : 'Mark as complete'}
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Habbit;
