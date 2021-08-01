import React, { Component } from 'react';
import Footer from '../../minor/footer/Footer';
import NavBar from '../../minor/navbar/NavBar';

export class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Footer />
            </div>
        )
    }
}

export default Home;
