import React, { Component, useState } from 'react';
import CreateNew from "./components/CreateNew";
import uuid from "react-uuid";
//import Show from './ShowNotes';


function App() {

    return(
      <div className="main"> 
      <CreateNew />
      </div>
    );
}

export default App;
 