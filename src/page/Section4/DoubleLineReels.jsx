import React from "react";
import { Button } from "../../components/Button";
import { FiArrowUpRight } from "react-icons/fi";

export const DoubleLineReels = () => {
  const logos = Array.from({ length: 15 }, (_, i) => `${i + 1}`);
  const logoss = Array.from({ length: 15 }, (_, i) => `${i + 1}`);

  return (
    // <div>
    //   <p>Loved by users from forward-thinking companies</p>
    <section id="works" className="logos">
      {/* <p className="logos-pp">Loved by users from forward-thinking companies</p> */}
      <h1 className="logos-title"> ل ا م ع أ ل ا</h1>
      <div className="logos-rot">
        <div className="logo-slide">
          {/* Render two sets of logos for seamless looping */}
          {logos.map((logo, index) => (
            <div key={`logo-${index}`}>{logo}</div>
          ))}
          {logos.map((logo, index) => (
            <div key={`logo-duplicate-${index}`}>{logo}</div>
          ))}
          {logos.map((logo, index) => (
            <div key={`logo-duplicate-${index}`}>{logo}</div>
          ))}
          {logos.map((logo, index) => (
            <div key={`logo-duplicate-${index}`}>{logo}</div>
          ))}
          {logos.map((logo, index) => (
            <div key={`logo-duplicate-${index}`}>{logo}</div>
          ))}
        </div>
        <div className="logo-slide reverse">
          {/* Render two sets of logos for seamless looping */}
          {logoss.map((logo, index) => (
            <div key={`logos-${index}`}>{logo}</div>
          ))}
          {logoss.map((logo, index) => (
            <div key={`logos-duplicate-${index}`}>{logo}</div>
          ))}
          {logoss.map((logo, index) => (
            <div key={`logos-duplicate-${index}`}>{logo}</div>
          ))}
          {logoss.map((logo, index) => (
            <div key={`logos-duplicate-${index}`}>{logo}</div>
          ))}
          {logoss.map((logo, index) => (
            <div key={`logos-duplicate-${index}`}>{logo}</div>
          ))}
        </div>
      </div>

      <div className="buttondiv">
        <Button>
          View All <FiArrowUpRight />{" "}
        </Button>
      </div>
    </section>
  );
};
