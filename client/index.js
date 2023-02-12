import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.jsx';
import './style.css';
import { 
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './/pages/ErrorPage'
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
