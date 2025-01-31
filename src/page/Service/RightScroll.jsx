function RightScroll({ refs = null, img = null }) {
  return (
    <article className="about-scroll-container-right-content" ref={refs}>
      <div className="img-container">
        <img src={img} alt="about" />
      </div>
    </article>
  );
}

export default RightScroll;
