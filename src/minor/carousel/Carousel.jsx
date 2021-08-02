import React, { Component } from 'react';
import "./Carousel.css";

export class Carousel extends Component {
    render() {
        return (
            <div className="slide-container">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 slide-pic" src="https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 slide-pic" src="https://images.unsplash.com/photo-1535408913330-a71d0a3e29ba" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 slide-pic" src="https://images.unsplash.com/photo-1467810563316-b5476525c0f9" alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 slide-pic" src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg" alt="Fourth slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Carousel
