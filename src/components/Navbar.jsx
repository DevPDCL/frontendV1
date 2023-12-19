import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

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
  
  <nav className={`${styles.paddingX} w-full fixed flex items-center  top-0 z-20 bg-[#3DAC78] `} >
    <div className="w-full  flex flex-wrap justify-between items-center max-w-7xl mx-auto">
    
    <Link to="/" className="flex items-center  gap-2" onClick={() => {setActive(""); window.scrollTo(0, 0);}}>
          <img src={logo} alt="logo" className="w-[70px] h-[70px] p-2 object-contain" />
          
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-5">
            {navLinks.map((link) => 
              <li key={link.id} className={`${
                active === link.title
                ?"text-white"
                :"text-black"} hover:text-white text-[18px] pr-5 border-r-[1px] border-gray-900 font-medium text-center focus:ring-4 text-sm focus:outline-none cursor-pointer`} onClick={() =>{setToggle(!toggle);setActive(link.title)}}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
              
            )}
            <li>
            <a href="#" class="text-white bg-green-300  hover:bg-green-900 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-green-300 dark:hover:bg-green-300 focus:outline-none dark:focus:ring-green-300">Login</a>
            </li>
            

            <li>
            <a href="#" class="text-white bg-blue-300 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-300 dark:hover:bg-blue-300 focus:outline-none dark:focus:ring-blue-300">Sign up</a>
            </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={toggle ? close : menu}  alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />
            <div className={`${!toggle ? 'hidden' :'flex'} p-6 bg-[#3DAC78]  absolute top-20 right-20 mx-4 my-2 min-w-[335px] z-10 rounded-xl`}>
                <ul className="list-none flex justify-start items-start flex-col gap-5">
                {navLinks.map((link) => 
                  <li key={link.id} className={`${
                    active === link.title
                    ?"text-white"
                    :"text-green-900/100"} hover:text-black text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                )}
                <li>
            <a href="#" class="text-white bg-green-300  hover:bg-green-900 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-green-300 dark:hover:bg-green-300 focus:outline-none dark:focus:ring-green-300">Login</a>
            </li>
            

            <li>
            <a href="#" class="text-white bg-blue-300  hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-300 dark:hover:bg-blue-300 focus:outline-none dark:focus:ring-blue-300">Sign up</a>
            </li>
                
                </ul>
            </div>
        </div>
    </div>

  </nav>
  





  </>
  );
};

export default Navbar;
