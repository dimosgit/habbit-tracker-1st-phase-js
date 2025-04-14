import React, { useState } from 'react';

import HabitItem from '../components/HabitItem';
import HabitForm from '../components/HabitForm';

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
                    <HabitForm
                        setShowForm={setShowForm}
                        newHabitName={newHabitName}
                        setNewHabitName={setNewHabitName}
                        newHabitFrequency={newHabitFrequency}
                        setNewHabitFrequency={setNewHabitFrequency}
                        handleAddHabit={handleAddHabit}
                    />
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