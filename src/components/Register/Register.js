import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { userContext } from '../Main/Main';
import './Register.css'
import img from '../../images/logos/logo.png'

const Register = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [event, setEvent] = useState({})
    const [volunteer, setVolunteer] = useState({
          fullName: '',
          email: '',
          date: '',
          description: '',
          eventName: '', 
          eventImage: '' 
        });
    const [eventName, setEventName] = useState('');
    const [eventImage, setEventImage] = useState('');
    // const [date, setDate] = useState('');
    let history = useHistory();

        const handleChange = (e) =>{
            const volunteerInfo = {...volunteer}
            volunteerInfo[e.target.name] = e.target.value;
            setVolunteer(volunteerInfo);
        }

    useEffect(() => { 
        
        fetch('https://serene-waters-72257.herokuapp.com/event/' +id)
        .then(res => res.json())
        .then(data=>{
            setEvent(data);
            setEventName(data.title);
            setEventImage(data.image);
        })
    }, [id])

    const handleSubmit = (e) =>{

        const volunteerInfo = {...volunteer}
            volunteerInfo.fullName = loggedInUser.displayName;
            volunteerInfo.email = loggedInUser.email;
            volunteerInfo.eventName =eventName;
            volunteerInfo.eventImage = eventImage;

            fetch('https://serene-waters-72257.herokuapp.com/register',{
                method:'POST',
                headers:{'Content-Type' : 'application/json'},
                body:JSON.stringify(volunteerInfo)
            })
            .then(res => res.json())
            .then(result =>{
                if(result){
                    history.push('/addEvent')
                }
            })
         e.preventDefault();
        
    } 
    return (
        <div className='container row text-center'>
            <div className="col-md-3"></div>
            <div className="col-md-6 ">
                <img style={{height:'50px'}} src={img} alt=""/>
            <div>
                {
                <form className=" form mt-3" onSubmit={handleSubmit} >
                                    <h4 className="ml-3 text-left mt-2" > Register as a Volunteer</h4>
                                    <input name="fullName" value={loggedInUser.displayName} onChange={handleChange} className="form-control m-3" required type="text" placeholder="Full Name" />
                                    <input name="email" value={loggedInUser.email} onChange={handleChange} className="form-control m-3" required type="email" placeholder="Username or Email" />
                                    <input name="date" onChange={handleChange} className="form-control m-3" required type="date" placeholder="Date" />
                                    <input name="description" onChange={handleChange} className="form-control m-3" required type="text" placeholder="Description" />
                                    <input name="eventName" value={event.title} onChange={handleChange} className="form-control m-3" required type="text" placeholder="Organize books at the library." />
                                    <button type="submit" className="btn btn-primary form-control ml-3 m-3 btn-width" >Registration</button>
                                </form>
                                
                }
            </div>
            </div>
            <div className="col-md-3"></div>
        </div>
    
    );
};

export default Register;