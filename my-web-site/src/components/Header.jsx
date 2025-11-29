
import { useEffect, useState } from "react";
import ThemeToggle from './ThemeToggle'


function Header() {
  const [active, setActive] = useState(false);

    const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const links = [{name: "الصفحة الرئيسية" , tag: "main"}, {name: "أفضل طلابنا" , tag: "topStudents"}, {name: "أحاديث" , tag: "hadith"}, {name : "محاضرات" , tag : "lectures"} , {name : "القرآن الكريم" , tag: "quran"} , {name: "أوقات الصلاة" , tag: "adhan"} , {name: "تواصل معنا" , tag: "contact"}];


  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header class={active ? "active" : ""}>
      <div class="container">
<a href="/" class="logo">ورتّـل</a>
      <ul class={open ? "active" : ""}>


{links.map((link) => (
          <a
            key={link.name}
            href={`#${link.tag}`}
            class={activeLink === link.name ? "active" : ""}
            onClick={() => {
              setActiveLink(link.name);
              setOpen(false);
            }}
          >
          {link.name}
          </a>
        ))}
      </ul>

<ThemeToggle/>

      <div class="login">
         <a href="/login" class="loginBtn"><i class="ri-login-box-line"></i></a>
        
      </div>

      <div class="menu">
        <i 
        class={open ? "ri-close-large-fill" : "ri-menu-line"}
        onClick={() => setOpen(!open)}></i>
      </div>
    </div>
    </header>
  );
}

export default Header