import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root/Root';
import Error from '../pages/ErrorPage/Error';
import Home from '../pages/Home/Home';
import AllApps from '../components/AllApps/AllApps';
import AppDetails from '../components/AppDetails/AppDetails';
import Installation from '../pages/Installation/Installation';



 export const router =createBrowserRouter([
  {
    path:"/",
    Component: Root, 
    errorElement: <Error></Error>,
    children:[
        {
            index: true,
            loader: ()=>fetch("/app.json"),
            path: "/",
            Component:Home,
        },
        {
            path:"/Apps",
            loader:()=>fetch("/allApps.json"),
            Component: AllApps,
        },
        {
            path:"/installation",
            loader:()=>fetch("/allApps.json"),
            Component:Installation,
        },
        {
            path:"*",
            Component:Error,
        },
        {
            path:"/appDetails/:id",
            loader:()=>fetch("/allApps.json"),
            Component: AppDetails,
        }
        
    ]
     
  }
])