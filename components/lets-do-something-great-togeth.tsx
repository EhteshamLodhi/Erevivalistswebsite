import type { NextPage } from "next";

export type LetsDoSomethingGreatTogethType = {
  className?: string;
};

const LetsDoSomethingGreatTogeth: NextPage<LetsDoSomethingGreatTogethType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[11735px] left-[148px] w-[1601.6px] h-[1339px] text-left text-13xl-3 text-aliceblue font-poppins ${className}`}
    >
      <div className="absolute top-[1244px] left-[1240px] w-80 h-[95px]">
        <div className="absolute top-[32px] left-[70px] leading-[100%] inline-block w-[180px]">
          Contact Us
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-26xl-3 border-dodgerblue-100 border-[1.4px] border-solid box-border w-80 h-[95px]" />
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[455.6px] h-[595px]"
        alt=""
        src="/vector7.svg"
      />
      <img
        className="absolute top-[274px] left-[594px] w-[455.6px] h-[595px]"
        alt=""
        src="/vector1.svg"
      />
      <img
        className="absolute top-[444px] left-[1146px] w-[455.6px] h-[595px]"
        alt=""
        src="/vector1.svg"
      />
      <div className="absolute top-[172px] left-[calc(50%_-_580.8px)] text-181xl tracking-[-0.02em] leading-[100%] capitalize font-semibold text-dodgerblue-100 text-center inline-block w-[1184px]">
        lET’S DO SOMETHING GREAT TOGETHER!
      </div>
      <div className="absolute top-[1247px] left-[64px] text-16xl leading-[130%] text-lightskyblue inline-block w-[824px]">
        We would be absolutely delighted to have you on board with us.
      </div>
    </div>
  );
};

export default LetsDoSomethingGreatTogeth;
