import React from 'react';
import './Card.css'

const CardItem = ({data, handleAddEvent}) => {

    return (
         
            <div className="col-md-3 container">
                <div class="card d-inline-block" style={{width: '16rem'}} onClick={() => handleAddEvent(data._id)}>
                    <img src={data.image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5>{data.title}</h5>
                    </div>
              </div>
            </div>
           
    );
};

export default CardItem;