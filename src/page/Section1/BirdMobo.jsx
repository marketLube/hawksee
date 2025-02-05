import { Paragraph } from "../Section2/Paragraph";

export const BirdMobo = ({ isTesterHundered, isTesterVisible }) => {
  const style = {
    opacity: !isTesterHundered ? "1" : "0",
    transition: "all .5s",
    transform: isTesterHundered ? "translateY(10rem)" : "translateY(0)",
  };

  return (
    <section id="bird" className="birdMobo" aria-label="Bird section">
      <div className="captionMobo" aria-label="Caption for the bird section">
        <h1>
          Every Brand <br /> Needs Hawksee
        </h1>
      </div>

      <img
        style={
          !isTesterHundered
            ? {
                transform: "scale(20) translate(8rem, -3rem)",
                transition: "transform 1.3s cubic-bezier(.73,.58,.83,.67)",
              }
            : isTesterVisible
            ? {
                transform: "scale(1) translate(0, 0)",
                transition: "transform .5s cubic-bezier(0,.87,.63,.85)",
              }
            : {}
        }
        className="bird-imageMobo"
        alt="A stylized bird representing Hawksee"
        src={
          "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738575060/birdForMobile_ipivoa.svg"
        }
        aria-label="Stylized bird representing Hawksee"
      />

      <Paragraph
        aria-label="Paragraph section"
        isTesterHundered={isTesterHundered}
        style={style}
      />
    </section>
  );
};
