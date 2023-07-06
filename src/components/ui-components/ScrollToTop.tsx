import React, { useState, useEffect } from "react";

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const currentPosition = window.scrollY;

    if (currentPosition > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-6 right-6 bg-slate-50 bg-opacity-20 p-2 rounded-full cursor-pointer text-yellow-200 hover:shadow-muteNeon"
          onClick={scrollToTop}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Zm0-12.25a.75.75 0 0 1 .53.22l3 3a.75.75 0 1 1-1.06 1.06L12 11.56l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 .53-.22Z"/></svg>
        </div>
      )}
    </>
  );
};

export default ScrollToTopArrow;
