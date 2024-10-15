const NewsLetterBox = () => {
  return (
    <div className=" flex flex-col sm:flex-col justify-around  gap-4  sm:gap-2 text-center py-10   md:text-base ">
      <p className="font-bold tracking-wider lg:font-mono lg:tracking-normal text-2xl  py-0">
        Subscribe now & get 20% off
      </p>
      <p className=" text-gray-400 font-light text-[14px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form className=" flex items-center justify-center">
        <input
          className=" font-mono border border-black  w-[700px] h-14  pl-4 text-sm tracking-widest"
          type="email"
          name="email"
          placeholder="Enter your Email"
        />
        <button
          className=" text-xs px-3 border border-black text-white bg-black h-14  w-[150px]"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
