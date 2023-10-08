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
import Error from './pages/Error/Error';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <Error></Error>,
    children:[
      {
      path: "/",
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
