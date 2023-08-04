import React from "react";
import testimonials from "./guests-testimonials";
import { Carousel, CarouselItem } from "react-bootstrap";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials mt-3 py-3">
      <h4 className="testimonials-title">Testimonials</h4>
      <Carousel interval={null}>
        {testimonials.map((testimonial) => (
          <CarouselItem>
            <img
              src={testimonial.image}
              alt="Person profile"
              className="carousel-img d-block"
            />
            <Carousel.Caption>
              <h5 className="name">{testimonial.name}</h5>
              <p className="rating">{testimonial.rating}</p>
              <p className="review">{testimonial.review}</p>
            </Carousel.Caption>
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  );
}

export default Testimonials;
