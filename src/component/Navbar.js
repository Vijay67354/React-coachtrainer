import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // close menu on click
  const closeMenu = () => setClick(false);

  // change nav color when scrolling

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color
          ? "header bg-[#57cee6]  z-50 spacingYtext rajez spacingYlogo"
          : "header bg-[#57cee6] bg-opacity-30 rajez"

        // : "header  bg-gradient-to-b from-black via-black bg-opacity-0 rajez"
      }
    >
      <nav className="navbar ">
        <Link to="/" className="logo">
          <img
            src="https://melanie-hanson-html.themerex.net/images/logo_white.png"
            alt="logo"
            className="cursor-pointer md:w-28 w-24"
          />
        </Link>





        <ul className={click ? "nav-menu active md:space-y-0 space-y-4" : "nav-menu"}>
          <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-sm uppercase font-semibold nav-desk  text-white hover:text-primary group relative cursor-pointer">
          <Link to="/"> WHY I2V ? </Link>  
            {/* <div className="group-hover:block dropdown-menu absolute hidden transition-all duration-300 translate-y-2 h-auto top-10 md:-left-10">
              <div className="top-0 bg-black shadow-xl shadow-white/20 text-white text-xs w-52 flex flex-col">
                <Link to="/whyi2v" className=" hover:bg-primary hover:text-white py-2 m-1">
                  WHY I2V ?
                </Link>
                
              </div>
            </div> */}
          </li>
          {/* for mobile start */}
          <li className="md:hidden block">
            <Link to="/"> <div className="py-2 text-white flex items-center justify-center w-full">
            WHY I2V ?

            </div> </Link>
          </li>
          {/* for mobile end */}

          <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-sm uppercase font-semibold nav-desk  text-white hover:text-primary group relative cursor-pointer">
            PRODUCTS
            <div className="group-hover:block dropdown-menu absolute hidden transition-all duration-300 translate-y-2 h-auto top-10 md:-left-10">
              <div className="top-0 bg-black shadow-xl shadow-white/20 text-white text-xs w-52 flex flex-col">
                <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1">
                  IP Video Management Software
                </Link>
                {/* <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1">
                  AI Based Video Analytics
                </Link>
                <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1">
                  Intelligent Traffic Solutions
                </Link>
                <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1">
                  Central Monetoring System
                </Link>
                <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1">
                  Cloud Surveillance
                </Link>
                <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1">
                  Integrated command Center
                </Link> */}
              </div>
            </div>
          </li>
          {/* for mobile start */}
          <li className="md:hidden block">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 text-white flex items-center justify-center w-full">
                    PRODUCTS
                    <RiArrowDropDownLine
                      className={open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500 mx-12 font-semibold">
                    <div className="bg-white text-black py-4 space-y-2 divide-y divide-red-400 rounded">
                      <li className="hover:bg-gray-50">
                        <Link to="/"> IP Video Management Software</Link>
                      </li>
                      <li>
                        <Link to="/"> AI Based Video Analytics</Link>
                      </li>
                      {/* <li>
                        <Link to="/"> Intelligent Traffic Solutions</Link>
                      </li>
                      <li>
                        <Link to="/"> Central Monetoring System</Link>
                      </li>
                      <li>
                        <Link to="/">  Cloud Surveillance</Link>
                      </li>
                      <li>
                        <Link to="/"> Integrated command Center</Link>
                      </li> */}
                    </div>
                  </Disclosure.Panel>

                </>
              )}
            </Disclosure>
          </li>
          {/* for mobile end */}
          <li className="group dropdown drop-shadow-2xl pr-5 md:flex hidden nav-item text-sm uppercase font-semibold nav-desk  text-white hover:text-primary group relative cursor-pointer">
            PARTNER
            <div className="group-hover:block dropdown-menu absolute hidden transition-all duration-300 translate-y-2 h-auto top-10 md:-left-10">
              <div className="top-0 bg-black shadow-xl shadow-white/20 text-white text-xs w-52 flex flex-col">
                {/* <Link to="/channel-partner" className=" hover:bg-primary hover:text-white py-2 m-1">
                  CHANNEL PARTNER
                </Link>
                <Link to="/technology-partner" className=" hover:bg-primary hover:text-white py-2 m-1">
                  TECHNOLOGY PARTNER
                </Link> */}
              </div>
            </div>
          </li>
          {/* for mobile start */}
          <li className="md:hidden block">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 text-white flex items-center justify-center w-full">
                    PARTNER
                    <RiArrowDropDownLine
                      className={open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500 mx-12 font-semibold">
                    <ul className="bg-white text-black py-4 space-y-2 divide-y divide-red-400 rounded">
                      <li className="hover:bg-gray-50">
                        <Link to="/">CHANNEL PARTNER</Link>
                      </li>
                      <li>
                        <Link to="/">TECHNOLOGY PARTNER</Link>
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </li>
          {/* for mobile end */}
          <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-sm uppercase font-semibold nav-desk  text-white hover:text-primary group relative cursor-pointer">
            <Link to="/"> SUPPORT  </Link>
            {/* <div className="group-hover:block dropdown-menu absolute hidden transition-all duration-300 translate-y-2 h-auto top-10 md:-left-10">
              <div className="top-0 bg-black shadow-xl shadow-white/20 text-white text-xs w-52 flex flex-col">
                <Link to="/whyi2v" className=" hover:bg-primary hover:text-white py-2 m-1">
                   WHY I2V ?
                </Link>
                <Link to="/whyi2v" className=" hover:bg-primary hover:text-white py-2 m-1">
                   WHY I2V ?
                </Link>
              </div>
            </div> */}
          </li>
          {/* for mobile start */}
          <li className="md:hidden block">
            <Link to="/"> <div className="py-2 text-white flex items-center justify-center w-full">
              SUPPORT

            </div> </Link>
          </li>
          {/* for mobile end */}
          <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-sm uppercase font-semibold nav-desk  text-white hover:text-primary group relative cursor-pointer">
          <Link to="/">  NEWS </Link>
            {/* <div className="group-hover:block dropdown-menu absolute hidden transition-all duration-300 translate-y-2 h-auto top-10 md:-left-10">
              <div className="top-0 bg-black shadow-xl shadow-white/20 text-white text-xs w-52 flex flex-col">
                <Link to="/whyi2v" className=" hover:bg-primary hover:text-white py-2 m-1">
                  WHY I2V ?
                </Link>
                <Link to="/whyi2v" className=" hover:bg-primary hover:text-white py-2 m-1">
                  WHY I2V ?
                </Link>
              </div>
            </div> */}
          </li>
          {/* for mobile start */}
          <li className="md:hidden block">
            <Link to="/"> <div className="py-2 text-white flex items-center justify-center w-full">
              NEWS

            </div> </Link>
          </li>
          {/* <li className="md:hidden block">
            <Link to="/"> <div className="py-2 text-white flex items-center justify-center w-full">
             Contact Us

            </div> </Link>
          </li> */}
          {/* for mobile end */}
        </ul>
        <div className="drop-shadow-2xl md:block hidden group">
          {/* <div className="hover:animate-pulse px-8 py-2 text-sm uppercase  border-2 border-[#EC2028]  font-semibold  rounded-full  group-hover:bg-primary">
            <Link
              to="/"
              onClick={closeMenu}
              className="link-color  text-white group-hover:text-white "
            >
              Contact Us
            </Link>
          </div> */}
        </div>


        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
      </nav>
      {/* <hr
        className={color ? "bg-black text-black" : "bg-white  w-[93%] mx-auto"}
      /> */}
    </div>
  );
};

export default Navbar;
