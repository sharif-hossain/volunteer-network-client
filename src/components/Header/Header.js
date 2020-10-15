import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logos/logo.png'
import { userContext } from '../Main/Main';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg bg-light">
                <Link to="/">
                    <img src={logo} alt="logo" className="mr-5 bg-img-color" />
                </Link>             
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Donation</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Event</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Blog</Link>
                        </li>
                    </ul>
                </div>
                {
                    
                    
                    loggedInUser.email? <button className="btn btn-warning" onClick={() => setLoggedInUser({})}>{loggedInUser.displayName}[Logout]</button>
                    : <Link to="/login">
                        <button className="btn btn-primary mr-3">Register</button>
                    </Link>
                       
                }
            {
                <Link to='/admin'>
                            <button className="btn btn-secondary">Admin</button>
                        </Link> 
            }
            </nav>
        </div>
    );
};

export default Header;

            