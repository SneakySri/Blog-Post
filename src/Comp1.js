import React from "react";



const Card=(props)=>{
    return (
    <div className='ui card' >
        <div className='comment' >
            <div className='ui comments'>
                <a href='/' className=''>
                    <img  src={props.image} alt='blog-post'  height="170px" width="262px"/>
                </a>
                </div>
                <div className='content'>
                    <a href={props.address} className='author'></a>
                </div> 
                {/* <div className='metadata'> */}
                    <div className='ui header'>{props.name}</div>
                    
                    <div className='text'>{props.desc}</div>

                    <div class='text'>{props.price}/-</div>
                    
         </div>
             {/* </div> */}
            
    </div>
    );
}

export default Card;