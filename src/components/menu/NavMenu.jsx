import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import './NavMenu.scss';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function NavMenu() {
    const { currentUser, logOut } = useAuth();
    const history = useHistory();

    const handleSignOut = async () => {
        try {
            await logOut();
            history.push('./');
            toast.success('Logged out!', {
                closeButton: false,
                hideProgressBar: true,
            });
        } catch {
            toast.error('Error can not log out', { closeButton: false });
        }
    };

    return (
        <div id='main'>
            <nav class='navbar navbar-expand-lg navbar-light bg-light'>
                <div class='container-fluid'>
                    <a class='navbar-brand' href='#'>
                        Blog
                    </a>
                    <button
                        class='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNav'
                        aria-controls='navbarNav'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span class='navbar-toggler-icon'></span>
                    </button>
                    <div class='collapse navbar-collapse' id='navbarNav'>
                        {currentUser ? (
                            <ul class='navbar-nav'>
                                <li class='nav-item'>
                                    <Link to='/' className='nav-link'>
                                        Home
                                    </Link>
                                </li>
                                <li class='nav-item'>
                                    <Link
                                        to='./signin'
                                        className='nav-link'
                                        onClick={handleSignOut}
                                    >
                                        Log Out
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul class='navbar-nav'>
                                <li class='nav-item'>
                                    <Link to='/' className='nav-link'>
                                        Home
                                    </Link>
                                </li>
                                <li class='nav-item'>
                                    <Link to='./signup' className='nav-link'>
                                        Sign Up
                                    </Link>
                                </li>
                                <li class='nav-item'>
                                    <Link to='./signin' className='nav-link'>
                                        Log In
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}
