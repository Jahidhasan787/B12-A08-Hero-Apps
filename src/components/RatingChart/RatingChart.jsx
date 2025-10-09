import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const RatingChart = ({ singleApp }) => {
  const rating = singleApp.ratings;
  const ratingData = rating.map((appRating) => appRating);
  return (
    <div className="md:mx-10 mx-5 py-10 w-[90%] h-[300px]">
      <ResponsiveContainer>
        <BarChart data={ratingData} layout="vertical" barSize={25}>
          <XAxis type="number"></XAxis>
          <YAxis dataKey="name" type="category"></YAxis>
          <Bar dataKey="count" fill="yellow"></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
