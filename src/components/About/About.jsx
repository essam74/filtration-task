import React from "react";
import rectangle from "../../assets/images/Rectangle.png";

export default function About() {
  return (
    <section className="about-section ">
      <div className="container-1">
        <div className="about-content flex flex-row md:justify-around mx-auto">

          {/* about us "the left side" */}
          <div className="aboutUs w-100 md:w-1/2 flex flex-col justify-center items-center md:items-start ">
            <h1 className="text-[54px]  font-[900] text-white">About Us</h1>
            <p className="text-[15px] font-[400] leading-[24px] text-white my-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an
            </p>
            <div>
              <img className="w-3/4 md:mx-0 mx-auto" src={rectangle} alt="" />
            </div>
          </div>

          {/* where side "the right side" */}
          <div className="where w-100 md:w-1/3 flex flex-col text-center md:text-end mt-[120px]">
            <h1 className="text-[54px] font-[900] text-white">Where</h1>
            <p className="text-[15px] font-[400] leading-[24px] text-white text-start my-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        
        <div className="text-center text-primaryColor pb-10">
          <button className="btn bg-[#EEC04B] text-greyColor">Help me</button>
        </div>
      </div>
    </section>
  );
}
