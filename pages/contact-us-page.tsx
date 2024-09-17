import type { NextPage } from "next";
import Nav from "../components/nav";
import Footer from "../components/footer";

const ContactUsPage: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-400 h-[2484px] overflow-hidden text-left text-6xl text-dodgerblue-200 font-poppins">
      <Nav hugeiconsmenu11="/hugeiconsmenu11.svg" />
      <img
        className="absolute top-[206.4px] left-[145px] w-[1629.7px] h-[1179.1px]"
        alt=""
        src="/gradient.svg"
      />
      <div className="absolute top-[298px] left-[calc(50%_-_701px)] text-61xl leading-[130%] font-medium text-center inline-block w-[1402px]">
        We’d love to learn more about you and what we can create together.
      </div>
      <div className="absolute top-[1044px] left-[calc(50%_-_886px)] w-[1771px] h-[85px] text-white">
        <div className="absolute top-[0px] left-[calc(50%_-_885.5px)] shadow-[0px_1.6px_4.1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(6.2px)] rounded-base-9 [background:linear-gradient(105.32deg,_rgba(8,_29,_134,_0.4),_rgba(49,_118,_203,_0.5))] border-dimgray-200 border-[0.4px] border-solid box-border w-[1771px] h-[85px]" />
        <div className="absolute top-[23px] left-[calc(50%_-_43.5px)] tracking-[-0.02em] leading-[130%] font-medium">
          Submit
        </div>
      </div>
      <div className="absolute top-[635px] left-[calc(50%_-_886px)] w-[1771px] h-[376px] text-gray-100">
        <div className="absolute top-[0px] left-[calc(50%_-_885.5px)] w-[573px] h-[85px]">
          <div className="absolute top-[0px] left-[calc(50%_-_286.5px)] shadow-[0px_1.6px_4.1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(6.2px)] rounded-base-9 [background:linear-gradient(105.32deg,_#181818,_#1f1f1f)] border-dimgray-200 border-[0.4px] border-solid box-border w-[573px] h-[85px]" />
          <div className="absolute top-[23px] left-[32px] tracking-[-0.02em] leading-[130%]">
            Name
          </div>
        </div>
        <div className="absolute top-[0px] left-[calc(50%_-_286.5px)] w-[573px] h-[85px]">
          <div className="absolute top-[0px] left-[calc(50%_-_286.5px)] shadow-[0px_1.6px_4.1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(6.2px)] rounded-base-9 [background:linear-gradient(105.32deg,_#181818,_#1f1f1f)] border-dimgray-200 border-[0.4px] border-solid box-border w-[573px] h-[85px]" />
          <div className="absolute top-[23px] left-[32px] tracking-[-0.02em] leading-[130%]">
            Email
          </div>
        </div>
        <div className="absolute top-[118px] left-[calc(50%_-_885.5px)] w-[1771px] h-[258px]">
          <div className="absolute top-[0px] left-[calc(50%_-_885.5px)] shadow-[0px_1.6px_4.1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(6.2px)] rounded-base-9 [background:linear-gradient(105.32deg,_#181818,_#1f1f1f)] border-dimgray-200 border-[0.4px] border-solid box-border w-[1771px] h-[258px]" />
          <div className="absolute top-[21px] left-[32px] tracking-[-0.02em] leading-[130%]">
            Message
          </div>
        </div>
        <div className="absolute top-[0px] left-[calc(50%_+_312.5px)] w-[573px] h-[85px]">
          <div className="absolute top-[0px] left-[calc(50%_-_286.5px)] shadow-[0px_1.6px_4.1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(6.2px)] rounded-base-9 [background:linear-gradient(105.32deg,_#181818,_#1f1f1f)] border-dimgray-200 border-[0.4px] border-solid box-border w-[573px] h-[85px]" />
          <div className="absolute top-[23px] left-[32px] tracking-[-0.02em] leading-[130%]">
            Phone number
          </div>
        </div>
      </div>
      <Footer
        contactUs="Contact"
        bisendFill="/bisendfill1.svg"
        instagram="/instagram1.svg"
        reddit="/reddit1.svg"
        logoIconTop="1355px"
        aboutUsWidth="159px"
      />
    </div>
  );
};

export default ContactUsPage;
