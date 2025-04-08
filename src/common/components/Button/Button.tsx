import React from 'react';
import btn from '../../styles/Button.module.css';

type ButtonType = {
    title?: string | null
    children?: React.ReactNode;
    type?: 'primary' | 'version-active';
    className?: string
    disabled?: boolean
    onClick: () => void
}

export const Button = ({className, title, disabled, onClick, type, children}: ButtonType) => {
    const btnClass = type === 'version-active' ? `${btn.button} ${btn.active}` : btn.button;

    return (
        <button
            className={`${btnClass} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >{title || children}</button>
    )
}