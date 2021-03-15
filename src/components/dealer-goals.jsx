import React from "react";

export default function Dealergoals({ header, points, color }) {
  return (
    <div className={`dealer-goals ${color}`}>
      <h6>{header}</h6>
      <ul className="points">
        {points.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
}
