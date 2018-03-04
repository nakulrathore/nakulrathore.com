import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Header from './components/Header';
import Container from './components/Container';
import './App.css'



const App = () => (
    <div className="Container">
        <div className="Center">
            <Router>
                <div>
                    <Header/>
                    <Container/>
                </div>
            </Router>
        </div>
    </div>
);


export default App;