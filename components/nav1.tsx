import type { NextPage } from "next";

export type Nav1Type = {
  className?: string;
};

const Nav1: NextPage<Nav1Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[7px] left-[65px] w-[1742px] h-[142px] text-left text-6xl text-aliceblue font-poppins ${className}`}
    >
      <img
        className="absolute top-[0px] left-[0px] w-[142px] h-[142px] object-cover"
        alt=""
        src="/logo1@2x.png"
      />
      <div className="absolute top-[38px] left-[1588px] w-[154px] h-[65px]">
        <div className="absolute top-[18px] left-[0px] tracking-[0.04em] leading-[100%]">
          Menu
        </div>
        <img
          className="absolute top-[0px] left-[89px] w-[65px] h-[65px] overflow-hidden"
          alt=""
          src="/hugeiconsmenu11.svg"
        />
      </div>
      <div className="absolute top-[38px] left-[calc(50%_-_100px)] rounded-13xl border-dodgerblue-100 border-[1px] border-solid box-border w-[201px] h-[65px]">
        <div className="absolute top-[0px] left-[0px] w-[201px] h-[65px] flex flex-row items-center justify-center py-[26px] px-11 box-border">
          <div className="w-[97px] relative tracking-[0.04em] leading-[100%] font-medium inline-block h-[25px] shrink-0">
            Explore
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav1;
