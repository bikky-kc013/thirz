import React from "react";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

const Contact = () => {
  return (
    <>
      <hr />
      <div className=" flex flex-col items-center pb-16">
        <div className="text-2xl py-8">
          <Title text1="CONTACT" text2="US"></Title>
        </div>
        <div className=" flex flex-col sm:flex-row ">
          <div>
            <img src={assets.contact_img} alt="" />
          </div>
          <div className=" px-0 sm:px-10  pt-10 h-96 sm:h-auto w-full flex flex-col">
            <p className=" font-bold text-xl text-gray-600 ">Our Store</p>
            <p className="py-8 font-thin text-gray-500 leading-wider text-md">
              54709 Willms Station <br /> Suite 350, Washington, USA
            </p>
            <p className=" font-thin text-gray-500 leading-wider text-md">
              Tel: (415) 555-0132 <br /> Email: admin@forever.com
            </p>
            <p className=" py-8 font-bold text-xl text-gray-600 ">
              Careers at Forever
            </p>
            <p className=" font-thin text-gray-500 leading-wider text-md">
              Learn more about our teams and job openings.
            </p>
            <button className=" flex-shrink-0 hover:bg-black hover:text-white h-16 w-36 border border-black mt-8 duration-300">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
      <NewsLetterBox></NewsLetterBox>
    </>
  );
};

export default Contact;
