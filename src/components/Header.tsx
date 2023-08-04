import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full h-[80px] sticky top-0 flex items-center justify-between px-8 z-40 bg-black">
      <div>
        <h1 className="text-secondary text-lg font-bold">
          Webax<span className="text-[#CBFFA9]">Z</span>
        </h1>
      </div>
      {/* Nav for Desktop view */}
      <ul className="hidden text-secondary md:flex font-semibold gap-8">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact us</a>
        </li>
      </ul>
      <button
        onClick={() => handleMenu()}
        className="text-secondary text-2xl md:hidden"
      >
        <HiMenuAlt3 />
      </button>

      {/* For Mobile View */}
      <ul
        onClick={handleMenu}
        className={`${
          !isMenuOpen && "hidden"
        } absolute right-0 top-0 z-50 border h-screen w-[18rem] bg-secondary p-8 ease-in-out duration-500 md:hidden`}
      >
        <li className="absolute left-4 top-4 p-2">
          <button onClick={handleMenu} className="text-xl">
            <GrClose />
          </button>
        </li>
        <li className="mt-12 text-sm font-semibold">
          <a href="#home">Home</a>
        </li>
        <li className="mt-8 text-sm font-semibold">
          <a href="#services">Services</a>
        </li>
        <li className="mt-8 text-sm font-semibold">
          <a href="#about">About</a>
        </li>
        <li className="mt-8 text-sm font-semibold">
          <a href="#contact">Contact us</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
