import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenidos</h1>

      <Link to="home/:id">
        <button>Click para ingresar</button>
      </Link>
    </div>
  );
};

export default Home;
