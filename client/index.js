import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from "react-dom/client"
import App from './App.jsx';
import './style.css';
import { 
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import ErrorPage from './pages/ErrorPage.js';

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    
    ]
  },
])

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter className='main' >
      <App />     
    </BrowserRouter>
  </React.StrictMode>  
);
