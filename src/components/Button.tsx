type ButtonType = {
    className?: string
    title: string
    disabled?: boolean
    onClick: () => void
    type?: 'primary' | 'version' | 'version-active';
}

export const Button = ({className, title, disabled, onClick, type}: ButtonType) => {
    const btnClass =
        type === 'version-active' ? 'version-button active' :
        type === 'version' ? 'version-button' :
        'button';

    return (
        <button
            className={`${btnClass} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >{title}</button>
    )
}