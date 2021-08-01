import React, { Component } from 'react';
import "./Products.css";

export class Products extends Component {
    data = require('./Products.json');
    render() {
        return (
            <div className="row container card-row">
                {
                    this.data.map(item =>
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
        )
    }
}

export default Products
