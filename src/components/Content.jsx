import React from "react";

const Content = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">Page Title</h1>
            <p className="text-gray-600 mb-4">This is a sample page content.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-medium text-gray-800 mb-2">Section Title</h2>
                <p className="text-gray-500">This is a sample section content.</p>
            </div>
        </div>
    );
}
export default Content;
