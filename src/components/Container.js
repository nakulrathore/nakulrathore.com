import React from "react";
import { Route} from "react-router-dom";
import Home from './ContainerComponents/Home';
import About from './ContainerComponents/About';



const Container = () => (
    <div className="cont">
        <div>
            <Route exact="exact" path="/" component={Home} />
            <Route path="/contact" component={About} />
        </div>
    </div>
);

export default Container; 