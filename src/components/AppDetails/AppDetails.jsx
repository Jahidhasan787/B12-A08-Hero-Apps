import React from "react";
import { useLoaderData, useParams } from "react-router";
import ratingImage from "../../assets/icon-ratings.png";
import downloadImage from "../../assets/icon-downloads.png";
import reviewImage from "../../assets/icon-review.png";
import RatingChart from "../RatingChart/RatingChart";

const AppDetails = () => {
  const { id } = useParams();
  const details = useLoaderData();

  const singleApp = details.find((app) => app.id === parseInt(id));
  const {
    image,
    title,
    companyName,
    ratingAvg,
    reviews,
    downloads,
    size,
    description,
  } = singleApp;
  return (
    <div>
      <div className="flex m-10 justify-center items-center gap-10 ">
        <img src={image} className="w-[20%] shadow-sm" alt="" />
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="pb-5">
            Developed by <span className="text-[#632EE3]">{companyName}</span>
          </p>
          <hr className="text-gray-300 " />
          <div className="flex  items-center gap-8 py-5 ">
            <div>
              <img src={downloadImage} alt="" />
              <p className="py-2">Downloads</p>
              <h2 className="text-2xl font-extrabold">{downloads}</h2>
            </div>
            <div>
              <img src={ratingImage} alt="" />
              <p className="py-2">Average Ratings</p>
              <h2 className="text-2xl font-extrabold">{ratingAvg}</h2>
            </div>
            <div>
              <img src={reviewImage} alt="" />
              <p className="py-2">Total Reviews</p>
              <h2 className="text-2xl font-extrabold">{reviews}</h2>
            </div>
          </div>
          <button className="btn text-white bg-[#00D390]">
            Install Now ({size} MB)
          </button>
        </div>
      </div>
      <hr className="text-gray-300 mx-10" />
      <RatingChart singleApp={singleApp}></RatingChart>
      <hr className="text-gray-300 mx-10" />
      <div className="mx-10">
        <h2 className="text-xl font-bold py-5 ">Description</h2>
        <p className="text-gray-500 pb-10">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
