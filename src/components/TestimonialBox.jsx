import React from "react";
import { ImQuotesRight } from "react-icons/im";

function TestimonialBox({ name, img }) {
  return (
    <div className="w-[250px] md:w-[300px] lg:w-[420px] p-4 bg-white rounded-lg flex flex-col justify-between relative ">
      <ImQuotesRight className="absolute -top-4 text-[2.25rem] right-10 text-yellow-400" />
      <p className="text-black text-sm opacity-75 pr-2 mb-3 pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
        consequatur!
      </p>
      <div className="userBox flex gap-3 w-full items-start justify-start pb-2">
        <div className="userPic rounded-full w-[50px] h-[50px] bg-gray-300 overflow-hidden border-[3px] border-blue-900">
          <img src={img} alt="user image" className="object-cover " />
        </div>
        <div className="flex flex-col items-start ">
          <p className="name font-bold text-[1.25rem]">{name}</p>
          <p className="font-light text-sm">Customer</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialBox;
