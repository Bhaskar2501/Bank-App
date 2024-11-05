import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showDrop, setShowDrop] = useState(false);

  const toggleDropdown = () => {
    setShowDrop(!showDrop);
  };
  return (
    <>
      <nav className="flex justify-between items-center w-full px-[7%] py-[10px]">
        <div className="px-4">BANK</div>
        <ul>
          <li className="inline-block my-[10px] mx-[20px] text-[18px] cursor-pointer">
            Home
          </li>
          <li className="inline-block my-[10px] mx-[20px] text-[18px] cursor-pointer">
            About us
          </li>
          <li className="inline-block my-[10px] mx-[20px] text-[18px] cursor-pointer">
            Services
          </li>
          <li className="inline-block my-[10px] mx-[20px] text-[18px] cursor-pointer">
            NRI
          </li>
          <li className="inline-block my-[10px] mx-[20px] text-[18px] cursor-pointer">
            Contact Us
          </li>
        </ul>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="py-2 px-6 rounded-md flex items-center text-[18px] bg-red-500 text-white"
          >
            <FontAwesomeIcon
              className=" h-4 text-white mx-2"
              icon={faUser}
              alt="Your Company"
            />
            Login
          </button>
          {showDrop && (
            <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-300 shadow-lg">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to={"/CustomerLogin"}>For Customers</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to={"/EmployeeLogin"}>For Employees</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
