//import logo from './logo.svg';
import "./App.css";
// import { useState, createContext, useReducer, useContext, useEffect } from 'react';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
// import Homepage from './components/HomePage';
// import Sidebar from "./components/Sidebar";
// import CreateEvent from './components/CreateEvent';
// import PrePdf from './components/PrePdf';
// import EventPdf from './components/EventPdf'
// import PostEvent from './components/PostEvent';
// import EditEvent from './components/EditEvent';
// import DeleteEvent from './components/DeleteEvent';
// import Dashboard from './components/Dashboard';
// import State from './components/State';
// import Post from './components/PosteExam';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PreEvent from "./components/PreEvent/PreEvent";
import Header from "./components/Header/Header";
import PostEvent from "./components/PostEvent/PostEvent";
import { EventList } from "./components/EventList/EventList";
import EventDetail from "./components/EventDetail/EventDetail";

const Routing = () =>{
  return(
<div>
    
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pre-event" element={<PreEvent />} />
        <Route path="/post-event" element={<PostEvent/>} />
        <Route path="/events" element={<EventList/>} />
        <Route path="/eventdetail" element={<EventDetail/>} />
      </Routes>
    </Router>
    </div>
  );
  
}


function App() {

  return (
   
    <div className="App">
      <Header/>
      <Routing/>
    </div>
  
  );
}

export default App;
