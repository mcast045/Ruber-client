import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, deleteUser, editUser } from '../actions';

const Users = () => {

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    return (
        <div>
            <h1>All Users</h1>
            {
                users.length > 0 && (
                    users.map((user, index) => {
                        return (
                            <div className="border mt-5" key={index}>
                                <div className="p-3">
                                    <p className="float-right">
                                        <button className="btn btn-primary btx-sm mr-1"
                                            onClick={() => dispatch(editUser(user))}
                                        >up</button>
                                        <button className="btn btn-danger btx-sm"
                                            onClick={() => dispatch(deleteUser(user._id))}
                                        >x
                                            </button>
                                    </p>
                                    <p>Name: {user.first} {user.last}</p>
                                    <p>Email: {user.email}</p>
                                    <p>Phone: {user.phone}</p>
                                    <p>Address: {user.address}</p>
                                </div>
                            </div>
                        )
                    })
                )
            }
        </div>
    );
}

export default Users;