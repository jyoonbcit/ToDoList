import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

const Button = (props) => {
    return (
        <button>
            <Link to={props.to} className='btn'>
                {props.text}
            </Link>
        </button>
    )
}
export default Button;