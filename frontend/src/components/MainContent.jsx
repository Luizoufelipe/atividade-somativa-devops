import React from "react"

export function MainContent({ children }) {
    return (
        <section className="main-content">
            <h1>Biblioteca</h1>
            {children}
        </section>
    )
}