import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

const Button = (props) => {
    return (
        <Link to={props.to} className='btn'>
            <button className='btn'>
                {props.text}
            </button>
        </Link>
    )
}
export default Button;