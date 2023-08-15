import React from "react";
import testimonials from "../guests-testimonials";
import { Carousel, CarouselItem } from "react-bootstrap";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <section className={`${styles.testimonials} mt-3 py-3`}>
      <h4 className={styles.title}>Testimonials</h4>
      <Carousel interval={null}>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id}>
            <img
              src={testimonial.image}
              alt="Person profile"
              className={`${styles.image} d-block`}
            />
            <Carousel.Caption>
              <h5 className={styles.name}>{testimonial.name}</h5>
              <p className={styles.rating}>{testimonial.rating}</p>
              <p className={styles.review}>{testimonial.review}</p>
            </Carousel.Caption>
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  );
}

export default Testimonials;
