const Title = ({ text1, text2 }: { text1: string; text2: string }) => {
  return (
    <div className=" inline-flex gap-2  items-center mb-3">
      <p className="text-gray-500">
        {text1} <span className=" text-gray-700 font-medium">{text2}</span>
      </p>
      <p className=" text-gray-700 w-8 sm:w-8 "></p>
    </div>
  );
};

export default Title;
  