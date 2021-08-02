import React, { Component } from 'react';
import Footer from '../../minor/footer/Footer';
import NavBar from '../../minor/navbar/NavBar';

export class About extends Component {
    render() {
        return (
            <div>
                <NavBar for="about" />
                <Footer />
            </div>
        )
    }
}

export default About;
