import React, { useState } from "react";
import './LoginForm.css';

let LoginForm = (props) => {
	console.log(props);

	const [loginDetails, setLoginDetails] = useState({loginUsername:"",loginPassword:""});

	const handleSubmit = (event) =>{
		event.preventDefault();

		props.onSubmit({
			login:loginDetails.loginUsername,
			password:loginDetails.loginPassword,
		});
	}

	return (
		<form className="form">
			<h1>Login</h1>
			<label htmlFor="name">Name</label>
			<input type="text" id="name" onChange={(e)=>setLoginDetails({...loginDetails,loginUsername: e.target.value})} value={loginDetails.loginUsername} />
			<label htmlFor="password">Password</label>
			<input type="password" id="password" onChange={(e)=>setLoginDetails({...loginDetails,loginPassword: e.target.value})} value={loginDetails.loginPassword} />
			<button type="submit" onClick={handleSubmit}>Continue</button>
<span style={props.loginstatus =='Login Successful'?{color:"green"}:{color:"red"}}> {props.loginstatus} </span>
		</form>
	)
}

export default LoginForm;