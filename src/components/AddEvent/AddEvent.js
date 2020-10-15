import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../Main/Main';
import SubscribedEvent from '../SubscribedEvent/SubscribedEvent';

const AddEvent = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    let history = useHistory();
    
    const [event, setEvent] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)
    
    useEffect(()=>{
        fetch('https://serene-waters-72257.herokuapp.com/addVolunteer?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setEvent(data);
                setIsDeleted(false)
            })
        },[loggedInUser.email, isDeleted])

        const handleDelete = (id) => {
            fetch(`https://serene-waters-72257.herokuapp.com/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then((result => {
                    if (result) {
                        setIsDeleted(true);                
                    }
                }));
            
        }
 
    return (
        <div className='container row ml-5' >

           {
             event.map(item => <SubscribedEvent id={item._id} item={item} handleDelete={handleDelete}></SubscribedEvent>)
           }
        </div>
    );
};

export default AddEvent;