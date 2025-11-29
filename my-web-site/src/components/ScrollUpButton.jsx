import { useEffect, useState } from "react";

// state
function ScrollUpButton() {
  const [active, setActive] = useState(false);  // hooks

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    }; // rendering
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

      <div class={`scroll-up ${active ? "active" : ""}`}>
    <i class="ri-arrow-up-double-fill" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}></i>
  </div>

  );
}

export default ScrollUpButton