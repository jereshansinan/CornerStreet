/* eslint-disable prettier/prettier */
import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";

const FAQ = () => {
  // FAQ data
  const faqItems = [
    {
      id: "1",
      question: "How do I place an order?",
      answer:
        "You can place an order by browsing our menu, selecting your favorite dishes, and proceeding to checkout.",
    },
    {
      id: "2",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and other popular payment methods.",
    },
    {
      id: "3",
      question: "Do you offer delivery?",
      answer:
        "Yes, we offer delivery to most locations. Check your address during checkout to confirm availability.",
    },
    {
      id: "4",
      question: "Can I modify or cancel my order?",
      answer:
        "You can modify or cancel your order within 15 minutes of placing it. Contact our support team for assistance.",
    },
    {
      id: "5",
      question: "Are your ingredients fresh?",
      answer:
        "Yes, we use only the freshest ingredients sourced from local suppliers.",
    },
    {
      id: "6",
      question: "Do you have vegetarian or vegan options?",
      answer:
        "Yes, we offer a variety of vegetarian and vegan dishes. Check our menu for details.",
    },
  ];

  return (
    <section className="px-2 md:px-32 py-6 md:py-16">
      {/* Section Heading */}
      <div className="text-center mb-8 md:mb-16">
        <div className="h-1 w-32 bg-[#9E6137] mb-2 rounded-lg mx-auto" />{" "}
        {/* Thin brown line */}
        <h2 className="text-3xl md:text-5xl font-bold">Frequently Asked Questions</h2>{" "}
        {/* Heading */}
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto">
        <Accordion>
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              aria-label={item.question}
              title={item.question}
            >
              <p className="text-lg md:text-xl text-gray-600">{item.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;