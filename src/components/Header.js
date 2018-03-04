import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <div className="navwrapper">
        <nav>
            <Link to="/">Home</Link>
            <Link to="https://github.com/nakulrathore" target="_blank">Github</Link>
            <Link to="https://www.dropbox.com/s/qi5fhidge7o1mml/Narendra-singh.pdf?dl=0" target="_blank">Resume</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </div>
);

export default Header; 