import React from 'react';

const Stats = () => {
    // Example data - you would replace this with real data from your app
    const habitStats = [
        { name: 'Morning Workout', completed: 15, streak: 5, completion: 75 },
        { name: 'Reading', completed: 20, streak: 12, completion: 90 },
        { name: 'Meditation', completed: 8, streak: 3, completion: 40 }
    ];

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h1 className="text-2xl font-bold text-blue-700 mb-4">Your Habit Statistics</h1>
            <p className="text-gray-700 mb-6">Track your progress and consistency over time.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-100 p-4 rounded-lg text-center shadow-sm border border-blue-200">
                    <h3 className="text-lg font-medium text-gray-800">Total Habits</h3>
                    <p className="text-3xl font-bold text-blue-700">{habitStats.length}</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg text-center shadow-sm border border-green-200">
                    <h3 className="text-lg font-medium text-gray-800">Completed Tasks</h3>
                    <p className="text-3xl font-bold text-green-700">
                        {habitStats.reduce((sum, habit) => sum + habit.completed, 0)}
                    </p>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg text-center shadow-sm border border-purple-200">
                    <h3 className="text-lg font-medium text-gray-800">Avg. Completion</h3>
                    <p className="text-3xl font-bold text-purple-700">
                        {Math.round(habitStats.reduce((sum, habit) => sum + habit.completion, 0) / habitStats.length)}%
                    </p>
                </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-4">Habit Breakdown</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200 text-left font-semibold text-gray-700">Habit Name</th>
                            <th className="py-2 px-4 border-b border-gray-200 text-left font-semibold text-gray-700">Completed</th>
                            <th className="py-2 px-4 border-b border-gray-200 text-left font-semibold text-gray-700">Current Streak</th>
                            <th className="py-2 px-4 border-b border-gray-200 text-left font-semibold text-gray-700">Completion Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {habitStats.map((habit, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{habit.name}</td>
                                <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{habit.completed} times</td>
                                <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{habit.streak} days</td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className="bg-blue-700 h-2.5 rounded-full"
                                            style={{ width: `${habit.completion}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-sm text-gray-700 font-medium">{habit.completion}%</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Stats;