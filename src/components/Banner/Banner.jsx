import React from "react";
import heroImage from "../../assets/hero.png";
import googleStore from "../../assets/images.png";
import appStore from "../../assets/icon_appstore__ev0z770zyxoy_large_2x.png";

const Banner = () => {
  return (
    <div className="text-center my-10">
      <h1 className=" text-5xl font-extrabold">
        We Build <br />
        <span className="text-[#632EE3]">Productive</span> Apps
      </h1>
      <p className="py-5 text-[#627382]">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>
      <div className="flex justify-center pb-5 gap-5">
        <a href="https://play.google.com/store/games?hl=en" target="_blank">
          <button className="btn p-5">
            <img src={googleStore} className="w-[30px]" alt="" />
            Google Play
          </button>
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank">
          <button className="btn p-5">
            <img src={appStore} className="w-[25px]" alt="" />
            App Store
          </button>
        </a>
      </div>
      <img className="w-[50%] mx-auto" src={heroImage} alt="" />
      <div className="text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-20">
        <h2 className="text-4xl font-bold pb-10">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center w-[50%] mx-auto">
          <ul>
            <li>Total Downloads</li>
            <li className="text-5xl font-bold py-3">29.6M</li>
            <li>21% more than last month</li>
          </ul>
          <ul>
            <li>Total Reviews</li>
            <li className="text-5xl font-bold py-3">906K</li>
            <li>46% more than last month</li>
          </ul>
          <ul>
            <li>Active Apps</li>
            <li className="text-5xl font-bold py-3">132+</li>
            <li>31 more will Launch</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
