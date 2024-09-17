import type { NextPage } from "next";

export type AboutUsType = {
  className?: string;
};

const AboutUs: NextPage<AboutUsType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1313px] left-[0px] w-[2054px] h-[1351px] text-left text-181xl text-[transparent] font-poppins ${className}`}
    >
      <div className="absolute top-[188px] left-[0px] w-[2054px] h-[200px]">
        <b className="absolute top-[0px] left-[0px] leading-[100%] [-webkit-text-stroke:1px_#193966]">
          ABOUT US
        </b>
        <b className="absolute top-[0px] left-[1051px] leading-[100%] [-webkit-text-stroke:1px_#193966]">
          ABOUT US
        </b>
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[1200px] object-cover"
        alt=""
        src="/img@2x.png"
      />
      <div className="absolute top-[1312px] left-[1920px] [background:linear-gradient(180deg,_#151515,_#111218)] w-[1920px] h-[180px] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
      <div className="absolute top-[505px] left-[calc(50%_-_754px)] text-61xl tracking-[-0.02em] leading-[130%] font-medium text-dodgerblue-100 inline-block w-[1372px]">
        Inspired with creativity and Spaces
      </div>
      <div className="absolute top-[726px] left-[calc(50%_-_653px)] w-[1172px] h-[625px] text-16xl text-lightsteelblue">
        <div className="absolute top-[0px] left-[calc(50%_-_586px)] w-[1172px] h-[617px]">
          <img
            className="absolute top-[0px] left-[calc(50%_-_586px)] w-[1172px] h-[617px]"
            alt=""
            src="/group-9.svg"
          />
          <div className="absolute top-[111px] left-[calc(50%_-_528px)] leading-[150%] capitalize inline-block w-[1055px]">
            "We’re a design and technology partner for the digital age, helping
            businesses innovate and stay relevant by developing cutting-edge
            digital products. From idea to execution, we create successful
            digital services for startups and established companies with modern
            UX/UI design, front-end, and back-end development, using the Axtra
            template from ThemeForest in the early stages."
          </div>
        </div>
        <div className="absolute top-[508px] left-[843px] w-[295px] h-[117px] text-14xl">
          <div className="absolute top-[33px] left-[117px] leading-[150%] capitalize font-medium">
            Read more
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[117px] h-[117px] overflow-hidden object-contain"
            alt=""
            src="/flowbitearrowupoutline@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
