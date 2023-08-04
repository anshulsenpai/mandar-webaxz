import { BsArrowRight } from "react-icons/bs";
import image1 from "../assets/grid-img-1.jpg";
import image2 from "../assets/grid-img-2.jpg";
import image3 from "../assets/grid-img-3.jpg";
import image4 from "../assets/grid-img-4.jpg";

const Hero = () => {
  const photos = [image1, image2, image3, image4];
  return (
    <div
      id="home"
      className="w-full min-h-screen h-full text-secondary p-0 flex flex-col gap-12 md:flex-row md:p-8"
    >
      <div className="flex-1 p-1 w-full h-full">
        <h1 className="text-gray-300 leading-7 mb-8 font-light">
          <span className="text-6xl block mb-4 text-[#CBFFA9] drop-shadow-md font-normal md:text-8xl">
            Unlocking the extraordinary,
          </span>
          <span className="text-2xl text-white font-semibold">WebaxZ </span>
          weaves captivating designs, powerful software, and cutting-edge
          marketing strategies into seamless online experiences, redefining
          success in the digital landscape
        </h1>
        <a
          href="#contact"
          className="flex justify-center items-center gap-1 w-fit border border-gray-400 px-4 py-3 rounded-md text-sm hover:bg-white/10 hover:gap-2.5 ease-in-out duration-300"
        >
          <p>Get Started</p>
          <BsArrowRight />
        </a>
      </div>
      <div className="flex-1 flex w-full h-full justify-center items-center">
        {/* hero gallary */}
        <div className="w-full m-2 grid grid-cols-2 gap-2">
          {photos?.map((photo, i) => (
            <img
              className="w-full h-full object-cover hover:scale-105 ease-in-out duration-300 rounded-lg"
              key={i}
              src={photo}
              alt={`img-${i}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
