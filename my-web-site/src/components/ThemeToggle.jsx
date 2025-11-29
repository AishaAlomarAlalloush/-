import { useEffect, useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div class="toggle">
      <i
        class={dark ? "ri-sun-fill" : "ri-moon-fill"}
        onClick={() => setDark(!dark)}
      ></i>
    </div>
  );
}

export default ThemeToggle