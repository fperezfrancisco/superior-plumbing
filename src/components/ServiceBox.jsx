import React from "react";
import { FaFaucetDrip } from "react-icons/fa6";

function ServiceBox({ service }) {
  return (
    <div className="w-full min-w-[250px] max-w-[350px] flex flex-col px-6 py-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition ease-linear">
      <p className="title text-lg font-semibold">{service.service}</p>
      <p className="description text-xs text-gray-500 py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur
        nulla minus.
      </p>
      <div className="iconContainer flex p-4 items-center justify-center text-[4rem] text-blue-900">
        {service.icon}
      </div>
    </div>
  );
}

export default ServiceBox;
