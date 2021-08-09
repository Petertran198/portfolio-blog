import React from 'react';
import './header.scss';
export default function Header() {
    return (
        <div className='fullscreen-container'>
            <div className='h-100 bg-dark text-white position-relative'>
                <a
                    href='https://github.com/Petertran198'
                    className='position-absolute text-white text-decoration-none title'
                >
                    Peter Tran
                    <br /> <span className='web-dev-title text-danger'>WebDev </span>
                    <span className='web-dev-title '> Blog;</span>
                </a>
                <div className='title-box-logo bg-primary position-absolute'></div>
            </div>
        </div>
    );
}
