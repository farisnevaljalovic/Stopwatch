import React from 'react';
import style from "./Navbar.module.css";
import Watch from "../Watch/Watch";

function Navbar() {
    return (
        <nav className={style.navbar}>
            <h2>Watch</h2>
            <Watch />
        </nav>
    )
}

export default Navbar
