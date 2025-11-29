
import { useEffect, useState } from "react";


function AdhanTimings() {
  const [timings, setTimings] = useState(null);

  useEffect(() => {
    async function getAdhan() {
      const res = await fetch("https://api.aladhan.com/v1/timingsByCity/08-11-2025?city=Aleppo&country=Syria&method=5");
      const data = await res.json();
      setTimings(data.data.timings);
    }
    getAdhan();
  }, []);

  if (!timings) return (
    <div class="container">
      {[{en: "Fajr" , ar: "الفجر"}, {en: "Sunrise", ar:"شروق الشمس"},{en: "Dhuhr", ar:"الظهر"},{en: "Asr", ar: "العصر"},{en: "Maghrib", ar: "المغرب"},{en: "Isha" , ar: "العشاء"}].map((p) => (
        <div class="card">
          <h3>{p.ar}</h3>
        </div>
      ))}
    </div>
  );

  return (
    <div class="container">
      {[{en: "Fajr" , ar: "الفجر"}, {en: "Sunrise", ar:"شروق الشمس"},{en: "Dhuhr", ar:"الظهر"},{en: "Asr", ar: "العصر"},{en: "Maghrib", ar: "المغرب"},{en: "Isha" , ar: "العشاء"}].map((p) => (
        <div  class="card">
          <h3>{p.ar}</h3>
          <p>{timings[p.en]}</p>
        </div>
      ))}
    </div>
  );
}

export default AdhanTimings
