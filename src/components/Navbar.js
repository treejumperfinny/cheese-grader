import React from 'react'
import "../css/navbar.css"

function Navbar() {

    return (<>
    <nav className='navigation'>
    <a href="#home" className = "brand-name">
        CheeseRater<img src={require("./images/Brie_Lawlson.png")} alt="placeholder" className="icon" />
    </a>
    <div className="navigation-menu">
        <ul>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            
            <li>
                <a href="#new">New Encounter</a>
            </li>
            <li>
                <a href="#past">Past Lovers</a>
            </li>
        </ul>
    </div>
    </nav>
    </>
    )
}

export default Navbar;