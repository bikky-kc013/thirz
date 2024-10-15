import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className=" flex flex-col sm:grid  grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm tracking-wide">
        <div>
          <img className=" mb-5 w-24" src={assets.logo} alt="" />
          <p className=" w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            commodi veritatis totam aliquid tempore dignissimos corrupti
            voluptatum, at, laudantium voluptatibus ratione doloribus quo.
            Veniam voluptate maiores provident repudiandae impedit eius.
          </p>
        </div>
        <div>
          <p className=" text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600 mb-5">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className=" text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600 mb-5">
            <li>+977 9765228814</li>
            <li>bharathkc013@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className=" py-5  text-sm text-center">
          {" "}
          Copyright 2024@ thirz.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
