import React from 'react';

type ButtonType = {
    title?: string | null
    children?: React.ReactNode;
    type?: 'primary' | 'version' | 'version-active';
    className?: string
    disabled?: boolean
    onClick: () => void
}

export const Button = ({className, title, disabled, onClick, type, children}: ButtonType) => {
    const btnClass =
        type === 'version-active'
            ? 'version-button active' : type === 'version'
                ? 'version-button' : 'button';

    return (
        <button
            className={`${btnClass} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >{title || children}</button>
    )
}