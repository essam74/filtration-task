import React from "react";
import person from "../../assets/images/person.png";
import { HiStar } from "react-icons/hi";

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="title heading text-center my-20 relative">
          <h1 className="title1">Testimonials</h1>
        </div>

        {/* all cards */}
        <div className="test-cards w-3/4 mx-auto flex justify-around mb-10">
          <div className="col-1 w-1/2 mx-2 ">

            {/* first card */}
            <div className="test-card bg-[#FFFFFF] py-[20px] px-5 border rounded-3xl">
              <div className="flex items-start flex-row gap-[13px] ">
                <img src={person} alt="" />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                    Courtney Henry
                  </h4>
                  <p className="text-[14px] leading-5 my-1 font-[400] text-textColor">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                  <div className="flex items-center mt-5 gap-[2px]">
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* second card */}
            <div className="test-card bg-[#FFFFFF] py-[20px] px-5 my-3 border rounded-3xl">
              <div className="flex items-start gap-[13px]">
                <img src={person} alt="" />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                    Courtney Henry
                  </h4>
                  <p className="text-[14px] leading-5 my-1 font-[400] text-textColor">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                  <div className="flex items-center mt-5 gap-[2px]">
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1 w-1/2 mx-2">

            {/* third card */}
            <div className="test-card bg-[#FFFFFF] py-[20px] px-5 border rounded-3xl">
              <div className="flex items-start gap-[13px]">
                <img src={person} alt="" />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                    Courtney Henry
                  </h4>
                  <p className="text-[14px] leading-5 my-1 font-[400] text-textColor">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                  <div className="flex items-center mt-5 gap-[2px]">
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* fourth card */}
            <div className="test-card bg-[#FFFFFF] py-[20px] px-5 border my-3 rounded-3xl">
              <div className="flex items-start gap-[13px]">
                <img src={person} alt="" />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                    Courtney Henry
                  </h4>
                  <p className="text-[14px] leading-5 my-1 font-[400] text-textColor">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                  <div className="flex items-center mt-5 gap-[2px]">
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                    <HiStar className="text-primaryColor w-[18px] h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
