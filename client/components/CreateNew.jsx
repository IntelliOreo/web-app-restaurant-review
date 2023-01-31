import React, { Component, useState, useRef, useEffect } from 'react';
import uuid from "react-uuid";
import "./CreateNew.Style.css";
import axios from 'axios';


function CreateNew () {
  
    const bodyRef = useRef();
    const titleRef = useRef();
    const [newNote, setNewNote] = useState({});
    const [notes, setNotes] = useState([]);

    const onAddNote = () => {
      console.log('hi');
      const newNoteTemplete = {
       id: uuid(),
       title: titleRef.current.value,
       body:bodyRef.current.value,
       date : new Date().toLocaleDateString(),
      };
      setNewNote( newNoteTemplete );
      setNotes([ newNoteTemplete, ...notes]);
      
      const url = 'http://localhost:8050/api/db'
      axios.post(
        url,
        newNoteTemplete,
        )
        .then(function(response){
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        }
      );

  }

  return (
  <div className = "text-background"> 
   <div className="text-body">
     <input className="input-title" type ="text" id="title" placeholder="Title here" ref={titleRef} /> 
         <input className= "text-box" type="text" id="input"  placeholder="Start here" ref={bodyRef}/> 
     
      <button className="bttn"  onClick={onAddNote}>Save</button>
      </div>
  </div>
  );
}
export default CreateNew;

