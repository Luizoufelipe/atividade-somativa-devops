import React from "react"

export function SideMenu({children}) {
    return (
        <aside className="side-menu">
            <nav aria-label="Menu principal">
                <ul>
                    {React.Children.map(children, (child, index) =>(
                        <li key={index}>
                            {child}
                        </li>                        
                    ))}
                </ul>
            </nav>
        </aside>
    )
}