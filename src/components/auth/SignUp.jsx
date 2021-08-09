import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([]);
    const { signUp, currentUser } = useAuth();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError([]);

        if (emailRef.current.value === '') {
            setError((e) => [...e, `Email blank`]);
        }
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setError((e) => [...e, `Passwords must be the same`]);
        }
        if (passwordRef.current.value === '') {
            setError((e) => [...e, `Password blank`]);
        }
        if (passwordConfirmRef.current.value === '') {
            setError((e) => [...e, `Password Confirm blank`]);
        }

        if (error.length <= 0) {
            try {
                await signUp(emailRef.current.value, passwordRef.current.value);
                history.push('./');
            } catch {}
        }
        setLoading(false);
    };

    return (
        <div>
            <Card className='' style={{ minWidth: '350px' }}>
                <Card.Body>
                    <h2 className='text-center'>Sign Up</h2>
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
                            {currentUser && currentUser.email}
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
                            <Form.Control
                                type='password'
                                placeholder='Password Confirm'
                                ref={passwordConfirmRef}
                                required
                            />
                            <Button
                                className='mt-2'
                                disabled={loading}
                                block
                                onClick={handleSubmit}
                            >
                                Sign Up
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Already have an Account? <Link to='./signin'>Log On</Link>
            </div>
        </div>
    );
}
