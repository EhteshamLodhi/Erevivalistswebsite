import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type NavType = {
  className?: string;
  hugeiconsmenu11?: string;

  /** Style props */
  exploreLeft?: CSSProperties["left"];
  rectangleDivLeft?: CSSProperties["left"];
};

const Nav: NextPage<NavType> = ({
  className = "",
  hugeiconsmenu11,
  exploreLeft,
  rectangleDivLeft,
}) => {
  const exploreBtnStyle: CSSProperties = useMemo(() => {
    return {
      left: exploreLeft,
    };
  }, [exploreLeft]);

  const exploreStyle: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft,
    };
  }, [rectangleDivLeft]);

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
          src={hugeiconsmenu11}
        />
      </div>
      <div
        className="absolute top-[38px] left-[766px] w-[201px] h-[65px]"
        style={exploreBtnStyle}
      >
        <div
          className="absolute top-[20px] left-[52px] tracking-[0.04em] leading-[100%] font-medium"
          style={exploreStyle}
        >
          Explore
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-13xl border-dodgerblue-100 border-[1px] border-solid box-border w-[201px] h-[65px]" />
      </div>
    </div>
  );
};

export default Nav;
