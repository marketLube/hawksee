import React, { useState, useEffect } from "react";
import blogImage from "../../assets/Blog/blogcardimage.png"; // Make sure to import your image
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useHash } from "../Projects/useHash";
import { blogPosts } from "../../Data/blogPosts";
import { useNavigate } from "react-router-dom";

function Blogs() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isAnimate, setIsAnimate] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();
  useHash({ setIsAnimate });

  useEffect(() => {
    setIsAnimate(true);

    const handlePopState = () => {
      setIsAnimate(false);
      setScrollPosition(0);
      setIsDragging(false);
      setStartY(0);
      setActiveIndex(0);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      setIsAnimate(false);
      setScrollPosition(0);
      setIsDragging(false);
      setStartY(0);
      setActiveIndex(0);
    };
  }, []);

  const handleTouchStart = (e) => {
    if (!isAnimate) return;
    setIsDragging(true);
    setStartY(e.touches ? e.touches[0].clientY : e.clientY);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !isAnimate) return;
    const currentY = e.touches ? e.touches[0].clientY : e.clientY;
    const deltaY = startY - currentY;
    setStartY(currentY);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const progressPercentage = (scrollPosition / (window.innerHeight * 4)) * 100;

  const filters = ["All", "Marketing", "Branding", "Website", "SEO"];

  const filteredPosts =
    activeFilter === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.categories.includes(activeFilter));

  return (
    <div
      id="blogs"
      className={`blogs ${isAnimate ? "blogs--active" : ""}`}
      style={{
        height: isAnimate ? "500vh" : "0",
        backgroundColor: isAnimate ? "rgba(0, 0, 0, 0.5)" : "transparent",
        pointerEvents: isAnimate ? "auto" : "none",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
    >
      <div
        className="blogs__body"
        style={{
          transform: isAnimate
            ? `translateY(calc(-${progressPercentage}% + 0vh))`
            : "translateY(150vh)",
          pointerEvents: "auto",
        }}
      >
        <button
          className="back-button"
          onClick={() => navigate("/#blogs")}
          style={{
            borderRadius: "50%",
            background: "transparent",
            border: "1px solid white",
            cursor: "pointer",
            zIndex: 100,
            width: "40px",
            height: "40px",
          }}
          aria-label="Go back to the previous page"
        >
          <FiArrowLeft size={20} color="white" />
        </button>
        <div className="blogs__content">
          <h2 className="blogs__title" style={{ fontWeight: 700 }}>
            Blogs
          </h2>

          <div className="blogs__filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <hr />

          <div className="blogs__grid">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="blog-card"
                style={{ filter: "none" }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-card__image"
                  style={{ filter: "none" }}
                />
                <div className="blog-card__categories">
                  {post.categories.map((category, index) => (
                    <span key={index}>{category}</span>
                  ))}
                </div>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__description">
                  {post.description.slice(0, 200)}...
                </p>
                <span
                  onClick={() =>
                    navigate(`/blogs/${post.name.replace(/\s+/g, "-")}`)
                  }
                  className="blog-card__link"
                >
                  Read more <FiArrowRight />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
