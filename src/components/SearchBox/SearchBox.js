import React from 'react';
import './SearchBox.css'

const SearchBox = () => {
    return (
        <div className='container mt-5'>
            <div>
            <h2>I grow by helping people in need</h2>
            </div>
            <div>
            <div class="input-group mb-3 mt-5 text-center" id='search-btn' >
            
            <input type="text" className="form-control" placeholder="search for volunteer" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div className="input-group-append" >
            
            
                <button className="btn btn-primary"  type="button">Button</button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default SearchBox;