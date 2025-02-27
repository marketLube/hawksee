import React from "react";
import { blogPosts } from "../../Data/blogPosts";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

function Blog() {
  const { name } = useParams();
  const navigate = useNavigate();

  // Find the post by URL-friendly name
  const decodedName = decodeURIComponent(name).replace(/-/g, " ");
  const currentPost = blogPosts.find((post) => post.name === decodedName);
  const currentIndex = blogPosts.findIndex((post) => post.name === decodedName);

  const handleBackClick = () => {
    navigate("/blogs"); // Navigate to the Blogs component
  };

  const handleNavigation = (direction) => {
    const newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < blogPosts.length) {
      const nextPost = blogPosts[newIndex];
      const urlFriendlyName = nextPost.name.replace(/\s+/g, "-");
      navigate(`/blogs/${urlFriendlyName}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!currentPost) {
    return <div>Blog post not found</div>;
  }

  const isFirstPost = currentIndex === 0;
  const isLastPost = currentIndex === blogPosts.length - 1;

  return (
    <>
      <button
        className="back-button"
        onClick={handleBackClick}
        style={{
          borderRadius: "50%",
          background: "transparent",
          border: "1px solid white",
          cursor: "pointer",
          zIndex: 100,
          width: "40px",
          height: "40px",
        }}
        aria-label="Go back to blogs list"
      >
        <FiArrowLeft size={20} color="white" />
      </button>
      <div className="blog" key={currentPost.name}>
        <div className="blog__container">
          <div className="blog__tags">
            {currentPost.categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>

          <h1>{currentPost.title}</h1>

          <div className="blog__image">
            <img src={currentPost.image} alt={currentPost.title} />
          </div>

          <div className="blog__content-container">
            <div className="blog__social-sidebar">
              <a href="#" className="social-link" style={{ "--index": 0 }}>
                <FaXTwitter />
              </a>
              <a href="#" className="social-link" style={{ "--index": 1 }}>
                <FaFacebookF />
              </a>
              <a href="#" className="social-link" style={{ "--index": 2 }}>
                <FaInstagram />
              </a>
              <a href="#" className="social-link" style={{ "--index": 3 }}>
                <FaYoutube />
              </a>
              <a href="#" className="social-link" style={{ "--index": 4 }}>
                <FaWhatsapp />
              </a>
            </div>

            <div className="blog__content">
              {currentPost.description.split("\n").map(
                (paragraph, index) =>
                  paragraph.trim() && (
                    <p key={index} className="blog__description">
                      {paragraph.trim()}
                    </p>
                  )
              )}
            </div>
          </div>

          <div className="blog__navigation">
            {!isFirstPost && (
              <button
                className="nav-btn prev"
                onClick={() => handleNavigation("prev")}
              >
                ← Previous
              </button>
            )}
            <div className="nav-spacer"></div>
            {!isLastPost && (
              <button
                className="nav-btn next"
                onClick={() => handleNavigation("next")}
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
