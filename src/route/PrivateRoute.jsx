import React from 'react';
import { Route, Redirect } from 'react-router';
import { useAuth } from '../context/AuthContext';

// These Routes can only be shown if user is logged on
export default function PrivateRoute({ component: Component, ...rest }) {
    const { currrentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) => {
                currrentUser ? <Component {...props} /> : <Redirect to='/signin' />;
            }}
        ></Route>
    );
}
