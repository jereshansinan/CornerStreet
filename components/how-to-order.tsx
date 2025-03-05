/* eslint-disable prettier/prettier */
import React from "react";

const HowToOrder = () => {
  return (
    <section className="px-2 md:px-32 py-6 md:py-16" id="how-to-order">
      {/* Section Heading */}
      <div className="text-center mb-8 md:mb-16">
        <div className="h-1 w-32 bg-[#9E6137] mb-2 rounded-lg mx-auto" />{" "}
        {/* Thin brown line */}
        <h2 className="text-3xl md:text-5xl font-bold">How to Order</h2>{" "}
        {/* Heading */}
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="text-center">
          <div className="text-6xl md:text-9xl font-bold text-[#9E6137] mb-4">
            01
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
          Text Us On WhatsApp
          </h3>
          <p className="text-lg md:text-xl text-gray-600">
          Send us a message with your order from our menu.
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <div className="text-6xl md:text-9xl font-bold text-[#9E6137] mb-4">
            02
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
          Let Us Know Your Preference
          </h3>
          <p className="text-lg md:text-xl text-gray-600">
             Specify whether you&apos;d like to pick up your order or have it delivered. If delivery, we&apos;ll arrange it for you.
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <div className="text-6xl md:text-9xl font-bold text-[#9E6137] mb-4">
            03
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
          Make Your Payment
          </h3>
          <p className="text-lg md:text-xl text-gray-600">
          Pay via EFT, e-wallet, or choose to pay cash or card at collection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;