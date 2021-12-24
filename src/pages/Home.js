import React from "react";
import reactDom from "react-dom";
import Countries from "../components/Countries";
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <h1>Salut mec !</h1>
            <Countries/>
        </div>
    );
};  
//Utilisable partout dans le projet

export default Home;

