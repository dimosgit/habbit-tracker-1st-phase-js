import React from "react";

function HabitForm({
    setShowForm,
    newHabitName,
    setNewHabitName,
    newHabitFrequency,
    setNewHabitFrequency,
    handleAddHabit
}) {
    return (
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
    );
}

export default HabitForm;