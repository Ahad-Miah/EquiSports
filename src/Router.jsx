import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLyout from './MainLayout/MainLyout';
import AllSportsEquipment from './Pages/AllSportsEquipment';
import AddEquipment from './Pages/AddEquipment';
import MyEquipmentList from './Pages/MyEquipmentList';
import Home from './Pages/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Details from './Pages/Details';

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
                element:<AllSportsEquipment></AllSportsEquipment>,
                loader:()=> fetch('http://localhost:5000/products')
            },
            {
                path:'/AddEquipment',
                element:<AddEquipment></AddEquipment>
            },
            {
                path:'/MyEquipmentList',
                element:<MyEquipmentList></MyEquipmentList>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            }
            
        ]
        
    }

])
   

export default Router;