import React, { createContext, useState } from 'react';
import Header from '../Header/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import SearchBox from '../SearchBox/SearchBox';
import Volunteer from '../Volunteer/Volunteer';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import AddEvent from '../AddEvent/AddEvent';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Register from '../Register/Register';
import Admin from '../Admin/Admin';


export const userContext = createContext();

const Main = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <userContext.Provider  value= {[loggedInUser, setLoggedInUser]}>

        <Router>
            <Switch>
                <Route exact path='/'>
                    <Header></Header>
                    <SearchBox></SearchBox>
                    <Volunteer></Volunteer>
                    
                </Route>
                <PrivateRoute path="/register/:id">
                    <Register></Register>
                </PrivateRoute>
                <PrivateRoute  path="/addEvent">
                    <Header></Header>
                    <AddEvent></AddEvent>
                </PrivateRoute >

                <Route path='/login'>
                    <Login></Login>
                </Route>
                <Route path='/admin'>
                    <Admin></Admin>
                </Route>
                
                <Route path='*'>
                    <NotFound></NotFound>
                </Route>
            </Switch>
            
        </Router>

        </userContext.Provider>
        
    );
};

export default Main;