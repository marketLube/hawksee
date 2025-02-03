function RightScroll({ refs = null, img = null }) {
  return (
    <article
      className="about-scroll-container-right-content"
      ref={refs}
      aria-label="Right scroll content container"
    >
      <div
        className="img-container"
        aria-label="Image container for about section"
      >
        <img
          src={img}
          alt="About section image"
          aria-label="About section image"
        />
      </div>
    </article>
  );
}

export default RightScroll;
