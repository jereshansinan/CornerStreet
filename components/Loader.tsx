/* eslint-disable prettier/prettier */
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9 , 0 , 0.1 , 1 ");

const Loader = () => {
  const counts = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: {
        ease: "hop",
      },
    });

    counts.current.forEach((count, index) => {
      const digits = count.querySelectorAll(".digit h1");

      tl.to(
        digits,
        {
          y: "0%",
          duration: 1,
          stagger: 0.075,
        },
        index * 1
      );

      if (index < counts.current.length) {
        tl.to(
          digits,
          {
            y: "100%",
            duration: 1,
            stagger: 0.075,
          },
          index * 1 + 1
        );
      }
    });

    tl.to(".spinner", {
      opacity: 0,
      duration: 0.3,
    });

    tl.to(
      ".word h1",
      {
        y: "0%",
        duration: 1,
      },
      "<"
    );

    tl.to(".divider", {
      scaleY: "100%",
      duration: 0.6,
      onComplete: () => {
        gsap.to(".divider", { opacity: 0, duration: 0.4, delay: 0.3 });
      },
    });

    tl.to(".divider2", {
      scaleY: "100%",
      duration: 0.6,
      onComplete: () => {
        gsap.to(".divider2", { opacity: 0, duration: 0.4, delay: 0.3 });
      },
    });

    tl.to("#word-1 h1", {
      y: "100%",
      duration: 1,
      dalay: 0.3,
    });

    tl.to(
      "#word-2 h1",
      {
        y: "-110%",
        duration: 1,
        dalay: 0.3,
      },
      "<"
    );

    tl.to(
      "#word-3 h1",
      {
        y: "100%",
        duration: 1,
        dalay: 0.3,
      },
      "<"
    );

    tl.to(".blockb", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
      stagger: 0.1,
      delay: 0.75,
      onComplete: () => {
        document.querySelector(".loader")?.classList.add("hidden");
      },
    });
  }, []);

  return (
    <div className="loader">
      <div className="overlay">
        <div className="blockb" />
        <div className="blockb" />
        <div className="blockb" />
      </div>

      <div className="intro-logo">
        <div className="word" id="word-1">
          <h1>
            <span>Indian</span>
          </h1>
        </div>
        <div className="word" id="word-2">
          <h1>
            <span>Savoury</span>
          </h1>
        </div>
        <div className="word" id="word-3">
          <h1>
            <span>Delights</span>
          </h1>
        </div>
      </div>

      <div className="divider" />

      <div className="divider2" />

      <div className="spinner-container">
        <div className="spinner" />
      </div>

      <div className="counter">
        {[
          ["0", "0"],
          ["2", "2"],
          ["5", "8"],
          ["7", "7"],
          ["9", "9"],
        ].map((digits, i) => (
          <div
            key={i}
            className="count"
            ref={(el) => {
              if (el) counts.current[i] = el;
            }}
          >
            {digits.map((digit, j) => (
              <div key={j} className="digit">
                <h1>{digit}</h1>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
