import { useEffect, useState } from "react";
import BirdImg from "../../assets/birdForMobile.svg";

export const BirdMobo = ({ isTesterHundered, isTesterVisible, paraInView }) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("none");
  
  // Animation states for cycling text
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Words to cycle through
  const words = ["Business", "Brand", "Marketing"];

  const [styles, setStyles] = useState({
    transform: "scale(1) translate(0, 0)",
  transition: "all .5s ease-in-out",
  });

  // Function to get fixed width for consistent layout
  const getFixedWidth = () => {
    const maxLength = Math.max(...words.map(word => word.length));
    return `${maxLength * 0.4}em`; // Approximate character width
  };

  // Cycling text animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    if (window.scrollY > 300) {
      setStyles({
        transform: "scale(30) translate(8rem, -3rem)",
        transition: "all 1s ease-in-out",
      });
    }

    if (scrollDirection === "down" && !isTesterHundered && lastScrollY < 100) {
      setStyles({
        transform: "scale(30) translate(8rem, -3rem)",
        transition: "all 1s cubic-bezier(0.76, 0.18, 0.92, 0.53)",
      });

      const para = document.getElementById("about");
      para.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (scrollDirection === "up") {
      if (isTesterVisible) {
        setStyles({
          transform: "scale(1) translate(0, 0)",
          transition: "all .5s cubic-bezier(0,.87,.63,.85)",
        });

        // Add a small delay before scrolling to top to prevent flickering
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 50);
      }
    }
  }, [scrollDirection, isTesterVisible, isTesterHundered, lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add a threshold to prevent tiny scroll fluctuations
      const scrollThreshold = 5;

      if (currentScrollY > lastScrollY + scrollThreshold) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY - scrollThreshold) {
        setScrollDirection("up");
      }

      // Debounce the scroll position update
      requestAnimationFrame(() => {
        setLastScrollY(currentScrollY);
      });
    };

    // Use passive scroll listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <section id="bird" className="birdMobo" aria-label="Bird section">
      <div className="captionMobo" aria-label="Caption for the bird section" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '0 1rem',
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ 
            margin: '0', 
            fontSize: '2.5rem', 
            fontWeight: '100',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'nowrap'
          }}>
            <span style={{ marginRight: '0.3em' }}>Fix your</span>
            <span 
              className="changing-word-container"
              style={{
                display: 'inline-block',
                width: getFixedWidth(),
                textAlign: 'left',
                position: 'relative'
              }}
            >
              <span 
                className="changing-word"
                style={{
                  position: 'relative',
                  transition: 'all 0.2s ease-out',
                  textAlign: 'left',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  display: 'inline-block',
                  transform: isAnimating ? 'translateY(-20px)' : 'translateY(0)',
                  opacity: isAnimating ? 0 : 1,
                }}
              >
                {words[wordIndex]}
              </span>
            </span>
          </h1>
          <span 
            style={{
              fontSize: '0.8rem',
              fontWeight: '300',
              display: 'block',
              width: '100%',
              textAlign: 'center',
              margin: '1rem auto 0',
              lineHeight: '1.4',
              maxWidth: '300px',
            }}
          >
            with speed, strategy and execution trusted by 100+ businesses.
          </span>
        </div>

        {/* ==== Call-to-action buttons ==== */}
        <div 
          className="caption-buttons"
          style={{
            display: 'flex',
            gap: '0.8rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            width: '100%',
            maxWidth: '280px',
            opacity: window.scrollY > 50 ? 0 : 1,
            visibility: window.scrollY > 50 ? 'hidden' : 'visible',
            transition: 'opacity 0.3s ease, visibility 0.3s ease',
          }}
        >
          <button
            className="explore-service-btn"
            style={{
              height: '40px',
              backgroundColor: '#fff',
              color: '#000',
              border: '1px solid #000',
              padding: '8px 12px',
              fontSize: '0.8rem',
              fontWeight: '500',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: '130px',
              zIndex: '5',
              flex: '1',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              position: 'relative',
            }}
            onClick={() => {
              window.location.href = "#serviceDetails";
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f5f5f5';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#fff';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Explore Service
          </button>
          
          <button
            className="learn-more-btn"
            style={{
              height: '40px',
              backgroundColor: 'transparent',
              color: '#000',
              border: 'none',
              textDecoration: 'underline',
              textDecorationColor: '#000',
              textDecorationThickness: '1px',
              padding: '8px 16px',
              fontSize: '0.85rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: '125px',
              zIndex: '5',
              textUnderlineOffset: '2px',
              flex: '1',
              position: 'relative',
            }}
            onClick={() => {
              window.location.href = "#contact";
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.textDecorationThickness = '1.5px';
              e.target.style.textUnderlineOffset = '4px';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.textDecorationThickness = '1px';
              e.target.style.textUnderlineOffset = '2px';
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      <div>
        <img
          style={styles}
          className="bird-imageMobo"
          alt="A stylized bird representing Hawksee"
          src={BirdImg}
          aria-label="Stylized bird representing Hawksee"
        />
      </div>
    </section>
  );
};