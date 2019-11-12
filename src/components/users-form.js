import React from 'react';
import { addUser, saveUser } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';


const UsersForm = () => {

    const dispatch = useDispatch();

    const initUser = {
        age: "",
        first: "",
        last: "",
        email: "",
        password: "",
        phone: "",
        address: "",
}

    const userToUpdate = useSelector(
        state => state.userToUpdate
    );

    const handleChange = e => {
        dispatch({ type: 'UPDATE_USER_TO_UPDATE', payload: { ...userToUpdate, [e.target.name]: e.target.value } })
    }

    const submitUser = () => {
        const newUser = {
            age: +userToUpdate.age,
            first: userToUpdate.first,
            last: userToUpdate.last,
            email: userToUpdate.email,
            password: userToUpdate.password,
            phone: userToUpdate.phone,
            address: userToUpdate.address,
        }

        if (!userToUpdate._id || userToUpdate._id === -1) {
            dispatch(addUser(newUser));
        } else {
            dispatch(saveUser(userToUpdate._id, newUser));
        }

        dispatch({ type: 'UPDATE_USER_TO_UPDATE', payload: initUser })
    }

    return (
        <div>
            <h1>User Form</h1>
            <div className="form-container">
                <div className="form-group">
                    <label>Age</label>
                    <input type="text"
                        name="age"
                        className="form-control"
                        value={userToUpdate.age}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text"
                        name="first"
                        className="form-control"
                        value={userToUpdate.first}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text"
                        name="last"
                        className="form-control"
                        value={userToUpdate.last}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text"
                        name="email"
                        className="form-control"
                        value={userToUpdate.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text"
                        name="password"
                        className="form-control"
                        value={userToUpdate.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text"
                        name="phone"
                        className="form-control"
                        value={userToUpdate.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text"
                        name="address"
                        className="form-control"
                        value={userToUpdate.address}
                        onChange={handleChange}
                    />
                </div>
                <button className="btn btn-outline-primary float-right mt-3" onClick={submitUser}>Submit</button>
            </div>
        </div>
    );
}

export default UsersForm;