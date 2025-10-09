import React from 'react';
import Banner from '../../components/Banner/Banner';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const appsData = useLoaderData();

    return (
        <div>
           <Banner></Banner> 
           <Apps appsData={appsData}></Apps>
        </div>
    );
};

export default Home;