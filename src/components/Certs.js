import CertCard from "./CertCard.js";

import hr from "../assets/curve-hr.svg";
import mtcna from "../assets/certs/c4.png";
import adinusa from "../assets/certs/c1.png";
import dicodingAws from "../assets/certs/c2.png";
import dicodingJs from "../assets/certs/c3.png";

// import

export default function Certs() {
  return (
    <div id="certs" className="mt-4 text-white">
      <h1 className="text-5xl text-center font-bold">We create Stories</h1>
      <p className="text-2xl text-center text-gray-400">
        A killer narrative will turn your readers into raving fans
      </p>

      {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-4 gap-5">
        <CertCard
          name="Overcoming Creative Block"
          img={adinusa}
          issued="Brian Gardner"
          date="May 1, 2017"
        />
        <CertCard
          name="Why Communication is Key"
          img={dicodingAws}
          issued="Brian Gardner"
          date="May 1, 2017"
        />
        <CertCard
          name="The Path Of Least Resistance"
          img={dicodingJs}
          issued="Brian Gardner"
          date="May 1, 2017"
        />
        <CertCard
          name="How to Reach New Heights"
          img={mtcna}
          issued="Brian Gardner"
          date="May 1, 2017"
        />
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
