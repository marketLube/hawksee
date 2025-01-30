import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LeftScroll from "./LeftScroll";
import RightScroll from "./RightScroll";

const contentOne = {
  title: "The Powerful Team",
  description:
    "Skymark Education’s remarkable success is deeply rooted in the teamwork, dedication, and passion of its members. Each individual contributes their unique expertise and energy, ensuring that students receive unparalleled guidance on their journey to study abroad. Our collective commitment to empowering students and helping them achieve their dreams fosters an environment of excellence. Together, we transform aspirations into achievements, driven by a shared vision of making global education accessible and impactful.",
};
const contentTwo = {
  title: "Five Thousand And Counting",
  description:
    "At Skymark Education, we take immense pride in having guided over 5,000 students toward achieving their dreams of studying abroad. This milestone reflects our unwavering commitment, teamwork, and passion for making global education accessible. Every success story inspires us to continue providing expert guidance, personalized support, and end-to-end assistance. Together, we empower students to unlock opportunities and build a brighter future through international education.",
};
const contentThree = {
  title: "Expanding Our Horizons ",
  description:
    "Skymark Education is growing exponentially, with over six branches across Kerala and a strong presence in Dubai. Our ambitious expansion plans aim to create a global network, empowering students worldwide with transformative educational opportunities. By combining local expertise with international reach, we ensure unparalleled support for aspiring learners. Skymark’s vision is to make global education accessible, guiding students toward brighter futures through personalized and comprehensive study-abroad solutions.",
};
const contentFour = {
  title: "The visionary Founders",
  description:
    "Skymark Education was brought to life by a team of visionary founders, including Raneesh Cherukad & Shafeeque PP, who shared a passion for transforming the study-abroad landscape. Their forward-thinking approach and dedication to empowering students have been the driving force behind Skymark’s success since its inception in 2010. Through their leadership, Skymark has grown into a trusted global education consultancy, helping thousands of students achieve their dreams of international education.",
};

function ServiceSCroll() {
  const expandRef = useRef(null);
  const countingRef = useRef(null);
  const primeRef = useRef(null);
  const visionaryRef = useRef(null);
  const isExpand = useInView(expandRef, { amount: 1 });
  const isCounting = useInView(countingRef, { amount: 1 });
  const isPrime = useInView(primeRef, { amount: 1 });
  const isVisionary = useInView(visionaryRef, { amount: 1 });
  const [content, setContent] = useState(contentOne);
  const [lastActive, setLastActive] = useState("prime");

  useEffect(() => {
    if (isExpand) {
      setContent(contentTwo);
      setLastActive("expand");
    } else if (isCounting) {
      setContent(contentThree);
      setLastActive("counting");
    } else if (isPrime) {
      setContent(contentOne);
      setLastActive("prime");
    } else if (isVisionary) {
      setContent(contentFour);
      setLastActive("visionary");
    } else {
      switch (lastActive) {
        case "expand":
          setContent(contentTwo);
          break;
        case "counting":
          setContent(contentThree);
          break;
        case "visionary":
          setContent(contentFour);
          break;
        default:
          setContent(contentOne);
      }
    }
  }, [isExpand, isCounting, isPrime, isVisionary, lastActive]);
  return (
    <section className="about" id="about">
      <div className="about-scroll-container">
        <div className="about-scroll-container-left">
          {isExpand && <LeftScroll content={content} />}
          {isCounting && <LeftScroll content={content} />}
          {isVisionary && <LeftScroll content={content} />}
          {!isExpand && !isCounting && !isVisionary && (
            <LeftScroll content={content} />
          )}
        </div>
        <div className="about-scroll-container-right">
          <RightScroll
            refs={primeRef}
            img="https://cdn.prod.website-files.com/66b0a2749f8ac3c146b191c2"
          />
          <RightScroll
            refs={expandRef}
            img="https://cdn.prod.website-files.com/66b0a2749f8ac3c146b191c2"
          />
          <RightScroll
            refs={countingRef}
            img="https://cdn.prod.website-files.com/66b0a2749f8ac3c146b191c2"
          />
          <RightScroll
            refs={visionaryRef}
            img="https://cdn.prod.website-files.com/66b0a2749f8ac3c146b191c2"
          />
        </div>
      </div>
    </section>
  );
}

export default ServiceSCroll;
