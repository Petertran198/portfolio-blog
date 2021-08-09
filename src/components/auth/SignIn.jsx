import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SignIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError([]);

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setError((e) => [...e, `Passwords must be the same`]);
        }
        if (passwordRef.current.value === '') {
            setError((e) => [...e, `Password blank`]);
        }
        if (passwordConfirmRef.current.value === '') {
            setError((e) => [...e, `Password Confirm blank`]);
        }

        setLoading(false);
    };

    return (
        <div>
            <Card className='' style={{ minWidth: '350px' }}>
                <Card.Body>
                    <h2 className='text-center'>Sign In</h2>
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
                                Sign In
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
