import React, { useContext } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { userContext } from '../Main/Main';
import { useHistory, useLocation } from 'react-router-dom';
import img from '../../images/logos/logo.png'

firebase.initializeApp(firebaseConfig);
const Login = () => {

    const [loggedInUser, setLoggedInUser] =useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            setLoggedInUser(result.user);
            history.replace(from);
        })
        .catch(function (error) {
            console.log(error)
        });
    }
    
    return (
        <div className="container">
            <div>
                <div className='text-center mb-3'><img style={{height:'50px'}} src={img} alt=""/></div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-5">
                    <div className="form-control social-btn ml-3 m-2" onClick={handleGoogleSignIn}>
                        <h2 className="mt-3">Login with</h2>       
                        <div className="ml-2 google-btn"> Continue with Google</div>  
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default Login;