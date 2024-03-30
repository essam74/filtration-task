import React from "react";
import logo from "../../assets/images/Trash.png";

export default function Home() {
  return (
    <section className="hero-section">
      <div className="container py-7">

        {/* logo */}
        <div className="hero-content text-center">
          <div className="logo flex flex-col md:flex-row items-center justify-center md:mt-7 md:mb-14">
            <div>
              <img className="md:mr-3 md:w-15 md:h-10 " src={logo} alt="" />
            </div>
            <div className="title text-headingColor  ">
              <h1 className="md:text-3xl md:font-[300]">ROUND ROCK</h1>
              <h3 className="md:text-sm letter-spacing">Trash Hauling</h3>
            </div>
          </div>

          <div>
            <button className="Experts-btn">Experts</button>
          </div>
          
          {/* main content */}
          <div className="hero-text">
            <p className=" font-[100] text-[50px] md:text-[90px] leading-[60px] md:leading-[90px] text-textColor">
              Lorem
              <br />
              <span className="font-[900] text-textColor">Lorem Lorem</span>
            </p>
            <p className="text-para md:w-1/3 mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>

          <div>
            <button className="btn">Help me</button>
          </div>
        </div>
      </div>
    </section>
  );
}
