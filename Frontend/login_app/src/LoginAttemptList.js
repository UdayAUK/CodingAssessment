import React ,{useRef} from "react";
import "./LoginAttemptList.css";


const LoginAttemptList = (props) => {
const inputElement = useRef("");
	const getSearchTerm = ()=>
{
props.searchKeyword(inputElement.current.value);
};

const renderAttempsList = props.attempts.map((attempt)=>
{
	return (
		<div>
		<div style={{'textAlign': 'left'}}>
			<div>LoginName: {attempt.username}</div>
			<div>Login Status: {attempt.loginstatus}</div>
			<div>Login Time: {attempt.logintime}</div>
			<hr></hr>
		</div>
		</div>
	)
})

let result = props;
	return(
	<div className="Attempt-List-Main">
	 	<p>Recent activity</p>
	  	<input type="input" placeholder="Filter..." value={props.term} onChange={getSearchTerm} ref={inputElement} />
	<div>
	{renderAttempsList.length>0?renderAttempsList:"no results"}
	</div>

	
	</div>);
};

export default LoginAttemptList;