import React, { Component } from 'react';
import Footer from '../../minor/footer/Footer';
import NavBar from '../../minor/navbar/NavBar';
import "./Products.css";
var data = require('./Products.json');

export class Products extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="row container card-row">
                    {
                        data.map(item =>
                        (<div className="card" key={item.id}>
                            <img className="card-img-top" src={item.image} alt="Cardcap" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Price: {item.price}</li>
                            </ul>
                            <div className="card-body">
                                <a href="/" className="card-link">Card link</a>
                                <a href="/" className="card-link">Another link</a>
                            </div>
                        </div>))
                    }
                </div>
                <Footer />
            </div>
        )
    }
}

export default Products
