import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "./SkillCard.js";

import strategy from "../assets/skills/strategy.png";

import content from "../assets/skills/content.png";
import design1 from "../assets/skills/design1.png";

import hr from "../assets/curve-hr.svg";

export default function Skills() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div id="skills" className="mt-4 text-white">
      <h1 className="text-5xl font-bold text-center">We Build Experience</h1>
      <p className="text-2xl text-gray-400 text-center">
        A minimalist way to buld design
      </p>
      <p></p>

      <div>
        <br />
        <Slider {...settings}>
          <SkillCard experience="1 years" img={content} />
          <SkillCard experience="1 years" img={strategy} />
          <SkillCard experience="1 years" img={design1} />
          {/* <SkillCard name="javascript" experience="1 years" img={javascript} />
                <SkillCard name="react" experience="1 years" img={reactIcon} />
                <SkillCard name="tailwind" experience="1 years" img={tailwind} />
                <SkillCard name="kvm" experience="1 years" img={kvm} />
                <SkillCard name="mikrotik" experience="1 years" img={mikrotik} />
                <SkillCard name="kubernetes" experience="1 years" img={kubernetes} />
                <SkillCard name="ansible" experience="1 years" img={ansible} />
                <SkillCard name="windows" experience="1 years" img={windows} />
                <SkillCard name="react" experience="1 years" img={react} />
                <SkillCard name="cisco" experience="1 years" img={cisco} />
                <SkillCard name="docker" experience="1 years" img={docker} />
                <SkillCard name="git" experience="1 years" img={git} />
                <SkillCard name="express" experience="1 years" img={express} />
                <SkillCard name="gitlab" experience="1 years" img={gitlab} /> */}
        </Slider>
      </div>
      <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
    </div>
  );
}
