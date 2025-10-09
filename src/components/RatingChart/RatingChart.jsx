import React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const RatingChart = ({singleApp}) => { 
  const rating = singleApp.ratings
   const ratingData = rating.map(appRating=>appRating)   
    return (
        <div className='mx-10 py-10'>
            <BarChart width= {1000} height={300} data={ratingData} layout='vertical' barSize={25}>
               <XAxis type='number' ></XAxis> 
               <YAxis dataKey="name" type='category' ></YAxis>
               <Bar dataKey='count' fill="yellow"></Bar>
            </BarChart>
        </div>
    );
};

export default RatingChart;