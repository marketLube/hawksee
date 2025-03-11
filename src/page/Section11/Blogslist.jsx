
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { blogPosts } from "../../Data/blogPosts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FreeMode, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowUpRight } from "react-icons/fi";
import React from "react";
import { Button } from "../../components/Button";

function Blog() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Add window resize listener to update slide widths dynamically
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate slide width based on current window width
  const getSlideWidth = () => {
    if (windowWidth < 576) return "95%"; // smallPhone
    if (windowWidth < 768) return "55%"; // phone
    if (windowWidth < 992) return "50%"; // tablets
    if (windowWidth < 1200) return "45%"; // bigTablets
    if (windowWidth < 1400) return "40%"; // desktop
    return "35%"; // bigDesktop
  };

  // Create duplicated posts if there are fewer than 4
  // This ensures smooth looping with small datasets
  const getSlidesData = () => {
    if (blogPosts.length >= 4) return blogPosts;

    // Create duplicates with unique keys for React
    const duplicatedPosts = [...blogPosts];
    const neededCopies = Math.ceil(4 / blogPosts.length) - 1;

    for (let i = 0; i < neededCopies; i++) {
      blogPosts.forEach((post, index) => {
        duplicatedPosts.push({
          ...post,
          id: `${post.id}-copy-${i}-${index}` // Ensure unique key
        });
      });
    }

    return duplicatedPosts;
  };

  const slidesData = getSlidesData();

  return (
    <div className="blog-section" id="blogs">
      <h2 className="blog-section__title">Thoughts & Updates</h2>
<div className="gradient-left"></div>
<div className="gradient-right"></div>

      <div className="blog-section__grid">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={0}
          loop={true}
          loopedSlides={slidesData.length > 3 ? 3 : slidesData.length} // Adjust looped slides
          initialSlide={0}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={700}
          touchRatio={1}
          touchAngle={30}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
          wrapperClass="swiper-wrapper"
          cssMode={false}
          loopFillGroupWithBlank={true}
          loopAdditionalSlides={slidesData.length > 3 ? 2 : slidesData.length}
          centeredSlidesBounds={false}
          // grabCursor={true}
          watchSlidesProgress={true}
          observer={true}
          observeParents={true}
          resistance={true}
          resistanceRatio={0.85}
        >
          {slidesData.map((post) => (
            <SwiperSlide
              key={post.id}
              aria-label={`Blog post ${post.title}`}
              style={{
                width: getSlideWidth(),
                margin: "0 10px",
              }}
              onClick={() => navigate(`/blogs/${post.name}`)}
            >
              <div className="blog-card">
                <div
                  className="blog-card__image"
                  style={{
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.0) 55.67%, rgba(0, 0, 0, 0.35) 84.07%), url(${post.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="overlay-content">
                    <div className="blog-card__category">
                      {post.categories.map((category, index) => (
                        <React.Fragment key={index}>
                          {category}
                          {index < post.categories.length - 1 && (
                            <span className="separator">|</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                    <h3
                      className="blog-card__title"
                      style={{
                        fontWeight: "400",
                        textAlign: "start",
                        marginLeft: "0",
                        marginTop: "-3rem",
                      }}
                    >
                      {post.title}
                    </h3>
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