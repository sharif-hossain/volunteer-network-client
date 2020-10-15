import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './volunteer.css'
import CardItem from '../Card/CardItem';
const Volunteer = () => {
//    const volunteerData = fakeData;
  let history = useHistory();
    const [event, setEvent] = useState([]);

    useEffect(()=>{
        fetch('https://serene-waters-72257.herokuapp.com/events')
        .then(res =>res.json())
        .then(data => setEvent(data))
    },[])

    const handleAddEvent = (id) => {
        history.push(`/register/${id}`);
    }

    return (
       <div className="container">
            <div className='row'>
           
            {
               event.map(data =><CardItem id={data._id} data={data} handleAddEvent={handleAddEvent}></CardItem>)
            }
            
        </div>
       </div>
        
    );
};

export default Volunteer;