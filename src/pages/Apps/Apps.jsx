import React, { Suspense } from "react";
import App from "../App/App";
import { NavLink } from "react-router";

const Apps = ({ appsData }) => {
  return (
    <div>
      <div className="text-center w-[70%] mx-auto md:w-[100%] py-4">
        <h1 className="text-3xl font-bold mb-2">Trending Apps</h1>
        <p className="text-[#627382] mb-8">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <Suspense fallback={<p>loading...</p>}>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-5 m-10">
          {appsData.map((app) => (
            <App key={app.id} app={app}></App>
          ))}
        </div>
      </Suspense>
      <div className="text-center mb-20">
        <NavLink to='/Apps'><button className=" btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white ">
          Show All
        </button></NavLink>
      </div>
    </div>
  );
};

export default Apps;
