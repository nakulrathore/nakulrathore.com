import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <div className="navwrapper">
        <nav>
            <Link to="/">Home</Link>
            <Link to="https://github.com/nakulrathore" target="_blank">Github</Link>
            <Link to="https://www.dropbox.com/s/nkvujnqsk47r8sg/Resume%20-%20Narendra%20Singh%20Rathore%20-Frontend.pdf?dl=0" target="_blank">Resume</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </div>
);

export default Header; 