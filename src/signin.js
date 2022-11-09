import React from "react";



const Signin = () =>{

    let list=[
        {
            name:"sri",
            pass:"111"
        },
        {
            name:"pra",
            pass:"222"
        }
    ];

    const check=()=>{
        var flag=0;
        const Name=document.getElementById("name").value;
        const Pass=document.getElementById("pass").value;
        alert(Name+Pass);

        var l=list.length;
    for(var j=0;j<l;j++){
        if(list[j].name==Name){
            flag=1;
            if(list[j].pass==Pass){
                flag=2;
                alert("correct");
                
                window.location.href="/home";
                 
                alert("working");
            }
            if(flag==1){alert("Enter crt password");} 
            break;
        }
    }
    if(flag==0){alert("User not found");} 
    }



    return (
        <div >
           
            
           <div style={{height:"700px" ,width:"600px" ,backgroundColor:"",borderRadius:"50px",marginLeft:"435px",borderTop: "44px"}}>
                
           
                <form style={{fontSize:"25px",backgroundColor:"",textAlign:"center",fontFamily:"cursive",borderRadius:"50px"}}>
                    <h1>Academia Sign-in</h1>
                
                <br />
                <label>Name:</label>
                <br />
                <br />
                 <input style={{borderRadius:"12px"}}
                 name='name' 
                 type='text'
                 id="name"
            
                 />
                <br/>

                

               
                <br />
                 <label>Password:</label>
                 <br />
                <input style={{borderRadius:"12px"}}
                 name='pass' 
                 type='password'
                 id="pass"
            
                 />

                 <br/>
                <br/>
                <input style={{borderRadius:"12px"}}
                 type='submit' 
                 value='signin'
                 onClick={check} 
                 />
             </form>
             </div>
    
        </div>
      );
}

export default Signin;