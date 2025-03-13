import React from 'react';

type ButtonType = {
    title?: string | null
    children?: React.ReactNode;
    type?: 'primary' | 'version-active';
    className?: string
    disabled?: boolean
    onClick: () => void
}

export const Button = ({className, title, disabled, onClick, type, children}: ButtonType) => {
    const btnClass = type === 'version-active' ? 'button active' : 'button';

    return (
        <button
            className={`${btnClass} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >{title || children}</button>
    )
}