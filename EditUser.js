import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Router,Route,browserHistory,IndexRoute} from 'react-router';
import axios from 'axios';




const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  signupform: {     
    margin: theme.spacing(1), 
    textAlign:'center',
    justifyContent:'center',
    margin:'auto',
    border:'1px sold blue',     
},
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
const gotoUsers = ( ) => {
    
    browserHistory.push('/user-list');
}
const gotoLogin = ( ) => {
    browserHistory.push('/login');
}
const gotoHome = () => {
    browserHistory.push('/home');
}
export default function EditUser(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [id,setId] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [updatedEmail,setUpdatedEmail] = useState('');
  const [updatedPassword,setUpdatedPassword] = useState('');

  useEffect(() => { 
      setId(props.location.state.id);
      setEmail(props.location.state.email) ;
      setPassword(props.location.state.password);
    console.log( "recieved value: " + props.location.state.id); 
    console.log( "recieved value: " + props.location.state.email );
    console.log( "recieved value: " + props.location.state.password );// result: 'some_value'
 });
   const handleEmailChange = (e) => {       
    setUpdatedEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setUpdatedPassword(e.target.value)
    }

    const update = ( ) => {
        
        const data = {"email":updatedEmail,"password":updatedPassword};
       //  alert(JSON.stringify(data));
       let url = 'http://localhost:8000/user/update_user_by_id/' +id 
       axios.put(url,data)
               .then(response => {
                   alert('User Updated Successfully');
                   browserHistory.push('/user-list');
                   console.log('response is : ' + response)
               })
               .catch(error => {
                   console.log("Error is : " + error)
               })
   }
 
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

 
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Edit User
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          
        </div>
        <Divider />
        <List>
          {['Home'].map((text, index) => (
            <ListItem button key={text} onClick={gotoHome}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Users'].map((text, index) => (
            <ListItem button key={text} onClick={gotoUsers}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Employees'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Module3'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Module4'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List onClick={gotoLogin}>
          {['Logout'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>

        </Typography>
        <div className={classes.signupform}>
               <h2 > Update User :  {email}</h2>
               <TextField id="outlined-basic" type="text"  label="Email"   variant="outlined" onChange={handleEmailChange}/> <br /> <br /> <br />
               <TextField type="password"  id="outlined-basic"   label="Password" variant="outlined" onChange={handlePasswordChange} /> <br /> <br />
               <Button variant="contained" color="primary" onClick={gotoUsers}>Cancel</Button> {'  '}  {'  '} 
               <Button variant="contained" color="primary" onClick={update} >Update</Button>
        </div> 
      </main>
    </div>
  );
}
