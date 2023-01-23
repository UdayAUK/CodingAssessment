import React, { useState ,useEffect} from "react";
import './App.css';
import LoginForm from './LoginForm';
import LoginAttemptList from './LoginAttemptList';

const App = () => {

  const [loginAttempts, setLoginAttempts] = useState([]);

  const [loginstatus, setLoginstatus] = useState('');
  const [searchTerm, setSearchTerm] =useState("");
  const [searchResults, setSearchResults] =useState([]);

const users =[
  {
    login:'user1',
    password:'pwd1'
  },
  {
    login:'user2',
    password:'pwd2'
  },
  {
    login:'user3',
    password:'pwd3'
  },
]

const searchHandler =(searchTerm)=>{
  setSearchTerm(searchTerm);
if(searchTerm !=="")
{
  const newLoginAttempts = loginAttempts.filter((attempt)=>
  {
    return Object.values(attempt).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
  });
  setSearchResults(newLoginAttempts);
}
else{
  setSearchResults(loginAttempts);
}

};
const LOCAL_STORAGE_KEY ="loginAttempts";

  return (
    <div className="App">
      <LoginForm loginstatus={loginstatus} onSubmit={({ login, password }) => {
    console.log({ login, password });
    let userdetails =users.find(x=> x.login ==login && x.password == password)
    let loginstatusinfo = userdetails?'Login Successful':'Invalid Credentials';
    setLoginstatus(loginstatusinfo);
    setLoginAttempts([...loginAttempts, {username: login, loginstatus: loginstatusinfo, logintime:new Date().toString() }]);
console.log(loginAttempts);
}} />
      <LoginAttemptList term={searchTerm} attempts={searchTerm.length<1?loginAttempts:searchResults} searchKeyword={searchHandler} />
    </div>
  );
};

export default App;
