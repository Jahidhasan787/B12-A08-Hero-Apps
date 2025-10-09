import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreApp } from "../../components/Utility/addToLocalS";
import InstalledApp from "../../components/InstalledApp/InstalledApp";

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedAppData = getStoreApp();
    const intStoredAppData = storedAppData.map((id) => parseInt(id));
    const myInstallation = data.filter((app) =>
      intStoredAppData.includes(app.id)
    );
    setInstallation(myInstallation);
  }, []);

  return (
    <div>
      <div className="text-center w-[70%] mx-auto md:w-[100%] py-4">
        <h1 className="text-3xl font-bold mb-2">Trending Apps</h1>
        <p className="text-[#627382] mb-8">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="mx-12">
        <h2 className="font-bold">{installation.length} Apps Found</h2>
      </div>
      <div className="md:min-h-[380px] min-h-[500px]">
        {installation.map((app) => (
          <InstalledApp key={app.id} app={app}></InstalledApp>
        ))}
      </div>
    </div>
  );
};

export default Installation;
