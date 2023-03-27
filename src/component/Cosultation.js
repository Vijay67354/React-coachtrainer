import React from 'react'
import { FaFacebook } from "react-icons/fa";
import {FaFacebookF} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {GrInstagram} from 'react-icons/gr';
import {IoLogoTwitter} from 'react-icons/io';
const Cosultation = () => {
  return (
    <div>
    
  <div className='grid grid-cols-1 lg:grid-cols-2 mb-[250px]'>
    <div className=' lg:block hidden'>
<div className="grid grid-rows-4 grid-flow-col  ">
  <div className="col-span-2 row-span-2 h-[470px] w-[400px] bg-[#64d2dd]  ">
    
  <div className="container items-center text-center pt-[190px] pl-[60px]">
  <div className="row gap-6">
    <div className="col-sm-1 pt-3  w-[50px] h-[50px] rounded-full bg-white">
        <FaFacebookF className='text-2xl'/>
    </div>
    <div className="col-sm-1 pt-3  w-[50px] h-[50px] rounded-full bg-white">
    <IoLogoTwitter className='text-2xl'/>
    </div>
    <div className="col-sm-1 pt-3  w-[50px] h-[50px] rounded-full bg-white">
    <FaLinkedin className='text-2xl'/>
    </div>
    <div className="col-sm-1 pt-3  w-[50px] h-[50px] rounded-full bg-white">
    <GrInstagram className='text-2xl'/>
    </div>
  </div>
  </div>
  </div>
  <div className="row-span-2 col-span-2 h-[470px] relative  lg:block hidden">
    <img src="https://img.freepik.com/free-photo/dark-gym-ring-experienced-trainer-young-woman-has-kick-boxing-fight_613910-13094.jpg?t=st=1679764063~exp=1679764663~hmac=665f982420e087ed3927d122a7685b2f3e9c31b71f1cfc71c27fefe31920806b" className="h-[470px] relative"/>
    <FaFacebook className='text-5xl absolute ml-[140px] text-white top-[100px]'/>
    <p1 className="text-center top-[150px] text-2xl font-bold pl-[100px] absolute text-white font">Contact us</p1>
    <p2 className="text-center top-[180px] text-2xl font-bold pl-[40px] absolute text-white font">if you have any question</p2>
    <p3 className="absolute top-[220px] text-2xl font-bold pl-[100px] text-white font">954831290</p3>
    <p4 className="absolute text-white  top-[260px] text-2xl font-bold pl-[50px] font">coachtrainer@gmail.com</p4>
  </div>
  <div className="row-span-4  w-[570px] relative">
    <img src="https://img.freepik.com/free-photo/two-brutal-sporty-boxers-have-sparring-boxing-ring-dark-gym_613910-13108.jpg?t=st=1679772349~exp=1679772949~hmac=06c804eef9f5641db71382282118b598eb7e4ec8052e3db894c321303af72ba1" className="h-[940px] relative"/>
  <p className='absolute top-[340px] pl-[67px] text-white text-3xl font'>Change your health in one day</p>
  <p1 className="absolute top-[390px] pl-[137px] text-2xl text-[#64d2dd] italic">Free recommendations</p1>
  <button className='absolute top-[460px] ml-[147px]  text-white btn rounded-[30px] p-2 w-[220px] bg-[#64d2dd] text-2xl'>Get it</button>
  </div>
</div>


</div>
<div className='bg-[#f9f9f9] '>
    <div className='items-center text-center mt-[120px]'>
        <p className='text-5xl mb-3 font '>Request A Free Consultaion</p>
        <div>
        <p1 className="font-family italic text-[#5ED1E3] text-2xl">Going to the gym is a great way to stay in shape and maintain good health. </p1>
        </div>
       <div className='mt-5 grid grid-cols-1 lg:grid-cols-2 container items-center px-[160px]'>
        <div className=''>
        <input type="text" placeholder="your name" className='bg-[#ffffff] w-[260px] p-3'/>
        </div>
        <div className=''>
        <input type="text" placeholder="your e-mail" className='bg-[#ffffff]  w-[260px]  p-3'/>
        </div>
        </div>
    </div>
    <div className='items-center text-center '>
    <input type="text" placeholder="Your message" className='mt-5 bg-[#ffffff]  lg:w-[460px] lg:h-[200px]  p-3'/>
    <div>
    <button className='mt-12 btn rounded-[30px] p-3 w-[220px] bg-[#64d2dd] text-white'>Read My Story</button>
    </div>
    </div>
</div>
</div>

    </div>
  )
}

export default Cosultation





