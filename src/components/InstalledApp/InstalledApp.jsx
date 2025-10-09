import React from "react";

const InstalledApp = ({ app }) => {
  const { image, title, downloads, size, ratingAvg } = app;
  return (
    <div className="flex gap-5 flex-col md:flex-row justify-between items-center m-3 md:m-10 bg-[#f6efef] p-5 rounded">
      <div className="flex gap-5  ">
        <img src={image} className="w-[30%] md:w-[5%]" alt="" />
        <div>
          <h2 className="font-bold">{title}</h2>
          <p className="space-x-4">
            <span className="text-[#00D390]"> {downloads}</span>
            <span className="text-[#FF8811]"> {ratingAvg}<i className="fa-solid fa-star-half-stroke"></i></span>
            <span className="text-[#627382]"> {size}MB</span>
          </p>
        </div>
      </div>
      <button className="btn bg-[#00D390] text-white">Uninstall</button>
    </div>
  );
};

export default InstalledApp;
