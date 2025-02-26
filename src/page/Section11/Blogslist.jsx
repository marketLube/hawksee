import React from "react";
import cardimage from "../../assets/Blog/blogcardimage.png";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      image: `${cardimage}`,
      categories: ["Marketing", "Branding"],
      title: "Digital Marketing during Lockdown!",
      description:
        "Digital marketing sector, a new marketing strategy has witnessed a steady growth in its graph",
    },
    {
      id: 2,
      image: `${cardimage}`,
      categories: ["Marketing", "Branding"],
      title: "Digital Marketing during Lockdown!",
      description:
        "Digital marketing sector, a new marketing strategy has witnessed a steady growth in its graph",
    },
    {
      id: 3,
      image: `${cardimage}`,
      categories: ["Marketing", "Branding"],
      title: "Digital Marketing during Lockdown!",
      description:
        "Digital marketing sector, a new marketing strategy has witnessed a steady growth in its graph",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="blog-section">
      <h2 className="blog-section__title">Our Blogs</h2>
      <div className="blog-section__grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-card__image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-card__content">
              <div className="blog-card__categories">
                {post.categories.map((category, index) => (
                  <span key={index}>{category}</span>
                ))}
              </div>
              <h3 className="blog-card__title">{post.title}</h3>
              <p className="blog-card__description">{post.description}</p>
              <a href="#" className="blog-card__link">
                Read more
              </a>
            </div>
          </div>
        ))}
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
