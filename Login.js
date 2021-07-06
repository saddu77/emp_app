import React, {useState}from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Link from '@material-ui/core/Link';
import { Router,Route,browserHistory,IndexRoute} from 'react-router';

const useStyles = makeStyles((theme) => ({
    signupform: {     
        margin: theme.spacing(1), 
        textAlign:'center',
        justifyContent:'center',
        margin:'auto',
        border:'1px sold blue',     
    },
  }));


function Login(){

    const [email,setEmail] = useState('');
    const [password,setPassword] =useState('');    
    const classes = useStyles();

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const gotoSignup = () =>{
        browserHistory.push('/signup')
    }
     const login = ( ) => {
         const data = {"email":email,"password":password};
        //  alert(JSON.stringify(data));
         axios.post('http://localhost:8000/user/signin',data)
                .then(response => {                 
                    //console.log('response is : ' +  JSON.stringify((response.data.user[0][0].email)))
                    let resEmail = JSON.parse(JSON.stringify((response.data.user[0][0].email)));
                    let resPwd = JSON.parse(JSON.stringify((response.data.user[0][0].password)))
                    if(email == resEmail && password == resPwd){
                        browserHistory.push('/home')
                    }else{
                        alert('Please verify credentials');
                    }
                })
                .catch(error => {
                    console.log("Error is : " + error)
                    alert('Please verify credentials')
                })
        //console.log("Resonse recieved us : " + JSON.stringify(responseData))
    }
    return(
        <div className={classes.signupform}>
               <h1 > Login</h1>
               <TextField id="outlined-basic" name="email" label="Email" variant="outlined" onChange={handleEmailChange}/> <br /> <br /> <br />
               <TextField type="password" name="pasword" id="outlined-basic" label="Password" variant="outlined" onChange={handlePasswordChange}/> <br /> <br />
               <Button variant="contained" color="primary" onClick={login}> Login </Button><br /> <br /> <br />
                <Link  onClick={gotoSignup} >  Sign Up  </Link>
        </div>     
    )
}

export default Login