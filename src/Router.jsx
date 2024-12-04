import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLyout from './MainLayout/MainLyout';
import AllSportsEquipment from './Pages/AllSportsEquipment';
import AddEquipment from './Pages/AddEquipment';
import MyEquipmentList from './Pages/MyEquipmentList';
import Home from './Pages/Home';

const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLyout></MainLyout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/AllSportsEquipment',
                element:<AllSportsEquipment></AllSportsEquipment>
            },
            {
                path:'/AddEquipment',
                element:<AddEquipment></AddEquipment>
            },
            {
                path:'/MyEquipmentList',
                element:<MyEquipmentList></MyEquipmentList>
            }
            
        ]
        
    }

])
   

export default Router;