import React from "react";


const Foot=()=>{


//     return(
//        <div>                    
//           <div class="ui bottom attached button" tabindex="0">
//           <button class="ui circular facebook icon button">
//             <i class="facebook icon"></i>
//           </button>
//           <button class="ui circular twitter icon button">
//             <i class="twitter icon"></i>
//           </button>
//           <button class="ui circular linkedin icon button">
//             <i class="linkedin icon"></i>
//           </button>
//           <button class="ui circular google plus icon button">
//             <i class="google plus icon"></i>
//           </button>
//           </div>
//        </div>
//     );

return(
    <div className="main-footer">
    <div style={{backgroundColor:"black"}}>
    
        <div style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"black",color:"white"}}>
            <div>
                <h4>IT park pvt lmt INC</h4>
                <ul >
                    <li style={{listStyle:"none"}}>342-879-1298</li>
                    <li style={{listStyle:"none"}}>Tamilnadu, India</li>
                    <li style={{listStyle:"none"}}>121 Anna nagar Chennai</li>
                </ul>
            </div>
            <div>
                <h4>Stuffs</h4>
                <ul className="list-unstyled" >
                    <li style={{listStyle:"none"}}>Developing</li>
                    <li style={{listStyle:"none"}}>Testing</li>
                    <li style={{listStyle:"none"}}>Supporting </li>
                </ul>
            </div>
            <div >
                <h4>Offers</h4>
                <ul className="list-unstyled">
                    <li style={{listStyle:"none"}}>Enabling</li>
                    <li style={{listStyle:"none"}}>Pension</li>
                    <li style={{listStyle:"none"}}>recreating </li>
                    
                </ul>
            </div>
        </div>
        <hr />
        <div style={{textAlign:"center" }}>
            <p >
                &copy;{new Date().getFullYear()} IT park pvt lmt INC | All rights reserved | Terms of Service | Privacy
            </p>
        </div> 
    </div>
  </div>
    )
  }
  
  export default Foot;
  