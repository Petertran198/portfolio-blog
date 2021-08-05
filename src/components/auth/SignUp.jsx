import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
export default function SignUp() {
    return (
        <div>
            <Card className=''>
                <Card.Body>
                    <h2 className='text-center'>Sign Up</h2>
                    <Form>
                        <Form.Group>
                            <Form.Control type='email' placeholder='Enter email' />
                            <Form.Text className='text-muted'>
                                We'll never share your email with anyone else.
                            </Form.Text>{' '}
                            <Form.Control
                                type='password'
                                placeholder='Enter password'
                            />
                            <Button className='mt-1'>Sign Up</Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Already have an Account? Log In
            </div>
        </div>
    );
}
