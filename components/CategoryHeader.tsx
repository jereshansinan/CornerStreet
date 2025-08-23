/* eslint-disable prettier/prettier */
import React from "react";

const marqueeText = "BURGERS • WINGS •";

const CategoryHeader: React.FC = () => {
  return (
    <div
      style={{
        background: "#1976d2",
        overflow: "hidden",
        width: "100%",
        whiteSpace: "nowrap",
        position: "relative",
        height: "100px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          color: "#fff",
          fontSize: "2.5rem",
          letterSpacing: "0.1em",
          animation: "marquee 30s linear infinite",
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} style={{ marginRight: "2rem" }}>
            {marqueeText}
          </span>
        ))}
      </h1>
      <style>
        {`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                `}
      </style>
    </div>
  );
};

export default CategoryHeader;
