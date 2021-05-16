import React from "react";

export default function PeriodicServicesItem({ text }) {
  return (
    <div className="mb-3 d-flex align-items-center">
      <img
        src="https://storage.googleapis.com/cars45-web-bucket/check.svg"
        alt="check-circle"
        style={{ height: 16, width: 16 }}
      />

      <span className="ml-2">{text}</span>
    </div>
  );
}
