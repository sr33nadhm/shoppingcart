import React, { Component } from 'react';
import "./Products.css";
import Footer from '../../minor/footer/Footer';
import NavBar from '../../minor/navbar/NavBar';
var data = require('./ProductsList.json');

export class Products extends Component {
    render() {
        return (
            <div>
                <NavBar for="products" />
                <div className="row container card-row">
                    {
                        data.map(item =>
                        (<div className="card" key={item.id}>
                            <img className="card-img-top card-fit" src={item.image} alt="Cardcap" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Price: {item.price}</li>
                            </ul>
                            <div className="card-body card-buttons">
                                <button className="btn btn-success">Add to Cart</button>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>))
                    }
                </div>
                <Footer />
            </div>
        )
    }
}

export default Products;
