
// export default Blog;
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { blogPosts } from "../../Data/blogPosts";

function Blog() {
  const navigate = useNavigate();

  return (
    <div className="blog-section" id="blogs">
      <h2 className="blog-section__title">Thoughts & Updates</h2>

      <div className="blog-section__grid">
        <Swiper
          slidesPerView={2}
          spaceBetween={2}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          touchRatio={1}
          touchAngle={30}
          breakpoints={{
            320: {  // smallPhone
              slidesPerView: 2,
              spaceBetween: 2,
              centeredSlides: true,
            },
            576: {  // phone
              slidesPerView: 2,
              spaceBetween: 2,
              centeredSlides: true,
            },
            768: {  // tablets
              slidesPerView: 2,
              spaceBetween: 15,
              centeredSlides: true,
            },
            992: {  // bigTablets
              slidesPerView: 3,
              spaceBetween: 10,
              centeredSlides: true,

            },
            1200: { // desktop
              slidesPerView: 2,
              spaceBetween: 10,
              centeredSlides: true,

            },
            1400: { // bigDesktop
              slidesPerView: 2,
              spaceBetween: 10,
              centeredSlides: true,

            }
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id} aria-label={`Blog post ${post.title}`} style={{width: '207px'}}>
              <div className="blog-card">
                <div
                  className="blog-card__image"
                  style={{
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.0) 55.67%, rgba(0, 0, 0, 0.35) 84.07%), url(${post.image})`,
                  }}
                >
                  <div className="overlay-content">
                    <div className="blog-card__category">
                      {post.categories.map((category, index) => (
                        <React.Fragment key={index}>
                          {category}
                          {index < post.categories.length - 1 && <span className="separator">|</span>}
                        </React.Fragment>
                      ))}
                    </div>
                    <h3 className="blog-card__title" style={{ fontWeight: '400',textAlign: 'start' ,marginLeft: '0',marginTop:'-3rem'}}>{post.title}</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="blog-section__footer">
        <div aria-label="Button section">
          <Button
            onClick={() => navigate("/blogs")}
            aria-label="View all button"
          >
            View All <FiArrowUpRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Blog;