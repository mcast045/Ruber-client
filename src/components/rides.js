import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRides, deleteRide, editRide } from './../actions';

const Rides = () => {

    const rides = useSelector(state => state.rides);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRides());
    }, [dispatch])

    return (
        <div>
            <h1>All Rides</h1>
            {
                rides.length > 0 && (
                    rides.map((ride, index) => {
                        return (
                            <div className="border mt-5" key={index}>
                                <div className="p-3">
                                    <p className="float-right">
                                        <button className="btn btn-primary btx-sm mr-1"
                                            onClick={() => dispatch(editRide(ride))}
                                        >up</button>
                                        <button className="btn btn-danger btx-sm"
                                            onClick={() => dispatch(deleteRide(ride._id))}
                                        >x
                                            </button>
                                    </p>
                                    <p>Pick Up: {ride.pickUp}</p>
                                    <p>Drop Off: {ride.dropOff}</p>
                                    <p>Cost: {ride.cost}</p>
                                    <p>Date: {ride.date}</p>
                                </div>
                            </div>
                        )
                    })
                )
            }
        </div>
    );
}

export default Rides;