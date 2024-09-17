import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FooterType = {
  className?: string;
  contactUs?: string;
  bisendFill?: string;
  instagram?: string;
  reddit?: string;

  /** Style props */
  logoIconTop?: CSSProperties["top"];
  aboutUsWidth?: CSSProperties["width"];
};

const Footer: NextPage<FooterType> = ({
  className = "",
  contactUs,
  bisendFill,
  instagram,
  reddit,
  logoIconTop,
  aboutUsWidth,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      top: logoIconTop,
    };
  }, [logoIconTop]);

  const shortcutsStyle: CSSProperties = useMemo(() => {
    return {
      width: aboutUsWidth,
    };
  }, [aboutUsWidth]);

  return (
    <div
      className={`absolute top-[12389px] left-[0px] w-[1920px] h-[1129px] text-left text-11xl text-dodgerblue-200 font-poppins ${className}`}
      style={footerStyle}
    >
      <div className="absolute top-[0px] left-[0px] bg-gray-300 w-[1920px] h-[1129px]" />
      <img
        className="absolute top-[23px] left-[67px] w-[259px] h-[259px] object-cover"
        alt=""
        src="/logo@2x.png"
      />
      <div className="absolute top-[824px] left-[calc(50%_-_722px)] text-201xl leading-[100%] font-semibold">
        E-Revivalists
      </div>
      <div className="absolute top-[1071px] left-[calc(50%_-_265px)] text-6xl leading-[100%] text-darkslateblue">
        © 2024 | All rights reserved by E-Revivalists
      </div>
      <div
        className="absolute top-[90px] left-[993px] w-[195px] h-[383px] text-16xl text-aliceblue"
        style={shortcutsStyle}
      >
        <div className="absolute top-[0px] left-[0px] leading-[100%] font-medium">
          Home
        </div>
        <div className="absolute top-[87px] left-[0px] leading-[100%] font-medium">
          About Us
        </div>
        <div className="absolute top-[174px] left-[0px] leading-[100%] font-medium">
          Services
        </div>
        <div className="absolute top-[261px] left-[0px] leading-[100%] font-medium">
          Blog
        </div>
        <div className="absolute top-[348px] left-[0px] leading-[100%] font-medium">
          {contactUs}
        </div>
      </div>
      <div className="absolute top-[458px] left-[119px] w-[685px] h-[98px] text-dimgray-100">
        <div className="absolute top-[0px] left-[0px] rounded-lgi border-dimgray-100 border-[1px] border-solid box-border w-[685px] h-[98px]" />
        <div className="absolute top-[24px] left-[32px] w-[611px] h-[50px]">
          <div className="absolute top-[9px] left-[0px] leading-[100%] font-light">
            Enter email address
          </div>
          <img
            className="absolute top-[0px] left-[561px] w-[50px] h-[50px] overflow-hidden"
            alt=""
            src={bisendFill}
          />
        </div>
      </div>
      <div className="absolute top-[90px] left-[1441px] w-[361px] h-[407px]">
        <div className="absolute top-[0px] left-[8px] w-[334px] h-[194px]">
          <div className="absolute top-[0px] left-[0px] text-16xl leading-[100%] font-medium text-aliceblue">
            Contact Us
          </div>
          <a
            className="absolute top-[95px] left-[0px] leading-[100%] font-medium text-[inherit] [text-decoration:none]"
            href="mailto:info@erevivalists.com"
            target="_blank"
          >
            info@erevivalists.com
          </a>
          <div className="absolute top-[164px] left-[0px] leading-[100%] font-medium">
            (+92) 3182451683
          </div>
        </div>
        <div className="absolute top-[355px] left-[0px] w-[361px] h-[52px]">
          <div className="absolute top-[0px] left-[0px] w-[361px] h-[52px]">
            <img
              className="absolute top-[11px] left-[323px] w-[38px] h-[38px] overflow-hidden"
              alt=""
              src="/discord.svg"
            />
            <img
              className="absolute top-[4px] left-[0px] w-[45px] h-[45px] overflow-hidden"
              alt=""
              src="/facebook.svg"
            />
            <img
              className="absolute top-[5px] left-[158px] w-[45px] h-[45px] overflow-hidden"
              alt=""
              src={instagram}
            />
            <img
              className="absolute top-[5px] left-[79px] w-[45px] h-[45px] overflow-hidden"
              alt=""
              src="/linkedin.svg"
            />
            <img
              className="absolute top-[0px] left-[237px] w-[52px] h-[52px]"
              alt=""
              src={reddit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
