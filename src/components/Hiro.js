import { useState } from "react";

import one from "../assets/one.png";

export default function Hiro() {
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      <div>
        <img
          data-aos="flip-right"
          data-aos-duration="1500"
          data-aos-offset="200"
          width={10000}
          height={10000}
          src={one}
          alt="profile"
          onLoad={() => setLoaded(false)}
        />
      </div>
    </>
  );
}
