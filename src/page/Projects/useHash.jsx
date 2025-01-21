import { useEffect } from "react";

export const useHash = ({ setIsAnimate }) => {
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#projects") {
        setIsAnimate(true);
        // Prevent background scroll
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
        document.body.style.pointerEvents = "none";
      } else {
        setIsAnimate(false);
        // Re-enable background scroll
        document.body.style.overflow = "unset";
        document.body.style.height = "auto";
        document.body.style.pointerEvents = "auto";
      }
    };

    window.addEventListener("hashchange", checkHash);
    checkHash();

    return () => {
      window.removeEventListener("hashchange", checkHash);
      // Cleanup: re-enable scroll when component unmounts
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
      document.body.style.pointerEvents = "auto";
    };
  }, [setIsAnimate]);
};
