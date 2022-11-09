import React from "react";


const Box=(props)=>{
    
    return(
        <div >
        <div className='ui card' style={{marginLeft: "35px",backgroundColor:"white",marginBottom:"25px",marginTop:"25px"}}>
            <div className='content'>
                <div className='header'>{props.name}</div>
                <div className='description'>{props.children}</div>
                <div class="ui labeled button" tabindex="0">
                
                </div>
                
                <div className='ui bottom attached button' >
                     <i className="add icon"></i>
                    Add to favourite         
                </div>
                
            </div>
        </div>
      </div>
    );


}
function Add(){
    return(alert("add to favorite"));   
}
export default Box;