type ButtonType = {
    className: string
    title: string
    disabled?: boolean
    onClick: () => void
}

export const Button = ({className, title, disabled, onClick}: ButtonType) => {
    return (
        <button
            className={className}
            disabled={disabled}
            onClick={onClick}
        >{title}</button>
    )
}