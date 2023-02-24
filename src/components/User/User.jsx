import React from 'react';
import './User.css';

const User = ({ user }) => {
    return (
        <div className="user-list">
            <div className="user">
                <div className="user__id">{user.id}</div>
                <div className="user__name">{user.name}</div>
                <div className="user__username">{user.username}</div>
                <div className="user__email">{user.email}</div>
                <div className="user__city">{user.address.city}</div>
            </div>
        </div>
    );
};

export default User;
