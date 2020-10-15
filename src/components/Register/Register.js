import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { userContext } from '../Main/Main';
import './Register.css'
import fakeData from '../../components/fakeData/fakeData'
import img from '../../images/logos/logo.png'

const Register = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    
    const [event, setEvent] = useState({})
    console.log(event)
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
            // volunteerInfo.date = date;
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
        // history.push(`/addEvent/${id}`)
    } 
    console.log(event)
 //value={selectedDate} onChange={handleDateChange}
    return (
        <div className='container row text-center'>
            <div className="col-md-5"></div>
            <div className="col-md-6 ">
                <img style={{height:'50px'}} src={img} alt=""/>
            <div>
                {
                //  <form className="mt-3 " onSubmit={handleSubmit} >
                //     <h4 className="ml-3 " > Register as a Volunteer</h4>

                //     <input name="fullName" onChange={handleChange} className="form-control m-3" defaultValue={loggedInUser.displayName} placeholder="full name" />
                    
                //     <input name="email" onChange={handleChange} className="form-control m-3" value={loggedInUser.email}  required type="email" placeholder="user or email" />
                //     <input name="date" onChange={handleChange} className="form-control m-3" required type = "date"  placeholder="enter date" />
                //     <input name="description" onChange={handleChange} className="form-control m-3" required type="text" placeholder="Description" />
                //     <input name="eventName" onChange={handleChange} className="form-control m-3" value ={event.title} required type="text" placeholder="event name" />
                //     <button type="submit" className="btn btn-primary form-control ml-3 btn-width" >Registration</button>
                //  </form>
                
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
        </div>
    
    );
};

export default Register;