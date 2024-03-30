import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import axios from "axios";

export default function Contacts() {

    // manage form data using state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((para) => ({
      ...para,
      [name]: value,
    }));
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://upskilling-egypt.com:3001/contact",
        formData
      );
      setFormData({ name: "", email: "", phone: "" }); // Reset form data
      console.log(res.data); // Handle success response
    } catch (error) {
      console.error("Error:", error); // Handle error
    }
  };


  return (
    <section className="contact bg-white">
      <div className="container">
        <div className="title heading text-center py-20 ">
          <h1 className="">Contact Us</h1>
        </div>

        <div className="flex justify-center md:flex-row flex-col">

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="cont-form space-y-5 w-1/2 mb-10 mx-auto text-center"
          >
            <div>
              <input
                value={formData.name}
                onChange={handleChange}
                name="name"
                type="text"
                id="name"
                placeholder="Name"
                className="form_input bg-[#cedcff] w-full py-3 px-6 rounded-3xl focus:outline-none "
              />
            </div>
            <div>
              <input
                value={formData.email}
                onChange={handleChange}
                name="email"
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="form_input bg-[#cedcff] w-full py-3 px-6 rounded-3xl focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <input
                value={formData.phone}
                onChange={handleChange}
                name="phone"
                type="text"
                id="phone"
                placeholder="Phone"
                className="form_input bg-[#cedcff] w-full py-3 px-6 rounded-3xl focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="btn px-10 py-3 bg-[#ffffff] text-[#000000] border-primaryColor border-2"
            >
              Send
            </button>
          </form>


          {/* Contact Information */}
          <div className="contactInfo flex flex-col mx-10 pl-10 pt-16 space-y-5">
            <div className="flex gap-2">
              <MdEmail className="text-primaryColor w-[18px] h-5" />
              <p className="text-[14px] font-[400]">upskilling.eg1@gmail.com</p>
            </div>
            <div className="flex gap-2">
              <FaPhoneAlt className="text-primaryColor w-[18px] h-5" />
              <p className="text-[14px] font-[400]">+20 115 493 2137</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
