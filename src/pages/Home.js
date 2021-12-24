import React from "react";
import reactDom from "react-dom";
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <h1>Salut mec !</h1>
        </div>
    );
};  
//Utilisable partout dans le projet

export default Home;

