

import { useEffect, useState } from "react";


function HadithViewer() {
  const [hadiths, setHadiths] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function loadAhadith() {
      const res = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-muslim.json");
      const data = await res.json();
      const first300 = data.hadiths.filter(h => h.text?.trim()).slice(0, 300);
      setHadiths(first300);
    }
    loadAhadith();
  }, []);

  if (!hadiths.length) return (

          <div class="container">
        <div class="hadith-container">
          <span class="number">1<span class="current"></span>/300</span>
          <p>جاري التحميل...</p>
        </div>
        <div class="btns">
          <button class="next" >التالي</button>
          <button class="prev" >السابق</button>
        </div>
      </div>

  );

  return (

          <div class="container">
        <div class="hadith-container">
          <span class="number">{index + 1 }<span class="current"></span>/300</span>
          <p>{hadiths[index].text}</p>
        </div>
        <div class="btns">
          <button class="next" onClick={() => setIndex(index < hadiths.length - 1 ? index + 1 : 0)}>التالي</button>
          <button class="prev" onClick={() => setIndex(index > 0 ? index - 1 : hadiths.length - 1)}>السابق</button>
        </div>
      </div>

  );
}

export default HadithViewer