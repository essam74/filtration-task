import React from "react";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";

export default function Services() {
  return (
    <section className="services-section">
      <div className="container ">
        <div className="title heading text-center my-20 relative">
          <div className="title1">Services</div>
        </div>

        {/* all cards */}
        <div className="service-cards flex flex-col md:flex-row md:justify-around items-center mb-10">
           {/* first card */}
          <div className="card flex md:justify-end">
            <div className="card-width mx-2 rounded-[1.5rem] overflow-hidden shadow-2xl">
              <img className="w-full h-50" src={card1} alt="" />
              <div className="px-6 py-4">
                <p className="text-black-700 text-[18px] font-bold">
                  Lorem Ipsum
                </p>
                <p className="text-black-700 text-[14px] my-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled
                </p>
              </div>
            </div>
          </div>

           {/* second card */}
          <div className="card my-10 flex justify-center">
            <div className="card-width mx-2 rounded-[1.5rem] overflow-hidden shadow-2xl">
              <img className="w-full h-50" src={card2} alt="" />
              <div className="px-6 py-4">
                <p className="text-black-700 text-[18px] font-bold">
                  Lorem Ipsum
                </p>
                <p className="text-black-700 text-[14px] my-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled
                </p>
              </div>
            </div>
          </div>

           {/* third card */}
          <div className="card flex md:justify-start">
            <div className="card-width mx-2 rounded-[1.5rem] overflow-hidden shadow-2xl">
              <img className="w-full h-50" src={card3} alt="" />
              <div className="px-6 py-4">
                <p className="text-black-700 text-[18px] font-bold">
                  Lorem Ipsum
                </p>
                <p className="text-black-700 text-[14px] my-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center text-primaryColor pb-10">
          <button className="btn">Help me</button>
        </div>
      </div>
    </section>
  );
}
