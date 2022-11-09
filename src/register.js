import React from "react";

let list=[
    {
        Name:"sri",
        password:"111",
    }
]


const Reg = () =>{

    
    const cus={};

    const Reg=()=>{
        // alert("at add");
        var name=document.getElementById("t1").value;
        cus.Name=name;
        console.log(name);

        var phone=document.getElementById("t2").value;
        cus.Phone=phone;
        console.log(phone);

        var address=document.getElementById("t3").value;
        cus.Address=address;
        console.log(address);

        var email=document.getElementById("t4").value;
        cus.Email=email;
        console.log(email);

        var password=document.getElementById("t5").value;
        console.log(password);
        cus.Password=password;

        list.push(cus);
        // alert(list);
        // alert(list[1].Name);
        alert(name+password);
        
        if(name=!null && password!=null){
 
            window.location.href="/home";
            console.log("register to home");
            alert("registered");
        }
        else{
            alert("enter all details");
        }
    }
   
    
 
   
    return (
        <div >
           
            
           <div style={{height:"700px" ,width:"600px" ,backgroundColor:"",borderRadius:"50px",marginLeft:"435px",borderTop: "44px"}}>
                
           
                <form style={{fontSize:"25px",backgroundColor:"",textAlign:"center",fontFamily:"cursive",borderRadius:"50px"}}>
                    <h1>Academia Registration</h1>
                
                <br />
                <label>Name:</label>
                <br />
                 <input style={{borderRadius:"12px"}}
                 name='name' 
                 type='text'
                 id="t1"
                
                 />
                <br/>
               

                <br />
                <label>Phone:</label>
                <br />
                 <input style={{borderRadius:"12px"}}
                 name='phone' 
                 type='text'
                 id="t2"
                 />

                <br/>
                <br/>

                <label>Address:</label>
                <br />
                 <input style={{borderRadius:"12px"}}
                 name='address' 
                 type='text'
                 id="t3"
                 />

                <br/>
                <br/>
                
                <label>Email:</label>
                <br />
                <input style={{borderRadius:"12px"}}
                    name='name' 
                    type='email' 
                    id="t4"
                />
                <br/>
                <br/>
                 <label>Password:</label>
                 <br />
                <input style={{borderRadius:"12px"}}
                 name='pass' 
                 type='password'
                 id="t5"
            
                 />

                 <br/>
                <br/>
                 
                 <button style={{borderRadius:"12px"}} onClick={Reg}>submit</button>
             </form>
             </div>
             
        </div>

      );
}

export default Reg;