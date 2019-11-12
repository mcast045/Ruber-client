import React from 'react';
import UserForm from './users-form';
import Users from './users';

const UsersPage = () => {
    return (
        <div className="row">
            <div className="col">
                <UserForm />
            </div>
            <div className="col">
                <Users />
            </div>
        </div>

    );
}

export default UsersPage;