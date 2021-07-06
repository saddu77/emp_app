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


function Signup(){

    const [email,setEmail] = useState('');
    const [password,setPassword] =useState('');
    const classes = useStyles();

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const gotoLogin = () =>{
        browserHistory.push('/login')
    }
    const register = ( ) => {
         const data = {"email":email,"password":password};
        //  alert(JSON.stringify(data));
        axios.post('http://localhost:8000/user/save',data)
                .then(response => {
                    console.log('response is : ' + response)
                    alert('User Created Successfully')
                })
                .catch(error => {
                    console.log("Error is : " + error)
                })
    }
    return(
        <div className={classes.signupform}>
               <h1 > Sign Up </h1>
               <TextField id="outlined-basic" name="email" label="Email" variant="outlined" onChange={handleEmailChange}/> <br /> <br /> <br />
               <TextField type="password" name="pasword" id="outlined-basic" label="Password" variant="outlined" onChange={handlePasswordChange}/> <br /> <br />
               <Button variant="contained" color="primary" onClick={register}> Sign Up</Button><br /> <br /> <br />
                <Link  onClick={gotoLogin} >  Login  </Link>
        </div>     
    )
}

export default Signup