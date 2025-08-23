/* eslint-disable prettier/prettier */
import React from "react";

const marqueeText = "Open 8am - 7pm • Monday - Friday • ";

const TimeHeader: React.FC = () => {
  return (
    <div
      style={{
        background: "#1976d2",
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        padding: "1rem 0",
      }}
    >
      <div
        style={{
          display: "inline-block",
          animation: "marquee 30s linear infinite",
        }}
      >
        <h1
          style={{
            display: "inline",
            color: "#fff",
            fontSize: "1.25rem",
            margin: 0,
            letterSpacing: "1px",
          }}
        >
          {marqueeText.repeat(10)}
        </h1>
      </div>
      <style>
        {`
                    @keyframes marquee {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-50%); }
                    }
                `}
      </style>
    </div>
  );
};

export default TimeHeader;
