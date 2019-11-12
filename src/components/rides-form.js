import React from 'react';
import { addRide, saveRide } from './../actions/index';
import { useSelector, useDispatch } from 'react-redux';


const RidesForm = () => {

    const dispatch = useDispatch();

    const initRide = {
        pickUp: "",
        dropOff: "",
        cost: "",
        rating: "",
        userId: "",
        _id: -1
    }

    const rideToUpdate = useSelector(
        state => state.rideToUpdate
    );

    const handleChange = e => {
        dispatch({ type: 'UPDATE_RIDE_TO_UPDATE', payload: { ...rideToUpdate, [e.target.name]: e.target.value } })
    }

    const submitRide = () => {
        const newRide = {
            userId: rideToUpdate.userId,
            pickUp: rideToUpdate.pickUp,
            dropOff: rideToUpdate.dropOff,
            cost: rideToUpdate.cost,
            rating: rideToUpdate.rating,
            date: new Date(Date.parse(new Date())).toUTCString()
        }
console.log("new", newRide, rideToUpdate._id);
        if (!rideToUpdate._id || rideToUpdate._id === -1) {
            dispatch(addRide(newRide));
        } else {
            dispatch(saveRide(rideToUpdate._id, newRide));
        }

        dispatch({ type: 'UPDATE_RIDE_TO_UPDATE', payload: initRide })
    }

    return (
        <div>
            <h1>Rides Form</h1>
            <div className="form-container">
                <div className="form-group">
                    <label>User</label>
                    <input type="text"
                        name="userId"
                        className="form-control"
                        value={rideToUpdate.userId}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Pick Up</label>
                    <input type="text"
                        name="pickUp"
                        className="form-control"
                        value={rideToUpdate.pickUp}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Drop Off</label>
                    <input type="text"
                        name="dropOff"
                        className="form-control"
                        value={rideToUpdate.dropOff}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Cost</label>
                    <input type="text"
                        name="cost"
                        className="form-control"
                        value={rideToUpdate.cost}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Rating</label>
                    <input type="text"
                        name="rating"
                        className="form-control"
                        value={rideToUpdate.rating}
                        onChange={handleChange}
                    />
                </div>
                <button className="btn btn-outline-primary float-right mt-3" onClick={submitRide}>Submit</button>
            </div>
        </div>
    );
}

export default RidesForm;