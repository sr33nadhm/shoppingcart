import React, { Component } from 'react';
import Carousel from '../../minor/carousel/Carousel';
import Footer from '../../minor/footer/Footer';
import NavBar from '../../minor/navbar/NavBar';

export class Home extends Component {
    render() {
        return (
            <div>
                <NavBar for="home" />
                <Carousel />
                <Footer />
            </div>
        )
    }
}

export default Home;
