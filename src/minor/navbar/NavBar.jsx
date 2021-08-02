import React, { Component } from 'react'
import "./NavBar.css";

export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className={this.props["for"] === "home" ? "navbar navbar-expand-lg navbar-dark bg-clear" : "navbar navbar-expand-lg navbar-dark bg-custom"}>
                    <a className="navbar-brand" href="/">Crackers</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className={this.props["for"] === "home" ? "nav-item active" : "nav-item"} >
                                <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                            </li>
                            <li className={this.props["for"] === "products" ? "nav-item active" : "nav-item"}>
                                <a className="nav-link" href="/products">Products</a>
                            </li>
                            <li className={this.props["for"] === "services" ? "nav-item active" : "nav-item"}>
                                <a className="nav-link" href="/services">Services</a>
                            </li>
                            <li className={this.props["for"] === "about" ? "nav-item active" : "nav-item"}>
                                <a className="nav-link" href="/about">About Us</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className={this.props["for"] === "cart" ? "nav-item active" : "nav-item"} >
                                <a className="nav-link" href="/">Cart <span className="sr-only"></span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;
