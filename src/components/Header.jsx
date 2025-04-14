import React from "react";

const Header = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md rounded-lg p-4 mb-8">
            <ul className="flex space-x-6 justify-center">
                <li>
                    <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">Home</a>
                </li>
                <li>
                    <a href="/habbit" className="text-blue-600 hover:text-blue-800 font-medium">Habbit</a>
                </li>
                <li>
                    <a href="/stats" className="text-blue-600 hover:text-blue-800 font-medium">Stats</a>
                </li>
            </ul>
        </nav>
    )
}
export default Header;