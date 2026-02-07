import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function TypingText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "SQL Developer",
        "Web Developer",
        "Database Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return <span ref={el} className="text"></span>;
}

export default TypingText;
