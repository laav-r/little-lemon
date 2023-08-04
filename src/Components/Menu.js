import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Menu() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <ul>
                    <li>Menu item #1</li>
                    <li>Menu item #2</li>
                    <li>Menu item #3</li>
                    <li>Menu item #4</li>
                    <li>Menu item #5</li>
                </ul>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Menu;