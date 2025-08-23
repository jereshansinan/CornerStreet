/* eslint-disable prettier/prettier */
"use client";
import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";

const FAQ = () => {
  // FAQ data
  const faqItems = [
    {
      id: "1",
      question: "Is your food Halal?",
      answer:
        "Yes, all our meat is sourced from certified Halal suppliers, and we prepare everything in a Halal-friendly environment.",
    },
    {
      id: "2",
      question: "Do you offer vegan or vegetarian options?",
      answer:
        "Yes, we have delicious vegan and vegetarian options available. Just let us know your preference when ordering!",
    },
    {
      id: "3",
      question: "How can I place an order?",
      answer:
        "You can order via WhatsApp, call us directly, or send us a message on social media. Let us know if you’d like pickup or delivery.",
    },
    {
      id: "4",
      question: "Do you offer delivery?",
      answer:
        "Yes, we offer delivery within selected areas. Delivery availability will be confirmed when you place your order.",
    },
    {
      id: "5",
      question: "How spicy is your food?",
      answer:
        "We can adjust the spice level to your preference—from mild to extra hot. Just mention your spice preference when ordering.",
    },
    {
      id: "6",
      question: "Do you take large orders for events or catering?",
      answer:
        "Absolutely! We cater for parties, events, and functions. Contact us in advance for custom platters and bulk pricing.",
    },
    {
      id: "7",
      question: "What payment methods do you accept?",
      answer:
        "We accept EFT, e-wallet, SnapScan, and cash or card on collection. Please confirm your payment method when placing your order.",
    },
    {
      id: "8",
      question: "Where are you located?",
      answer:
        "We operate from Pretoria. Orders are available for pickup or delivery. We’ll share the pickup details once your order is confirmed.",
    },
  ];

  return (
    <section className="px-2 md:px-12 lg:px-16 xl:px-32 py-6 md:py-16" id="faq">
      {/* Section Heading */}
      <div className="text-center mb-8 md:mb-16">
        <h1 className="text-3xl md:text-5xl">Frequently Asked Questions</h1>{" "}
        {/* Heading */}
      </div>

      {/* Accordion */}
      <div className="mx-auto">
        <Accordion
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                overflowY: "unset",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                overflowY: "hidden",
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
          variant="light"
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              aria-label={item.question}
              title={
                <span className="text-lg md:text-xl font-sans">
                  {item.question}
                </span>
              }
            >
              <p className="text-lg md:text-xl text-black font-normal font-sans">
                {item.answer}
              </p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
