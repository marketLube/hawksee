import React, { useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import Quate from "../../assets/icon/double.svg";
import ArrowLeft from "../../assets/icon/left.svg";
import ArrowRight from "../../assets/icon/right.svg";

export default function Testimonial() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const testimonials = [
    {
      name: "Roshini",
      designation: "Prime Skin and Laser",
      quote:
        "Working with Hawksee Digital Solutions has been a game-changer for our online presence. Their expertise in SEO and website design helped us build a robust online platform for Dr. Roshini's clinic, attracting more clients and boosting visibility. We're thrilled with the results and would highly recommend their services to anyone looking to enhance their digital footprint.",
      image:
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1746451963/Capture_mkym7b.jpg",
    },
    {
      name: "Mufthi",
      designation: "Little Gym",
      quote:
        "The team at Hawksee truly transformed the way we approach content. Their video production services were exceptional, creating engaging and professional videos that showcased Little Gym in the best possible light. Their attention to detail and creativity helped us connect with our audience in new and exciting ways. A big thanks to Hawksee for their outstanding work!",
      image:
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1746451963/435700088_10161261429140675_2188708708538902776_n_dqunnh.jpg",
    },
    {
      name: "Uthara Ramakrishnan",
      designation: "Personal Branding",
      quote:
        "Hawksee has been an integral part of building my personal brand. Their approach to content creation and strategy was tailored to highlight my strengths and values. The team's expertise in social media and branding has opened new doors for me professionally, and I'm excited about the future. Thanks to Hawksee for making my vision come to life!",
      image:
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1746451963/Utharamob_djbwk2.jpg",
    }
  ];


  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="testimonial">
      <div className="testimonial__container">
        <div className="testimonial__container__header">
          <h2>Testimonials</h2>
        </div>
        <div className="testimonial__container__content">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50
              },
              1440: {
                slidesPerView: 2.8,
                spaceBetween: 50
              },
              1600: {
                slidesPerView: 3.5,
                spaceBetween: 50
              }
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
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
                      <img src={Quate} alt="quote" className="quate" />
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
            <button
              ref={prevRef}
              className="testimonial__container__content__card__body__button__prev"
            >
              <img src={ArrowLeft} alt="arrow-left" />
            </button>
            <button
              ref={nextRef}
              className="testimonial__container__content__card__body__button__next"
            >
              <img src={ArrowRight} alt="arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
