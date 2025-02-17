import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LeftScroll from "./LeftScroll";
import RightScroll from "./RightScroll";

const contentList = [
  {
    title: "Social Media Management",
    description:
      "Strategically managing and growing your brand’s presence across social platforms.",
    img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779410/hawksee-01_wczbap.webp",
  },
  {
    title: "Performance Marketing",
    description: "Data-driven ad campaigns to maximize conversions and ROI.",
    img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-02_yv8ubf.webp",
  },
  {
    title: "Content Creation ",
    description:
      "High-quality visuals, videos, and graphics to enhance brand storytelling.",
    img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779410/hawksee-05_fqv7yy.webp",
  },
  {
    title: "Video Production",
    description:
      "Professional video shoots and edits tailored to your brand’s message.",
    img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-04_htxnpe.webp",
  },
  {
    title: "Branding & Design",
    description:
      "Crafting unique brand identities with logos, collaterals, and design assets.",
    img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-03_s18foa.webp",
  },
  {
    title: "Website Development",
    description:
      "User-friendly, conversion-optimized websites for businesses of all sizes.",
    img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779410/hawksee-06_dqikyl.webp",
  },
  {
    title: "SEO & Digital Strategy",
    description:
      "Enhancing online visibility with tailored SEO and digital growth strategies.",
    img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779410/hawksee-07_v1tvb0.webp",
  },
  {
    title: "Influencer Marketing",
    description:
      "Connecting brands with the right influencers for authentic engagement.",
    img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-08_mdp7e5.webp",
  },
  {
    title: "Reels Marketing",
    description:
      "Engaging short-form video strategies to boost brand awareness and reach.",
    img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-09_y1yjqy.webp",
  },
  {
    title: "Outdoor & Print Advertising",
    description:
      "Designing and printing leaflets, brochures, hoardings, and other marketing materials.",
    img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-10_xdqwt7.webp",
  },
];

function ServiceSCroll() {
  const expandRef = useRef(null);
  const countingRef = useRef(null);
  const primeRef = useRef(null);
  const visionaryRef = useRef(null);
  const brandingRef = useRef(null);
  const websiteRef = useRef(null);
  const seoRef = useRef(null);
  const influencerRef = useRef(null);
  const reelsRef = useRef(null);
  const outdoorRef = useRef(null);

  const isExpand = useInView(expandRef, { amount: 1 });
  const isCounting = useInView(countingRef, { amount: 1 });
  const isPrime = useInView(primeRef, { amount: 1 });
  const isVisionary = useInView(visionaryRef, { amount: 1 });
  const isBranding = useInView(brandingRef, { amount: 1 });
  const isWebsite = useInView(websiteRef, { amount: 1 });
  const isSEO = useInView(seoRef, { amount: 1 });
  const isInfluencer = useInView(influencerRef, { amount: 1 });
  const isReels = useInView(reelsRef, { amount: 1 });
  const isOutdoor = useInView(outdoorRef, { amount: 1 });
  const [content, setContent] = useState(contentList[0]);
  const [lastActive, setLastActive] = useState("prime");

  useEffect(() => {
    if (isExpand) {
      setContent(contentList[1]);
      setLastActive("expand");
    } else if (isCounting) {
      setContent(contentList[2]);
      setLastActive("counting");
    } else if (isPrime) {
      setContent(contentList[0]);
      setLastActive("prime");
    } else if (isVisionary) {
      setContent(contentList[3]);
      setLastActive("visionary");
    } else if (isBranding) {
      setContent(contentList[4]);
      setLastActive("branding");
    } else if (isWebsite) {
      setContent(contentList[5]);
      setLastActive("website");
    } else if (isSEO) {
      setContent(contentList[6]);
      setLastActive("seo");
    } else if (isInfluencer) {
      setContent(contentList[7]);
      setLastActive("influencer");
    } else if (isReels) {
      setContent(contentList[8]);
      setLastActive("reels");
    } else if (isOutdoor) {
      setContent(contentList[9]);
      setLastActive("outdoor");
    }
  }, [
    isExpand,
    isCounting,
    isPrime,
    isVisionary,
    isBranding,
    isWebsite,
    isSEO,
    isInfluencer,
    isReels,
    isOutdoor,
  ]);
  return (
    <section className="about" id="about" aria-label="About section">
      <div
        className="about-scroll-container"
        aria-label="About scroll container"
      >
        <div
          className="about-scroll-container-left"
          aria-label="About scroll left container"
        >
          <LeftScroll content={content} />
        </div>
        <div
          className="about-scroll-container-right"
          aria-label="About scroll right container"
        >
          {[
            primeRef,
            expandRef,
            countingRef,
            visionaryRef,
            brandingRef,
            websiteRef,
            seoRef,
            influencerRef,
            reelsRef,
            outdoorRef,
          ].map((ref, index) => (
            <RightScroll key={index} refs={ref} img={contentList[index].img} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSCroll;
