import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './root/Root';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
      path: "/home",
      loader:()=>fetch('/data.json'),
      element:<Home></Home>, 
      },
      {
        path:"/login",
        element:<LogIn></LogIn>,
      },
      {
        path:"/signup",
        element : <SignUp></SignUp>,
      },
     
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
