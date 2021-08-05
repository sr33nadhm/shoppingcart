import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], total: 0 };
    }
    render() {
        return (
            <div>
                <nav className={this.props["for"] === "home" ? "navbar navbar-expand-lg navbar-dark bg-clear" : "navbar navbar-expand-lg navbar-dark bg-custom"}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/" className="navbar-brand">Crackers</Link>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className={this.props["for"] === "home" ? "nav-item active" : "nav-item"} >
                                <Link to="/" className="nav-link">Home <span className="sr-only"></span></Link>
                            </li>
                            <li className={this.props["for"] === "products" ? "nav-item active" : "nav-item"}>
                                <Link to="/products" className="nav-link">Products</Link>
                            </li>
                            <li className={this.props["for"] === "services" ? "nav-item active" : "nav-item"}>
                                <Link to="/services" className="nav-link">Services</Link>
                            </li>
                            <li className={this.props["for"] === "about" ? "nav-item active" : "nav-item"}>
                                <Link to="/about" className="nav-link">About Us</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className={this.props["for"] === "cart" ? "nav-item active" : "nav-item"} >
                                <Link to="/" className="nav-link">Cart <span className="sr-only"></span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;
