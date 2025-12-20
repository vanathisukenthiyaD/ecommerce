import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './home.css'
import { Link } from "react-router-dom";


const Home = () => {  
      return(
       
        <div>
          <section className="home">
          <h1><Link to="/product">Visit our shop</Link></h1>
          <p>Explore our exquisite collection of jewellery online with 
            stunning designs.</p>
            </section>
        </div>

     
      );
}       
export default Home;