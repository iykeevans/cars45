import React from 'react'

export default function Dealerpoint({text}) {
    return (
        <div className="dealer-point-container">
            <div className="dealer-point-box">
                <p>{text}</p>
            </div>
            <div className="dealer-point-line"></div>
        </div>
    )
}