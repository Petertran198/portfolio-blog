import React from 'react';
import { Route, Redirect } from 'react-router';
import CenterContainer from '../components/helper/CenterContainer';
import { useAuth } from '../context/AuthContext';

//Public Routes are routes that acts like a regular <Route/>
// the only difference is that if restricted === true that means that u cant go on to that page if the user is logged on
//...rest contains all the attributes passed in from <Route/> to our custom <PrivateRoute/> Example of attributes passed in are "exact, path, and location"
export default function PublicRoute({
    component: Component,
    restricted = false,
    needContainer = false,
    ...rest
}) {
    const { currentUser } = useAuth();

    // if route is restricted and there is a currentUser, redirect to './'
    //Else if the route has the prop needContainer == true then set a container and render the component else just render the component
    return (
        <Route
            {...rest}
            render={(props) => {
                return restricted === true && currentUser ? (
                    <Redirect to='./' />
                ) : needContainer ? (
                    <CenterContainer>
                        <Component {...props} />
                    </CenterContainer>
                ) : (
                    <Component {...props} />
                );
            }}
        ></Route>
    );
}
