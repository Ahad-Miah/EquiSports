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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UpdateEquipment from './Components/UpdateEquipment/UpdateEquipment';
import ErrorPage from './Pages/ErrorPage';

const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLyout></MainLyout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/AllSportsEquipment',
                element:<AllSportsEquipment></AllSportsEquipment>,
                loader:()=> fetch('https://assignment-10-server-lovat-two.vercel.app/products')
            },
            {
                path:'/AddEquipment',
                element:<PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
            },
            {
                path:'/MyEquipmentList',
                element:<PrivateRoute><MyEquipmentList></MyEquipmentList></PrivateRoute>
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
                loader:({params})=> fetch(`https://assignment-10-server-lovat-two.vercel.app/products/${params.id}`)
            },
            {
                path:'/update/:id',
                element:<UpdateEquipment></UpdateEquipment>,
                loader: ({params})=> fetch(`https://assignment-10-server-lovat-two.vercel.app/products/${params.id}`)
            }
            
        ]
        
    }

])
   

export default Router;