import React, { useRef } from "react";
import "./card.css";

export default function Card({ title, desc, children }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rx = -(y - rect.height / 2) / 18;
    const ry = (x - rect.width / 2) / 18;

    card.style.transform = `
      rotateX(${rx}deg)
      rotateY(${ry}deg)
      translateZ(35px)
    `;
  };

  const handleLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
      translateZ(0px)
    `;
  };

  return (
    <div
      ref={cardRef}
      className="ui-card"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
      {children}
    </div>
  );
}
