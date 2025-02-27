import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

import { blogPosts } from "../../Data/blogPosts";

function Blog() {
  const navigate = useNavigate();

  return (
    <div className="blog-section" id="blogs">
      <h2 className="blog-section__title">Our Blogs</h2>
      <div className="blog-section__grid">
        {blogPosts.slice(0, 3).map((post) => (
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
              <p className="blog-card__description">
                {`${post.description.slice(0, 200)}...`}
              </p>
              <div className="blog-card__footer">
                <span
                  onClick={() =>
                    navigate(`/blogs/${post.name.replace(/\s+/g, "-")}`)
                  }
                  className="blog-card__link"
                >
                  Read more
                </span>
              </div>
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
