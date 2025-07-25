import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
return (
    <>
    <Header />
    <main className="min-h-screen p-4">{children}</main>
    <Footer />
    </>
);
}

export default Layout;
