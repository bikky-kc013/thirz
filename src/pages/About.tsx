import React from "react";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

const About = () => {
  return (
    <>
      <hr />
      <div className="flex flex-col items-center">
        <div className="flex justify-centers py-4 pt-8 text-2xl">
          <Title text1="ABOUT" text2="US" />
        </div>
        <div className="flex flex-col sm:flex-row">
          <img
            className="h-full w-full sm:h-[450px] sm:w-[450px] "
            src={assets.about_img}
            alt=""
          />
          <div className=" text-[15px] from-neutral-800 tracking-wider text-gray-600 sm:pl-10 sm:pr-64 pt-14  ">
            {" "}
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
            <br />
            <br /> Since our inception, we've worked tirelessly to curate a
            diverse selection of high-quality products that cater to every taste
            and preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
            <br />
            <br />
            <p className=" font-bold text-black">Our Mission</p>
            <br />
            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-start pt-14 text-xl">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>
      <div className=" flex flex-col md:flex-row md:h-56 sm:flex-row sm:h-56 ">
        <div className=" border border-gray-300 h-56 sm:w-full overflow-hidden ">
          <p className=" px-16 text-sm leading-tight font-bold pt-16">
            Quality Assurance:
          </p>
          <p className="px-16 text-sm leading-wider font-light text-gray-600 py-6">
            {" "}
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className=" border border-gray-300 h-56 sm:w-full overflow-hidden ">
          <p className=" px-16 text-sm leading-tight font-bold pt-16">
            Convenience:
          </p>
          <p className="px-16 text-sm leading-wider font-light text-gray-600 py-6">
            {" "}
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className=" border border-gray-300 h-56 sm:w-full overflow-hidden ">
          <p className=" px-16 text-sm leading-tight font-bold pt-16">
            Exceptional Customer Service:
          </p>
          <p className="px-16 text-sm leading-wider font-light text-gray-600 py-6">
            {" "}
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsLetterBox></NewsLetterBox>
    </>
  );
};

export default About;
