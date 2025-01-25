import React from "react";

const Service = () => {
  const contentArray = [
    {
      title: "Save the Environment",
      subtitle: "HS1",
      description:
        "With electric cars, you'll reduce smog pollution around you right now and cut greenhouse gases to protect people and the planet for years to come. Future generations will thank you.",
    },
    {
      title: "Embrace Renewable Energy",
      subtitle: "HS2",
      description:
        "On average, an electric car costs less than £1.30 to drive 100 miles (based on our GoElectric 35 tariff during off-peak hours) vs. £17.16(1) for a petrol car. Save on Fuel and Maintenance Costs.",
    },
    {
      title: "Conserve Water",
      subtitle: "HS3",
      description:
        "Simply stated, electric cars are fun to drive–with quick acceleration and enviable performance. Unlike gas-powered cars, electric motors produce peak torque from a standstill, without the buildup gasoline engines require to reach maximum power.",
    },
  ];

  const images = [
    "https://cdn.prod.website-files.com/66b0a2749f8ac3c146b191c2/66b0b02ee9974feab54aa9b4_unsplash_R-6HkET2pTU.png",
    "https://cdn.prod.website-files.com/66b0a2749f8ac3c146b191c2/66b0b02de9974feab54aa8fd_Car%203.png",
    "https://cdn.prod.website-files.com/66b0a2749f8ac3c146b191c2/66b0b02ee9974feab54aa9b4_unsplash_R-6HkET2pTU.png",
  ];

  return (
    <div className="serviceMain">
      {/* <div> */}
      <div className="serviceMain__image-container">
        <div className="serviceMain__image-wrapper">
          <img
            src="https://cdn.prod.website-files.com/66b0a2749f8ac3c146b191c2/66b0b02ee9974feab54aa9b4_unsplash_R-6HkET2pTU.png"
            alt="IMGS"
          />
        </div>
      </div>
      <div className="serviceMain__text-container">
        {contentArray.map((content, index) => (
          <div className="serviceMain__content-item" key={index}>
            <h4 className="serviceMain__main-subtitle">{content.subtitle}</h4>
            <h1 className="serviceMain__main-title">{content.title}</h1>
            <p className="serviceMain__description">{content.description}</p>
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Service;
