import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';
import google from './google.svg';

export default function SignIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([]);
    const { logIn, signInWithGoogle } = useAuth();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError([]);
        try {
            await logIn(emailRef.current.value, passwordRef.current.value);
            history.push('./');
            toast.info('Success', { closeButton: false, hideProgressBar: true });
        } catch (e) {
            toast.warning(e.message, {
                closeButton: false,
                hideProgressBar: true,
                autoClose: 2000,
            });
        }

        setLoading(false);
    };

    const handleGoogleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError([]);
        try {
            signInWithGoogle()
                .then(() => {
                    toast.info('Success', {
                        closeButton: false,
                        hideProgressBar: true,
                        delay: 1000,
                    });
                })
                .then(() => {
                    history.push('./');
                });
        } catch (e) {
            toast.danger('Failed', { closeButton: false, hideProgressBar: true });
        }
        setLoading(false);
    };

    return (
        <div>
            <Card className='' style={{ minWidth: '350px' }}>
                <Card.Body>
                    <h2 className='text-center'>Login</h2>
                    {error &&
                        error.map((e) => {
                            return (
                                <Alert variant='danger' className='p-1 '>
                                    {e}
                                </Alert>
                            );
                        })}
                    <Form>
                        <Form.Group>
                            <Form.Control
                                type='email'
                                placeholder='Enter email'
                                ref={emailRef}
                                required
                            />
                            <hr />
                            <Form.Control
                                className='my-1'
                                type='password'
                                placeholder='Enter password'
                                ref={passwordRef}
                                required
                            />{' '}
                            <Button
                                className='mt-2'
                                disabled={loading}
                                block
                                onClick={handleSubmit}
                            >
                                {loading ? 'Logging in' : 'Login'}
                            </Button>{' '}
                            <Button
                                className='mt-2'
                                block
                                onClick={handleGoogleSubmit}
                            >
                                <img
                                    src={google}
                                    className='img-thumbnail pl-0 float-left'
                                    style={{ height: '30px', width: '35px' }}
                                />
                                {loading ? 'Logging in' : 'Sign In With Google'}
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Don't have an Account? <Link to='./signup'>Create One</Link>
            </div>
        </div>
    );
}
