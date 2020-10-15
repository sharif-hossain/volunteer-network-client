import React from 'react';
import './subs.css'

const SubscribedEvent = ({item,handleDelete}) => {
    console.log(item)
    return (
       
        <div className='container col-md-6'>
                <div style ={{border:'1px solid lightGray', borderRadius:'10px', margin:'20px', padding:'10px'}}className="row">
                        <div className="col-md-6">
                            <img style={{height:'150px', width:'150px'}} src={item.eventImage} alt=""/>
                        </div>
                    <div className="col-md-6">
                        <div className="">
                            <div><h5>{item.eventName}</h5>
                                <p>{(new Date(item.date)).toDateString('dd/MM/yyyy')}</p></div>
                            <div className="text-right">
                                <button className="btn btn-secondary" onClick={() => handleDelete(item._id)}>Cancel</button>
                            </div>
                        </div> 
                    </div>
                </div>       
        </div>
    
    );
};

export default SubscribedEvent;