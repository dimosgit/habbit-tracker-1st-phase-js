import React, { useState } from 'react';

import HabitItem from '../components/HabitItem';

// Test habits data
const testHabits = [
    { id: 1, name: "Exercise", frequency: "daily", streak: 5, completed: false },
    { id: 2, name: "Read a book", frequency: "daily", streak: 3, completed: true },
    { id: 3, name: "Meditate", frequency: "weekdays", streak: 7, completed: false },
    { id: 4, name: "Drink water", frequency: "daily", streak: 10, completed: true },
    { id: 5, name: "Journal writing", frequency: "weekly", streak: 2, completed: false }
];

const Habbit = () => {
    const [habits, setHabits] = useState(testHabits);

    const handleComplete = (id) => {
        setHabits(habits.map(habit =>
            habit.id === id ? { ...habit, completed: !habit.completed } : habit
        ));
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">Habit Tracker</h1>
            <p className="text-gray-600 mb-4">Track your daily habits and improve your productivity.</p>

            <div className="mt-6">
                <h2 className="text-lg font-medium text-gray-800 mb-2">Your Habits</h2>
                {habits.map(habit => (
                    <HabitItem
                        key={habit.id}
                        name={habit.name}
                        frequency={habit.frequency}
                        streak={habit.streak}
                        completed={habit.completed}
                        onComplete={() => handleComplete(habit.id)}
                    />
                ))}
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