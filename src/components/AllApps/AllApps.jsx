import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import App from "../../pages/App/App";


const AllApps = () => {
  const allApps = useLoaderData();
  return (
    <div>
      <div className="text-center w-[70%] mx-auto md:w-[100%] py-4">
        <h1 className="text-3xl font-bold mb-2">Our All Applications</h1>
        <p className="text-[#627382] mb-8">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="mx-10 px-5 flex justify-between ">
        <p className="text-xl font-bold">({allApps.length})Apps Found</p>
        <input type="text" placeholder="Search" className="px-3 outline-1 outline-gray-300"/>
      </div>
      
      <Suspense fallback={<p>loading...</p>}>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-5 m-10">
          {allApps.map((app) => (
            <App key={app.id} app={app}></App>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default AllApps;
