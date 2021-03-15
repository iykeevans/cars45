import React from "react";
import "../asset/scss/partnership.scss";

export default function PartnershipCard({ content, image, title }) {
  return (
    <div className="partnership-card">
      <div className="partnership-card-intro">
        <img src={image} />
        <h5>{title}</h5>
      </div>
      <p>{content}</p>
    </div>
  );
}
