import React, { Component } from 'react'
import "./Footer.css";

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="dk-footer" className="dk-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-4 footer-container">
                                <div className="dk-footer-box-info">
                                    <a href="index.html" className="footer-logo">
                                        <img src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_960_720.png" alt="footer_logo" className="img-fluid" />
                                    </a>
                                    <p className="footer-info-text">
                                        Reference site about Lorem Ipsum.
                                    </p>
                                    <div className="footer-social-link">
                                        <h3>Follow us</h3>
                                        <ul>
                                            <li>
                                                <a href="/">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="fa fa-whatsapp"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="fa fa-youtube-play"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* End Social link */}
                                </div>
                                {/* End Footer info */}
                            </div>
                            {/* End Col */}
                            <div className="col-md-12 col-lg-8">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <div className="footer-widget footer-left-widget">
                                            <div className="section-heading">
                                                <h3>Contact Us</h3>
                                                <span className="animate-border border-black"></span>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="contact-us">
                                                        <div className="contact-icon">
                                                            <i className="fa fa-map-o" aria-hidden="true"></i>
                                                        </div>
                                                        {/* End contact Icon */}
                                                        <div className="contact-info">
                                                            <h3>Jaipur India</h3>
                                                            <p>5353 Road Avenue</p>
                                                        </div>
                                                        {/* End Contact Info */}
                                                    </div>
                                                    {/* End Contact Us */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Contact Row */}
                                        </div>
                                        {/* End Footer Widget */}
                                    </div>
                                    {/* End col */}
                                </div>
                                {/* End Row */}

                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        <div className="footer-widget footer-left-widget">
                                            <div className="section-heading">
                                                <h3>Useful Links</h3>
                                                <span className="animate-border border-black"></span>
                                            </div>
                                            <ul>
                                                <li>
                                                    <a href="/">Products</a>
                                                </li>
                                                <li>
                                                    <a href="/">Services</a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="/">Contact us</a>
                                                </li>
                                                <li>
                                                    <a href="/">About us</a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* End Footer Widget */}
                                    </div>
                                    {/* End col */}
                                </div>
                                {/* End Row */}
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Widget Row */}
                    </div>
                    {/* End Contact Container */}


                    <div className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <span>Copyright © 2019, All Right Reserved Seobin</span>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                        </div>
                        {/* End Copyright Container */}
                    </div>
                    {/* End Copyright */}
                    {/* Back to top */}
                    <div id="back-to-top" className="back-to-top">
                        <button className="btn btn-dark" title="Back to Top" style={{ display: "block" }}>
                            <i className="fa fa-angle-up"></i>
                        </button>
                    </div>
                    {/* End Back to top */}
                </footer>
            </div>
        )
    }
}

export default Footer
