import React from 'react';

import './Input.css';
// TODO: check out https://formik.org/

const Input = props => {
    const element =
        props.element === 'input' ? (
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
            />
        ) : (
            <textarea id={props.id} rows={props.rows || 3} />
        );
    return (
        <div className={`form-control ${props.className}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </div>
    );
};

export default Input;
