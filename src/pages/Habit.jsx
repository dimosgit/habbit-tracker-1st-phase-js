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

    const [newHabitName, setNewHabitName] = useState('');
    const [newHabitFrequency, setNewHabitFrequency] = useState('daily');
    const [showForm, setShowForm] = useState(false);

    const handleAddHabit = (e) => {
        e.preventDefault();
        if (!newHabitName.trim()) return;

        const newHabit = {
            id: habits.length + 1,
            name: newHabitName,
            frequency: newHabitFrequency,
            streak: 0,
            completed: false
        };

        setHabits([...habits, newHabit]);
        setNewHabitName('');
        setShowForm(false);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">Habit Tracker</h1>
            <p className="text-gray-600 mb-4">Track your daily habits and improve your productivity.</p>

            <div className="mt-6">
                <h2 className="text-lg font-medium text-gray-800 mb-2">Your Habits</h2>
                {/* Display how many are completed for today: */}
                <p className="text-gray-500 mb-4">
                    You have completed {habits.filter(habit => habit.completed).length} out of {habits.length} habits today.
                </p>
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

                {showForm ? (
                    <form onSubmit={handleAddHabit} className="mt-4 p-4 border border-gray-200 rounded-lg">
                        <h3 className="text-md font-medium mb-2">Add New Habit</h3>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm mb-1">Habit Name</label>
                            <input
                                type="text"
                                value={newHabitName}
                                onChange={(e) => setNewHabitName(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700"
                                placeholder="e.g., Drink water"
                                required
                            />
                        </div>
                        <div className="mb-3 text-gray-800">
                            <label className="block text-gray-700 text-sm mb-1">Frequency</label>
                            <select
                                value={newHabitFrequency}
                                onChange={(e) => setNewHabitFrequency(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            >
                                <option value="daily">Daily</option>
                                <option value="weekdays">Weekdays</option>
                                <option value="weekly">Weekly</option>
                            </select>
                        </div>
                        <div className="flex gap-2">
                            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                                Save Habit
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="mt-4">
                        <button
                            onClick={() => setShowForm(true)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                        >
                            Add New Habit
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Habbit;