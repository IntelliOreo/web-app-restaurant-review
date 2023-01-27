import React, { Component, useState } from 'react';

import ReactDOM from 'react-dom';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import styles from './style.css';

import { 
  createBrowserRouter,
  RouterProvider, 
  
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
    loader: signInLoader,
    children: [
      {
        path: "SignUp",
        element: <SignUp />,
        loader: signUpLoader,
        
      },
    ],
  },
]);

function App() {
    return (
      <div className="main">
        <SignIn />

      </div>
    )    
};

ReactDOM.createRoot(document.getElementById("root")).redner(
  <RouterProvider router={router} />
);

export default App;