export const BirdMobo = () => {
  return (
    <section id="bird" className="birdMobo" aria-label="Bird section">
      <div className="captionMobo" aria-label="Caption for the bird section">
        <h1>
          Every Brand <br /> Needs Hawksee
        </h1>
      </div>
      <div
        className="bird-containerMobo"
        aria-label="Container for the bird image"
      >
        <img
          className="bird-imageMobo"
          alt="A stylized bird representing Hawksee"
          src={
            "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738575060/birdForMobile_ipivoa.svg"
          }
          aria-label="Stylized bird representing Hawksee"
        />
      </div>
    </section>
  );
};
