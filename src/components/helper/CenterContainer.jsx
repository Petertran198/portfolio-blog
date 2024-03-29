import React from 'react';
import './centerContainer.scss';
export default function CenterContainer({ children }) {
    return (
        <div
            className='container-group d-flex align-items-center justify-content-center'
            id='bg-gradient'
        >
            {children}{' '}
        </div>
    );
}
