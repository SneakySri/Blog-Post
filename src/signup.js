import React,{Component} from "react";

class SignUp extends Component{

    constructor(props)
    {
        super(props);
          
        this.state={
             name:'',
             phone:'',
             address:'',
             email:'',
             password:''
             }
    }

    NameChange= event =>{
        this.setState({name: event.target.value});
        
    }

    PhoneChange= event =>{
        this.setState({phone: event.target.value});

    }

    AddressChange= event =>{
        this.setState({address: event.target.value});
       
    }

    EmailChange= event =>{
        this.setState({email: event.target.value});
    }

    PasswordChange= event =>{
        this.setState({password: event.target.value});
    }

    handleSubmit= event =>{
        alert(this.state.name+this.state.phone+this.state.email+this.state.address+this.state.password);
    }

    render(){

        const name=this.state.name;
        const phone=this.state.phone;
        const address=this.state.address;
        const email=this.state.email;
        const password=this.state.password;

        return(
            <div>
            <div style={{height:"700px" ,width:"600px" ,backgroundColor:"#3f3f4e",borderRadius:"50px",marginLeft:"435px",borderTop: "44px", }}>
             <form style={{fontSize:"25px",backgroundColor:"",textAlign:"center",fontFamily:"cursive",borderRadius:"50px",}}>
                <br/>
                <h1>Sign-Up</h1>
                <br/>
                <br/>
				<div>
					<label>Username </label><br/>
					<input
						type="text"
						value={name}
						onChange={this.NameChange}
					/>
				</div>
                <br/>
                <br/>

                <div>
					<label>Phone </label><br/>
					<input
						type="text"
						value={phone}
						onChange={this.PhoneChange}
					/>
				</div>
                <br/>
                <br/>

                <div>
					<label>Address </label><br/>
					<input
						type="text"
						value={address}
						onChange={this.AddressChange}
					/>
				</div>
                <br/>
                <br/>


                <div>
					<label>Email </label><br/>
					<input
						type="text"
						value={email}
						onChange={this.EmailChange}
					/>
				</div>
                <br/>
                <br/>

                <div>
					<label>Password </label><br/>
					<input
						type="text"
						value={password}
						onChange={this.PasswordChange}
					/>
				</div>
                <br/>
                <br/>

                <button className="ui bottom button" type="submit" onClick={this.handleSubmit}>Submit</button>


            </form>
           
         </div>
         <br/>
         <br/>
         </div>
        )
    }

    
}
export default SignUp