export function Button({ children, className='', ...props }) {
    return (
        <button className={`menu-button ${className}`} 
            type="button" 
            {...props}
        >
            {children}
        </button>
    )
}