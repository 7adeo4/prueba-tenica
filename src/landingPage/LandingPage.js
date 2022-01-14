import * as React from 'react';
import Home from './layers/Home';
import AboutUs from './layers/AboutUs';
import Services from './layers/Services';
import Products from './layers/Products';
import Details from './layers/Details';
import Contact from './layers/Contact';
import Footer from './layers/Footer';
import './styles.css';


const LandingPage = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg fixed-top Navbar">
            <div className="container d-flex justify-content-between">
                <div>
                    <span className="navbar-brand " href="#">
                        <img src='/assets/navbar/navbar-logo.svg' />
                    </span>
                </div>
                <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link text-light" href="#home">Home</a>
                            <a class="nav-link text-light" href="#aboutUs">About Us</a>
                            <a class="nav-link text-light" href="#services">Services</a>
                            <a class="nav-link text-light" href="#products">Products</a>
                            <a class="nav-link text-light" href="#details">Details</a>
                            <a class="nav-link text-light" href="#contact">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <Home id="home"/>
        <AboutUs id="aboutUs"/>
        <Services id="services"/>
        <Products  id="products"/>
        <Details id="details"/>
        <Contact id="contact"/>
        <Footer/> 
        </>
    )
}

export default LandingPage
