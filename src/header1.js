import React from "react";
import {Link} from 'react-router-dom';

const Head=()=>{
  return(
   <div>
   <div class="ui inverted attached stackable menu">
    <h2 class="ui header">
          <i class="inverted handshake icon"></i> 
      <div style={{color:"white",margin:"0px"}}>
        Academia
       <div style={{color:"white",fontSize:"20px"}}>"learn which suits you"</div>
     </div>
    </h2>
   <div class="ui container">
      <a class="item">
         <i class="home icon"></i><Link to="/home">Home</Link> 
      </a>
      <a class="item">
        <i class="grid layout icon"></i><Link to="/about">About</Link>
      </a>
      <a class="item">
        <i class="mail icon"></i><Link to="/contact">Contact</Link>
      </a>
      <div class="ui simple dropdown item">
        More
      <i class="dropdown icon"></i>
      <div class="menu">
          <i class="edit icon"></i><Link class="item" to="/register">Edit Profile</Link>
          <i class="globe icon"></i><Link class="item" to="/signin">Sign-in</Link>
          <i class="settings icon"></i><Link class="item" to="/">Account Settings</Link>
       </div>
   </div>
   <div class="right item">
     <div class="ui input"><input type="text" placeholder="Search..."/></div>
     <a class="item">
        <i class="sort amount up icon"></i><Link to="/signup">Sign-up</Link>
      </a>

      <a class="item">
        <i class="sign in alternate icon"></i><Link to="/signin">Sign-in</Link>
      </a>
   </div>
 </div>
</div>
   </div>
  );
}

export default Head;