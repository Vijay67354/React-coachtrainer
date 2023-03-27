


import { useInView } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import React, { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";

const Healthlife = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className=" bg-[#feb06f] pt-[65px] pb-[65px] mt-[150px]">
      <div className="container-ats container">
        <div className=" py-9 lg:grid lg:grid-cols-12 gap-8  lg:px-0 px-3">
          <div className="bg-white shadow-md border lg:block hidden  col-span-5  border-gray-200 rounded overflow-hidden group">
            <img
              className="rounded-t-lg group-hover:scale-105 duration-300 w-[720px] h-[290px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA1a3kziYQ-jj841Yi438rNIh-MgpZruKIOUyXC_vW&s"
              alt=""
            />

            <div className="p-5 space-y-4">
              <h5 className="font font-bold text-xl tracking-tight mb-2">
                Tips and Tricks to find the best inverter battery for your house
              </h5>

              <p className="h-[2px] bg-black w-100"></p>
              <p className="font text-black mb-3 text-[17px] leading-6">
                If you are planning to buy an inverter battery for your
                household, then there are several things you should consider. It
                is very important to understand what the right inverter is for
                your home. The power requirements at your home can be different
                from those at your neighbor’s home.
              </p>
              <div className="italic tracking-widest  font-medium rounded-lg text-sm flex justify-between md:px-6">
                <p>( 06/07/2022 )</p>
                <Link
                  to="/blog-detail1"
                  className="italic   text-[#5eD1E3] font- rounded-lg text-sm"
                >
                  Read More
                </Link>
              </div>
             
            </div>
          </div>
          <div className="col-span-7 space-y-4">
            <h2 className="text-4xl font-semibold uppercase   tracking-widest font ">
              <span className="font">Our</span> Blog
              <h2
                className="w-24 h-[2px] bg-black mt-2"
                ref={ref}
                style={{
                  transform: isInView ? "none" : "translateX(200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              ></h2>
            </h2>

            <p className="text-[16px] font-semibold lg:flex font tracking-wider">
              Know more about the industry and the market of batteries. Read,
              Learn, and get lit up with knowledge and ATS Solar.
            </p>
            <div className="bg-white shadow-md border  lg:hidden block   col-span-5 border-gray-200 rounded overflow-hidden group">
              <img
                className="rounded-t-lg group-hover:scale-105 duration-300 w-full h-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1NEEIl_5_hbZnpZHIxIFLfHBp1aSAd13Uw0MesCCD&s"
                alt=""
              />

              <div className="p-5 space-y-4">
                <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2 font">
                  Tips and Tricks to find the best inverter battery for your
                  house
                </h5>

                <p className="h-[2px] bg-primary w-100"></p>
                <p className="font-normal font mb-3 text-sm leading-6">
                  If you are planning to buy an inverter battery for your
                  household, then there are several things you should consider.
                  It is very important to understand what the right inverter is
                  for your home. The power requirements at your home can be
                  different from those at your neighbor’s home.
                </p>
                <div className="italic tracking-widest  font-medium rounded-lg text-sm flex justify-between md:px-6">
                  <p>( 06/07/2022 )</p>
                  <Link
                    to="/blog-detail1"
                    className="italic text-[#5eD1E3]   font font-medium rounded-lg text-sm"
                  >
                    Read More
                  </Link>
                </div>
       
              </div>
            </div>
            <div className="lg:flex gap-4  ">
              <div className="bg-white shadow-md border border-gray-200 rounded group overflow-hidden">
                <img
                  className="rounded-t-lg w-full group-hover:scale-105 duration-300"
                  src="https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                />

                <div className="p-4">
                  <h5 className="font font-bold text-xl tracking-tight mb-2">
                    How to Take Care of Your Inverter Battery
                  </h5>

                  <div className="italic tracking-widest  font-medium rounded-lg text-sm flex justify-between md:px-6">
                    <p>( 08/08/2022 )</p>
                    <Link
                      to="/blog-detail1"
                      className="italic  text-[#5eD1E3] font font-medium rounded-lg text-sm"
                    >
                      Read More
                    </Link>
                  </div>
             
                </div>
              </div>
              <div className="bg-white shadow-md border lg:mt-0 mt-5 border-gray-200 rounded group overflow-hidden">
                <img
                  className="rounded-t-lg w-full group-hover:scale-105 duration-300"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKDq0o7fSDRgG3gyxH9Mx8I0aF4BG0SxK9X7WqSsc&s"
                  alt=""
                />

                <div className="p-4">
                  <h5 className="font font-bold text-xl tracking-tight mb-2">
                    What does your heavy-duty battery need?
                  </h5>

                  <div className="italic tracking-widest  font-medium rounded-lg text-sm flex justify-between md:px-6">
                    <p>( 15/05/2022 )</p>
                    <Link
                      to="/blog-detail1"
                      className="italic text-[#5eD1E3] font font-medium rounded-lg text-sm"
                    >
                      Read More
                    </Link>
                  </div>
                  {/* <div className="italic tracking-widest focus:ring-4  font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                    ( 15/05/2022 )
                  </div>
                  <div>
                    <Link
                      to="/blog-detail3"
                      className="italic focus:ring-4 text-primary float-right  font-medium rounded-lg text-sm px-3 py-2  inline-flex items-center"
                    >
                      Read More
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            <p>
              <NavLink to="/blog">
                <button className="flex gap-3 items-center  lg:mx-0 md:mx-5 px-10  justify-items-center group bg-white rounded-full lg:px-6 py-2 cursor-pointer">
                  <BsArrowRight
                    size={24}
                    className="font text-black group-hover:translate-x-2 duration-150"
                  />
                  <p className="text-[#5eD1E3]">Know More</p>
                </button>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healthlife;

























// @tailwind base;
// @tailwind components;
// @tailwind utilities;
// .loader {
//     border: 16px solid #f3f3f3;
//     border-radius: 50%;
//     border-top: 16px solid #3498db;
//     width: 5px;
//     height: 5px;
//     -webkit-animation: spin 2s linear infinite;
//     animation: spin 2s linear infinite;
//     align-items: center;
//     text-align: center;
//     margin: auto;
// }

// @-webkit-keyframes spin {
//     0% {
//         -webkit-transform: rotate(0deg);
//     }
//     100% {
//         -webkit-transform: rotate(360deg);
//     }
// }

// @keyframes spin {
//     0% {
//         transform: rotate(0deg);
//     }
//     100% {
//         transform: rotate(360deg);
//     }
// }

// .App {
//     text-align: center;
// }

// .App-logo {
//     height: 40vmin;
//     pointer-events: none;
// }

// @media (prefers-reduced-motion: no-preference) {
//     .App-logo {
//         animation: App-logo-spin infinite 20s linear;
//     }
// }

// .App-header {
//     background-color: #282c34;
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     font-size: calc(10px + 2vmin);
//     color: white;
// }

// .App-link {
//     color: #61dafb;
// }

// @keyframes App-logo-spin {
//     from {
//         transform: rotate(0deg);
//     }
//     to {
//         transform: rotate(360deg);
//     }
// }

// .App {
//     text-align: center;
// }

// .containeri {
//     padding-left: 24px;
//     padding-right: 24px;
// }

// .shadowbox:hover {
//     box-shadow: 5px 5px #EA1D2480;
// }

// .shadowtext {
//     text-shadow: 2px 2px #000;
// }

// .floating {
//     -webkit-animation-name: floating;
//     animation-name: floating;
//     -webkit-animation-duration: 3s;
//     animation-duration: 3s;
//     -webkit-animation-iteration-count: infinite;
//     animation-iteration-count: infinite;
//     -webkit-animation-timing-function: ease-in-out;
//     animation-timing-function: ease-in-out;
//     margin-top: 5px;
// }

// .boxShadow {
//     box-shadow: 2px 2px 13px 0px #00000063;
//     ;
// }

// .App-logo {
//     height: 40vmin;
//     pointer-events: none;
// }

// @media (prefers-reduced-motion: no-preference) {
//     .App-logo {
//         animation: App-logo-spin infinite 20s linear;
//     }
// }

// .App-header {
//     background-color: #282c34;
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     font-size: calc(10px + 2vmin);
//     color: white;
// }

// .App-link {
//     color: #61dafb;
// }

// @keyframes App-logo-spin {
//     from {
//         transform: rotate(0deg);
//     }
//     to {
//         transform: rotate(360deg);
//     }
// }

// .box {
//     box-shadow: 5px 5px 35px rgba(0, 0, 0, 0.25);
// }


// /* Navbar --start*/

// .header {
//     position: fixed;
//     height: 80px;
//     width: 100%;
//     top: 0;
//     left: 0;
//     z-index: 1;
//     transition: .3s ease-in;
//     overflow: visible;
// }

// .header-bg {
//     background-color: #185a80f0;
//     z-index: 100;
//     box-shadow: 2px 2px 4px #000000;
// }

// .header .navbar {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     max-width: 1150px;
//     margin: auto;
//     height: 100%;
//     /* overflow: visible; */
// }

// .textclass {
//     font-size: 0.8rem !important;
// }

// .nav-item {
//     font-size: 1rem;
// }


// /* .nav-item a:hover{
//     color:#F6B803;
//   } */


// /* .header .navbar img {
//     width: 205px;
//     height: auto;
//   } */

// .header .nav-menu {
//     display: flex;
// }

// .spacingYlogo {
//     padding-top: -40px;
// }

// .spacingYtext {
//     padding-top: -30px;
// }

// .spacinglogo {
//     padding-top: 10px;
// }

// .spacingtext {
//     padding-top: 60px;
// }

// .header .nav-item {
//     padding: 1rem;
//     font-weight: 500;
// }

// .rajez {
//     z-index: 99!important;
// }

// .hamburger {
//     display: none;
// }

// .dropdown-menu {
//     visibility: visible;
// }

// .dropdown-mobile {
//     display: none;
// }

// @media screen and (max-width:940px) {
//     .nav-item a {
//         color: #fff;
//     }
//     .header {
//         max-width: 100%;
//         padding: 0px 12px;
//         background-color: black;
//     }
//     .header .navbar {
//         max-width: 90%;
//     }
//     .hamburger {
//         display: block;
//     }
//     .nav-menu {
//         position: fixed;
//         right: -100%;
//         top: 81px;
//         flex-direction: column;
//         background-color: rgba(0, 0, 0, .9);
//         width: 100%;
//         height: 100vh;
//         overflow-y: scroll;
//         z-index: 999;
//         text-align: center;
//         transition: .3s;
//     }
//     .nav-menu.active {
//         right: 0;
//     }
//     .nav-item {
//         margin: 1.5rem 0;
//     }
//     /* .header .navbar img {
//         width: 150px;
//     } */
//     .dropdown-menu {
//         visibility: hidden;
//     }
//     .dropdown-mobile {
//         display: none;
//     }
// }


// /* footerend */