import React from 'react';
import RidesForm from './rides-form';
import Rides from './rides';

const RidesPage = () => {
    return (
        <div className="row">
            <div className="col">
                <RidesForm />
            </div>
            <div className="col">
                <Rides />
            </div>
        </div>

    );
}

export default RidesPage;