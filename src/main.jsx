import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import FriendDetail from './component/FriendDetail/FriendDetail';
import Friends from './component/Friends/Friends';
import Header from './component/Header/Header';
import './index.css'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path:'/about',
//     element: <About />
//   },
//   {
//     path:'/contact',
//     element: <Contact />
//   }
// ]);

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path:'about',
        element: <About />
      },
      {
        path:'friends',
        element:<Friends />,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friend/:friendId',
        element:<FriendDetail />,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`) 
      },
      {
        path:'contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
