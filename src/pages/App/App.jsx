import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const App = ({ app }) => {
  const { id,title, image, downloads, ratingAvg } = app;

  return (
    <div>
      <Link to={`/appDetails/${id}`}>
        <div className="card bg-base-100 shadow-xl border-1 border-gray-200">
          <figure>
            <img src={image} alt="" className="w-20% h-[150px] py-5 px-2" />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">{title}</h2>
            <div className="card-actions justify-between pt-2">
              <div className="badge bg-[#F1F5E8] text-[#00D390] py-2 ">
                {" "}
                <Download className="py-1"></Download>
                {downloads}
              </div>
              <div className="badge bg-[#FFF0E1] text-[#FF8811] py-2">
                {ratingAvg}
                <i className="fa-solid fa-star-half-stroke"></i>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default App;
