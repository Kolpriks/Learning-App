import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/login/Login';
import Start from './components/start/Start';
import Home from './components/home/Home';
import './index.css'
import Registration from './components/registration/Registration';



const router = createBrowserRouter([
	{
		path: '/',
		element: <Start/>,
	},
	{
		path: '/login',
		element: <Login/>,
	},
	{
		path: '/registration',
		element: <Registration/>,
	},
	{
		path: '/home',
		element: <Home/>,
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<RouterProvider router={router}/>
  </React.StrictMode>
);


