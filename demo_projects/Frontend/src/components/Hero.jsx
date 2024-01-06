import { styles } from '../styles';
import React, { useState } from 'react';
//import './tabs.css';

import video from '../assets/video.mp4';


const Hero = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);

  
  return (
    <>
    <section className='w-full h-screen relative justify-center items-center mx-auto'>
      
       <video className=" w-full h-screen object-cover" src={video} autoPlay loop muted />
       <div className='absolute w-full h-full top-0 left-0 bg-gray-900/50'></div>
      <div className={`${styles.paddingX} absolute inset-0 justify-center items-center text-center flex flex-col  text-white`}>
       <div className="flex flex-wrap max-w-screen-xl bg-gray-900/90 mt-[150px] mx-auto">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-1 pb-2 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3  shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-[#00a884] ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                FIND DOCTORS
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-[#00a884]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 APPOINTMENT
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-[#00a884]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 TEST CHARGES
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0   w-full mb-1 shadow-lg rounded">
            <div className="px-2 py-2 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <form className="max-w-screen-xl p-[25px] mx-auto">
  <div className="grid md:grid-cols-5  md:gap-1">
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Doctors Name" id="floating_first_name" className="block pl-2 py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent pl-2 border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select></div>
<div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent pl-2 border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select></div>
    <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-white-500 bg-transparent border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select></div>
    
<button type="button" className="text-[#00a884] h-[43px] hover:text-white border border-[#00a884] hover:bg-[#00a884] focus:ring-4 focus:outline-none focus:ring-[#00a884] font-medium  text-sm px-5 py-2.5 text-center  mb-0 dark:border-[#00a884] dark:text-[#00a884] dark:hover:text-white dark:hover:bg-[#00a884] dark:focus:ring-[#00a884]">DOCTORS</button>
    
    </div>
 
  
</form>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <form className="max-w-screen-xl  mx-auto">
  <div className="grid md:grid-cols-5  md:gap-1">
    
    <div className="relative z-0 w-full  mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-white-500 bg-transparent border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select></div>
<div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-white-500 bg-transparent border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select></div>
    <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-white-500 bg-transparent border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select></div>
<div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-white-500 bg-transparent border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select></div>
<div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Doctors Name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-white-500 bg-transparent border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Doctors Name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-white-500 bg-transparent border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Doctors Name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-white-500 bg-transparent border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-white-500 bg-transparent border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select></div>
<div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Doctors Name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-white-500 bg-transparent border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <button type="button" className="text-[#00a884] h-[43px] hover:text-white border border-[#00a884] hover:bg-[#00a884] focus:ring-4 focus:outline-none focus:ring-[#00a884] font-medium  text-sm px-5 py-2.5 text-center  dark:border-[#00a884] dark:text-[#00a884] dark:hover:text-white dark:hover:bg-[#00a884] dark:focus:ring-[#00a884]">APPOINTMENT</button>
    
    </div>
 
  
</form>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <form className="max-w-screen-xl p-[25px] mx-auto">
  <div className="grid md:grid-cols-5  md:gap-1">
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Doctors Name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-white-500 bg-transparent border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-white-500 bg-transparent border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select></div>
<div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-white-500 bg-transparent border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select></div>
    <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-white-500 bg-transparent border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select></div>
    
<button type="button" className="text-[#00a884] hover:text-white border h-[43px] border-[#00a884] hover:bg-[#00a884] focus:ring-4 focus:outline-none focus:ring-[#00a884] font-medium  text-sm px-5 py-2.5 text-center  dark:border-[#00a884] dark:text-[#00a884] dark:hover:text-white dark:hover:bg-[#00a884] dark:focus:ring-[#00a884]">CHARGES</button>
    
    </div>
 
  
</form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
     
    </section>
 
    </>
  );
};

export default Hero;
