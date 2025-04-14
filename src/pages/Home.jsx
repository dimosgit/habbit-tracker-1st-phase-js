import React from 'react';

const Home = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">Welcome to Habit Tracker</h1>
            <p className="text-gray-600 mb-4">Track your daily habits and improve your productivity.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-medium text-gray-800 mb-2">Getting Started</h2>
                <p className="text-gray-500">
                    Create new habits, track your progress, and build consistency over time.
                </p>
            </div>
        </div>
    );
}

export default Home;