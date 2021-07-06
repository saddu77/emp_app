import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import { Router,Route,browserHistory,IndexRoute} from 'react-router';
import Signup from './Signup';
import Home from './Home';
import MyList from './MyList';
import MyList1 from './MyList1';
import Parent from './Parent';
import UsersList from './UsersList';
import EditUser from './EditUser';
// import Items from './Items';
import CustomButton from './CustomButton';
const data = [
  {id:1,title:'NodeJS',content:'Node Js is awsome'},
  {id:2,title:'ReactJS',content:'react Js is awsome'},
  {id:3,title:'PHP',content:'PHP is awsome'},
  {id:4,title:'Java',content:'Java Js is awsome'}
]
ReactDOM.render(
  // <App />,
//  <MyList1 data={data}/>,
// <CustomButton />, 
  <Router history={browserHistory}>
      <Route path="/" component = {Login} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/home' component={Home} />
      <Route path='/user-list' component={UsersList} />
      <Route path='/user-edit' component={EditUser} />

  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
