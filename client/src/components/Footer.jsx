import React from 'react'
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className = "bg-gray-700 m-auto w-full h-60 mt-[70px]">
      <div className = "flex justify-center items-center h-40 w-full h-16 gap-10 ">
            <div className = "bg-gray-00 w-80 h-[150px] text-center text-gray-100 mt-[80px]">
                <h1 className ="font-semibold">Blood Bank Management System</h1>
                <p className = "mt-5">Efficiently managing blood donations and distribution to save lives.</p>
            </div>

            <div className = "bg-gray-00 w-80 h-[150px] place-items-center text-gray-100 mt-[80px]">
                <div className = "">
                    <h1 className = "font-semibold">Contact Us</h1>
                    <p className = "flex items-center gap-1"><FaLocationDot/> Address</p>
                    <p className = "flex items-center gap-1"><FaPhone/> Phone</p>
                    <p className = "flex items-center gap-1"><MdEmail/> Email</p>
                </div>
            </div>

            <div className = "bg-gray-00 w-80 h-[150px] place-items-center text-gray-100 mt-[80px]">
                <h1 className = "font-semibold">Quick Links</h1>
                <p>Become a Donor</p>
                <p>Request Blood</p>
                <p>Upcoming Drives</p>
                <p>FAQ</p>
            </div>
      </div>

      <div className="w-full h-20 text-center">
                <h1 className = "pt-6 text-gray-100">© 2025 Blood Bank Management System. All rights reserved.</h1>   
      </div>

    </div>
  )
}

export default Footer