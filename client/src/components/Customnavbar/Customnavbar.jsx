// import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // for hamburger icons

// const CustomNavbar = ({ brand, brandPath = "/home", links, className = "" }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav
//       className={`bg-red-600 shadow-md fixed top-0 left-0 w-full z-50 ${className}`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//         {/* Brand */}
//         <Link to={brandPath} className="text-white font-bold text-xl tracking-wide hover:opacity-90 transition">
//           {brand}
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden md:flex gap-2 text-white font-medium">
//           {links.map((link, index) => (
//             <NavLink
//               key={index}
//               to={link.path}
//               className={({ isActive }) =>
//                 `px-3 py-2 rounded-lg transition duration-300 ${
//                   isActive
//                     ? "bg-white text-red-600 font-semibold shadow-sm"
//                     : "hover:bg-red-700 hover:text-gray-100"
//                 }`
//               }
//             >
//               {link.label}
//             </NavLink>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Links */}
//       {isOpen && (
//         <div className="md:hidden bg-red-700 text-white px-6 py-4 space-y-3 shadow-lg">
//           {links.map((link, index) => (
//             <NavLink
//               key={index}
//               to={link.path}
//               className={({ isActive }) =>
//                 `block px-3 py-2 rounded-lg transition duration-300 ${
//                   isActive
//                     ? "bg-white text-red-600 font-semibold shadow-sm"
//                     : "hover:bg-red-600 hover:text-gray-100"
//                 }`
//               }
//               onClick={() => setIsOpen(false)} // close menu on click
//             >
//               {link.label}
//             </NavLink>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default CustomNavbar;

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const CustomNavbar = ({ brand, brandPath = "/home", links, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`bg-red-600 shadow-md fixed top-0 left-0 w-full z-50 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        {/* Main container with flex */}
        <div className="flex items-center">
          {/* Brand and Desktop Links container */}
          <div className="flex items-center gap-32"> {/* Adjust gap-4 to control spacing */}
            {/* Brand */}
            <Link to={brandPath} className="text-white font-bold text-xl tracking-wide hover:opacity-90 transition">
              {brand}
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-2 text-white font-medium">
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg transition duration-300 ${
                      isActive
                        ? "bg-white text-red-600 font-semibold shadow-sm"
                        : "hover:bg-red-700 hover:text-gray-100"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ... existing mobile menu code ... */}
    </nav>
  );
};

export default CustomNavbar;