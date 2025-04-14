import React from "react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Page = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Header />
                <Content />
                <Footer />
            </div>
        </div>
    );
}
export default Page;