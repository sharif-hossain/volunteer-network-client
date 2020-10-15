import React, { useEffect, useState } from 'react';

const VolunteerList = () => {
    const [registeredList, setRegisteredList] = useState([]);

    useEffect(() => {
        fetch('https://serene-waters-72257.herokuapp.com/registeredVolunteers')
            .then(res => res.json())
            .then(result => {
                setRegisteredList(result);
            })
    }, [])
    return (
        <div className="mt-3">
            <h3>Volunteer register list</h3>
            <table className="table table-striped volunteer">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Registration date</th>
                        <th>Volunteer list</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        registeredList.map(item =>
                            <tr id={item._id}>
                                <th>{item.fullName}</th>
                                <td>{item.email}</td>
                                <td>{item.date}</td>
                                <td>{item.eventName}</td>             
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default VolunteerList;