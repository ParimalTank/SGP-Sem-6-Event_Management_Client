import React, {useContext} from "react";
import { EventList } from "../EventList/EventList";
import { UserContext } from '../../context/userContext'
// import SignIn from "../SignIn";
// import { Link, withRouter } from "react-router-dom";
import "./Headerstyle.css";
const Header = () => {
  const {user} = useContext(UserContext)
  return (
    <div class="Navbar">
    <nav>
      <div class="sidebar-top">
      
        <h3 class="hide">Event Management</h3>
      </div>

     
      <div class="sidebar-links">
        <ul>
          <li class="tooltip-element" data-tooltip="0">
            <a href="/events" class="active" data-active="0">
            
              <span class="link hide">Dashboard</span>
            </a>
          </li>
          <li class="tooltip-element" data-tooltip="1">
            <a href="/pre-event" data-active="1">
             
              <span class="link hide">Pre-Event</span>
            </a>
          </li>
          <li class="tooltip-element" data-tooltip="2">
            <a href="/post-event" data-active="2">
              
              <span class="link hide">Post-Event</span>
            </a>
          </li>
          <li class="tooltip-element" data-tooltip="3">
            <a href="/analytics" data-active="3">
              
              <span class="link hide">Analytics</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="sidebar-footer">
        <a href="#" class="account tooltip-element" data-tooltip="0">
          <i class='bx bx-user'></i>
        </a>
        <div class="admin-user tooltip-element" data-tooltip="1">
          <div class="admin-profile hide">
           
            <div class="admin-info">
              <h3>{`${user.firstName} ${user.lastName}`}</h3>
           
            </div>
          </div>
         
        </div>
        
      </div>
    </nav>
    </div>
  );
};

export default Header;
