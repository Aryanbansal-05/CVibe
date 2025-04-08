import React from "react";
import { NavLink } from "react-router";
import resume1Icon from "./assets/1stresume.png"; // adjust path if needed
import resume2Icon from "./assets/2ndresume.png"; // adjust path if needed

export const Navbar = () => {
    return (
     
        
        <nav className=" flex justify-center gap-20 pt-15 pb-10 border-sm">

            <NavLink 
                to="/App" 
                className={({ isActive }) => 
                    isActive ? "text-blue-700 font-bold underline" : "text-gray-700"
                }
                end
            >
               <img 
    src={resume1Icon} 
    alt="1st Resume" 
    className="w-110 h-150 border-5 border-gray-900 rounded-lg transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-blue-200" 
  />

            </NavLink>
            <NavLink 
                to="/App2" 
                className={({ isActive }) => 
                    isActive ? "text-blue-700 font-bold underline" : "text-gray-700"
                }
                end
            >
              <img 
    src={resume2Icon} 
    alt="2st Resume" 
    className="w-107 h-150 border-5 border-gray-900 rounded-lg transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-blue-200" 
  />
 
            </NavLink>
        </nav>
       
       
    );
};
