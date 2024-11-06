import React from 'react';
import './Card.css';
import { AppreciationData } from "../interfaces/data.interface";

export const Card = ({
  achieverName,
  position,
  projectName,
  dateOfAchievement
}: AppreciationData) => {

  return (
    <div id="card" className="min-w-full min-h-full">
      <div className="certificate-content flex flex-col justify-center items-center">
        {/* Logo and Company Name */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full bg-pink-300 flex items-center justify-center mb-2">
            <img src="path/to/logo.svg" alt="Company Logo" className="w-12 h-12" /> {/* Logo inside the circle */}
          </div>
          <span className="poppins-thin text-gray-900 font-bold text-sm">COMPANY NAME</span>
        </div>

        {/* Certificate Title */}
        <h1 className="poppins-bold text-3xl font-bold text-gray-900 mb-4">Certificate of Appreciation</h1>
        <h2 className="poppins-regular text-md font-semibold text-[#D6BBA3] mb-6">THIS CERTIFICATE IS PRESENTED TO</h2>

        {/* Recipient's Name */}
        <div className="bg-[#D6BBA3] rounded-full py-3 px-10 mb-6">
          <span className="poppins-thin text-3xl font-semibold text-gray-900">{achieverName || 'Recipient Name'}</span>
        </div>

        {/* Appreciation Message */}
        <p className="poppins-regular text-gray-600 mb-10 text-sm max-w-lg">
          {/* {personalNote || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.'} */}
        </p>

        {/* Date and Signature */}
        <div className="flex justify-between text-center">
          <div>
            <h3 className="text-xs font-semibold text-gray-600 mb-1">DATE</h3>
            {/* <p className="poppins-thin text-[#D6BBA3] font-semibold">{dateOfAchievement || 'MM/DD/YYYY'}</p> */}
          </div>
          <div>
            <h3 className="text-xs font-semibold text-gray-600 mb-1">SIGNATURE</h3>
            {/* <p className="poppins-thin text-[#D6BBA3] font-semibold">{recognizer || 'Signature'}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
