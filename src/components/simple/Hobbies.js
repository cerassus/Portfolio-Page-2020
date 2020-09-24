import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import "../css/About.css";
import React from "react";
import { carousel_data } from "../const/const";

const CarouselCaption = (props) => (
    <div id="carousel-caption">
        <img alt="carousel-img" className="carousel-img" src={props.src} />
        <div className="carousel-container">
            <h2 className="carousel-title">{props.title}</h2>
            <div className="hr hr-carousel"></div>
            <div className="carousel-description">{props.desc}
            </div>
        </div>
    </div>
);

const Hobbies = () => (
    <Carousel indicators={false} interval={5000}>
        <Carousel.Item>
            <img
                className="carousel"
                src="img/hobbies/draw1.jpg"
                alt="First slide"
            />
            <Carousel.Caption>
                <CarouselCaption
                    title={carousel_data.whisky.title}
                    src={carousel_data.whisky.src}
                    desc={carousel_data.whisky.desc}
                />
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="carousel"
                src="img/hobbies/draw2.jpg"
                alt="Second slide"
            />
            <Carousel.Caption>
                <CarouselCaption
                    title={carousel_data.art.title}
                    src={carousel_data.art.src}
                    desc={carousel_data.art.desc}
                />
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="carousel"
                src="img/hobbies/draw3.png"
                alt="Third slide"
            />
            <Carousel.Caption>
                <CarouselCaption
                    title={carousel_data.travel.title}
                    src={carousel_data.travel.src}
                    desc={carousel_data.travel.desc}
                />
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)

export default Hobbies;


