import React from 'react';

const Habbit = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">Habit Tracker</h1>
            <p className="text-gray-600 mb-4">Track your daily habits and improve your productivity.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-medium text-gray-800 mb-2">Getting Started</h2>
                <p className="text-gray-500">
                    Create new habits, track your progress, and build consistency over time.
                </p>
            </div>
            <div className="mt-6">
                <h2 className="text-lg font-medium text-gray-800 mb-2">Your Habits</h2>
                <ul className="list-disc list-inside">
                    <li className="text-gray-600">Exercise</li>
                    <li className="text-gray-600">Read a book</li>
                    <li className="text-gray-600">Meditate</li>
                </ul>
                <p className="text-gray-500 mt-2">Add new habits to track your progress.</p>
            </div>
            <div className="mt-6">
                <h2 className="text-lg font-medium text-gray-800 mb-2">Track Your Progress</h2>
                <p className="text-gray-500">
                    Use the calendar to mark your completed habits and see your streaks.
                </p>
                <div className="mt-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                        Add New Habit
                    </button>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-lg font-medium text-gray-800 mb-2">Statistics</h2>
                <p className="text-gray-500">
                    View your habit statistics and track your progress over time.
                </p>
                <div className="mt-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                        View Stats
                    </button>
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-lg font-medium text-gray-800 mb-2">Tips for Success</h2>
                <p className="text-gray-500">
                    Stay consistent, set reminders, and celebrate your achievements.
                </p>

                <div className="mt-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                        Get Tips
                    </button>
                </div>

            </div>
        </div>

    );
}

export default Habbit;