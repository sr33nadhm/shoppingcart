import React, { Component } from 'react';
import Footer from '../../minor/footer/Footer';
import NavBar from '../../minor/navbar/NavBar';
import Products from '../../major/products/Products';

export class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Products />
                <Footer />
            </div>
        )
    }
}

export default Home;
