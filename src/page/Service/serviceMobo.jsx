import React from "react";

const serviceMobo = () => {
  const items = [
    {
      image:
        "https://cdn.prod.website-files.com/66b0a2749f8ac3c146b191c2/66b0b02ee9974feab54aa9b4_unsplash_R-6HkET2pTU.png",

      title: "Save the Environment",
      subtitle: "HS1",
      description:
        "With electric cars, you'll reduce smog pollution around you right now and cut greenhouse gases to protect people and the planet for years to come. Future generations will thank you.",
    },
    {
      image:
        "https://cdn.prod.website-files.com/66b0a2749f8ac3c146b191c2/66b0b02de9974feab54aa8fd_Car%203.png",

      title: "Embrace Renewable Energy",
      subtitle: "HS2",
      description:
        "On average, an electric car costs less than £1.30 to drive 100 miles (based on our GoElectric 35 tariff during off-peak hours) vs. £17.16(1) for a petrol car. Save on Fuel and Maintenance Costs.",
    },
    {
      image:
        "https://cdn.prod.website-files.com/66b0a2749f8ac3c146b191c2/66b0b02ee9974feab54aa9b4_unsplash_R-6HkET2pTU.png",
      title: "Conserve Water",
      subtitle: "HS3",
      description:
        "Simply stated, electric cars are fun to drive–with quick acceleration and enviable performance. Unlike gas-powered cars, electric motors produce peak torque from a standstill, without the buildup gasoline engines require to reach maximum power.",
    },
  ];
  return (
    <div
      className="mob-work-section"
      id="service"
      style={{ backgroundColor: "black" }}
    >
      <div className="mob-work-section__scroll-container">
        {items.map((item, index) => (
          <div key={index} className="mob-work-section__item">
            <div className="mob-work-section__item-image-container">
              <img src={item.image} alt={item.heading} />
            </div>
            <div className="mob-work-section__item-pills">
              <h4 className="work-section__subtitle-style">{item.subtitle}</h4>
              <h1 className="work-section__heading-style">{item.title}</h1>
              <p className="work-section__para-style">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default serviceMobo;
