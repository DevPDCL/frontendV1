import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close,login,signup, star2, telephone, about, gmail } from "../assets";

const Navbar = () => {
  
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
   
  
  
  <nav className={`${styles.paddingX} w-full fixed flex items-center  top-12 z-20 bg-[#00a884]`} >
  <div className="w-full h-[70px] flex flex-wrap justify-between max-w-7xl text-white  mx-auto" >
    
  <div className="w-full h-[70px] flex flex-row max-w-7xl justify-between  items-center  mx-auto">
     <Link to="/" className="flex items-center  gap-2" onClick={() => {setActive(""); window.scrollTo(0, 0);}}>
          <img src={logo} alt="logo" className="w-[40px] h-[40px]  object-contain" />
          
        </Link>
        <ul className="list-none hidden sm:flex ms-auto flex-row gap-5">
            {navLinks.map((link) => 
              <li key={link.id} className={`${
                active === link.title
                ?"text-white"
                :"text-white"} hover:text-black text-[18px] pr-5  border-gray-900 font-small text-center focus:ring-4 text-sm focus:outline-none cursor-pointer`} onClick={() =>{setToggle(!toggle);setActive(link.title)}}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
              
            )}
            <div className="flex ml-4 sm:justify-center  md:mt-0 space-x-5 rtl:space-x-reverse max-w-7xl ms-auto">
        

        <a href="#" className="text-black-400 hover:text-gray-900 dark:hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-[27px] h-[27px]" fill="currentColor"  viewBox="0 0 20 20"> <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path fill="currentColor" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/> </svg> 
              <span className="sr-only">Login page</span>
          </a>
        <a href="#" className="text-black-400 hover:text-gray-900 dark:hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-[27px] h-[27px]" fill="currentColor"  viewBox="0 0 20 20"> <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/> <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/> </svg> 
              <span className="sr-only">Register page</span>
          </a>
        
          
          
    </div>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={toggle ? close : menu}  alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />
            <div className={`${!toggle ? 'hidden' :'flex'} p-6 bg-[#00a884]  absolute top-20 right-20 mx-4 my-2 min-w-[335px] z-10 rounded-xl`}>
                <ul className="list-none flex justify-start items-start flex-col gap-5">
                {navLinks.map((link) => 
                  <li key={link.id} className={`${
                    active === link.title
                    ?"text-white"
                    :"text-white"} hover:text-black text-[18px] font-small cursor-pointer`} onClick={() => setActive(link.title)}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                )}
               
            <div className="flex ml-4 sm:justify-center  md:mt-0 space-x-5 rtl:space-x-reverse max-w-7xl ms-auto">
            <a href="#" className="text-black-400 hover:text-gray-900 dark:hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-[27px] h-[27px]" fill="currentColor"  viewBox="0 0 20 20"> <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path fill="currentColor" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/> </svg> 
              <span className="sr-only">Login page</span>
          </a>
        <a href="#" className="text-black-400 hover:text-gray-900 dark:hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-[27px] h-[27px]" fill="currentColor"  viewBox="0 0 20 20"> <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/> <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/> </svg> 
              <span className="sr-only">Register page</span>
          </a>
        <a href="#" className="text-black-400 hover:text-gray-900 dark:hover:text-black">
              <svg className="w-[20px] h-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                </svg>
              <span className="sr-only">Facebook page</span>
          </a>
          <a href="#" className="text-black-400 hover:text-gray-900 dark:hover:text-black">
              <svg className="w-[20px] h-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" clip-rule="evenodd"/>
                </svg>
              <span className="sr-only">Discord community</span>
          </a>
          <a href="#" className="text-black-400 hover:text-gray-900 dark:hover:text-black">
              <svg className="w-[20px] h-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
            </svg>
              <span className="sr-only">Twitter page</span>
          </a>
          <a href="#" className="text-black-400 hover:text-gray-900 dark:hover:text-black">
              <svg className="w-[20px] h-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
              </svg>
              <span className="sr-only">GitHub account</span>
          </a>
          
         
    </div>
                </ul>
            </div>
        </div>

    
        
      </div>

  
</div>

    
  </nav>










  </>
  );
};

export default Navbar;
