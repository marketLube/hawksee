import React from "react";
import Testimonial1 from "../../assets/testimonial/testimonial.jfif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Quate from "../../assets/icon/double.svg";
import ArrowLeft from "../../assets/icon/left.svg";
import ArrowRight from "../../assets/icon/right.svg";

export default function Testimonial() {
  const testimonials = [
    {
      name: "John Doe",
      designation: "CEO, Company Name",
      quote:
        "Concepts exceeded our expectations with a beautifully designed website and insightful research that perfectly aligned with our brand. Their expertise has truly elevated our online presence. Highly recommended!",
      image: Testimonial1,
    },
    {
      name: "Jane Smith",
      designation: "Marketing Director, Another Company",
      quote:
        "Working with Concepts was a game-changer for us. Their attention to detail and innovative approach helped us reach our target audience effectively. We couldn't be happier with the results! ",
      image:
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1744369614/test1_ooiwou.jpg",
    },
    {
      name: "Alice Johnson",
      designation: "Product Manager, Tech Innovations",
      quote:
        "The team at Concepts delivered beyond our expectations. Their research and design process was thorough and insightful, leading to a product that truly resonates with our users.",
      image:
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1744369611/test6_zwsbra.jpg",
    },
    {
      name: "Michael Brown",
      designation: "Founder, Startup Inc.",
      quote:
        "Concepts provided us with a stunning website that not only looks great but also performs exceptionally well. Their expertise in digital marketing has significantly boosted our online visibility.",
      image:
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1744369612/test2_x1hzuu.jpg",
    },
    {
      name: "John Doe",
      designation: "CEO, Company Name",
      quote:
        "Concepts exceeded our expectations with a beautifully designed website and insightful research that perfectly aligned with our brand. Their expertise has truly elevated our online presence. Highly recommended!",
      image: Testimonial1,
    },
    {
      name: "Jane Smith",
      designation: "Marketing Director, Another Company",
      quote:
        "Working with Concepts was a game-changer for us. Their attention to detail and innovative approach helped us reach our target audience effectively. We couldn't be happier with the results! ",
      image:
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1744369614/test1_ooiwou.jpg",
    },
  ];

  return (
    <div className="testimonial">
      <div className="testimonial__container">
        <div className="testimonial__container__header">
          <h2>Testimonials</h2>
        </div>
        <div className="testimonial__container__content">
          <Swiper spaceBetween={50} slidesPerView={3.5}>
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial__container__content__card">
                  <div className="testimonial__container__content__card__header">
                    <div className="testimonial__container__content__card__header__image">
                      <img
                        src={testimonial.image}
                        alt={`testimonial-${index + 1}`}
                      />
                    </div>
                    <div className="testimonial__container__content__card__header__name">
                      <h3 className="testimonial__container__content__card__header__name__name">
                        {testimonial.name}
                      </h3>
                      <p className="testimonial__container__content__card__header__name__designation">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>

                  <div className="testimonial__container__content__card__body">
                    <div className="testimonial__container__content__card__body__quote">
                      <img src={Quate} alt="quote" />
                    </div>
                    <p className="testimonial__container__content__card__body__quote__text">
                      {testimonial.quote}
                      &quot;
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonial__container__content__card__body__button">
            <button className="testimonial__container__content__card__body__button__prev">
              <img src={ArrowLeft} alt="arrow-left" />
            </button>
            <button className="testimonial__container__content__card__body__button__next">
              <img src={ArrowRight} alt="arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
