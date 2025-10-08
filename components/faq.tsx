/* eslint-disable prettier/prettier */
"use client";
import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";

const FAQ = () => {
  // FAQ data
  const faqItems = [
    {
      id: "1",
      question: "Are your burgers made fresh?",
      answer:
        "Yes, all our burgers are made fresh to order using high-quality beef and ingredients.",
    },
    {
      id: "2",
      question: "Do you offer vegetarian or vegan options?",
      answer:
        "We offer a veggie burger and can customize some dishes for vegetarian guests. Please ask our staff for details.",
    },
    {
      id: "3",
      question: "How spicy are your wings?",
      answer:
        "Our wings come in a variety of spice levels, from mild to extra hot. Let us know your preference when ordering.",
    },
    {
      id: "4",
      question: "Do you serve hotdogs?",
      answer:
        "Yes, we serve classic American-style hotdogs with a variety of toppings.",
    },
    {
      id: "5",
      question: "Can I place an order for pickup or delivery?",
      answer:
        "Absolutely! You can order online through uber eats, call us, or visit in person.",
    },
    {
      id: "6",
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, credit/debit cards, and mobile payments. Please confirm your payment method when ordering.",
    },
    {
      id: "7",
      question: "Where are you located?",
      answer:
        "Corner Street Burgers & Wings is located in Georgia. Visit our website or contact us for our exact address and hours.",
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
