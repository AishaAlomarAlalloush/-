

import { useState } from "react";


function Lectures({ lectures }) {
  const [src, setSrc] = useState(lectures[0].source);

  return (
    <div class="container">
      <div class="left">
        <iframe width="560" height="315" src={src} title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"></iframe>
      </div>
      <div class="right">


{lectures.map((lec, i) => (
          <div key={i} class="box" onClick={() => setSrc(lec.source)}>

            <div class="text">
              <h3>{lec.title}</h3>
              <p>{lec.speaker}</p>
            </div>
            <div class="img">
              <img src={lec.img} alt="img" loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lectures