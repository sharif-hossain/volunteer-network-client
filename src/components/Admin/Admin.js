import React from 'react';
import fakeData from '../../components/fakeData/fakeData'
import VolunteerList from './VolunteerList';
const Admin = () => {
    const handleAddEvent = () =>{
        fetch('https://serene-waters-72257.herokuapp.com/addEvent',{
            method:'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }
    return (
        <div className="row">
            <div className="col-md-3 mt-5 ml-5">
                <ul>
                    <a onClick={handleAddEvent} href="/">Add events</a>
                    <br/>
                    <br/>
                    <a href="/admin">Volunteer register list</a>
                </ul>
             
            </div>
            <div className="col-md-7">
                    <VolunteerList></VolunteerList>
            </div>
        </div>
    );
};

export default Admin;