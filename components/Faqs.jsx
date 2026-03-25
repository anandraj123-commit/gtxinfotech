"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const leftFAQs = [
  {
    question: "What Services Do You Offer?",
    answer: "We offer consulting, strategy, and digital transformation services.",
  },
  {
    question: "How Can Your Firm Help Improve Our Business?",
    answer: "We analyze your processes and provide data-driven improvements.",
  },
  {
    question: "What Experience Do You Have In Our Industry?",
    answer: "We have worked across multiple industries with proven results.",
  },
  {
    question: "What Is Your Approach Or Methodology?",
    answer: "We follow a structured, agile, and collaborative approach.",
  },
  {
    question: "Can You Provide References Or Case Studies?",
    answer: "Yes, we can share case studies upon request.",
  },
];

const rightFAQs = [
  {
    question: "How Do You Determine The Cost Of Services?",
    answer: "Pricing depends on scope, complexity, and timeline.",
  },
  {
    question: "What Sets Your Firm Apart From Competitors?",
    answer: "We focus on measurable outcomes and client collaboration.",
  },
  {
    question: "How Long Does Consulting Engagement Last?",
    answer: "It varies from weeks to months depending on project size.",
  },
  {
    question: "Can You Explain Your Team's Expertise?",
    answer: "Our team consists of industry experts and strategists.",
  },
  {
    question: "How You Measure The Success Of Your Service?",
    answer: "We track KPIs, ROI, and business impact.",
  },
];

function FAQItemComponent({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-semibold text-gray-900">
          {item.question}
        </span>

        <span className="text-orange-500">
          {open ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>

      {open && (
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          {item.answer}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          Most Asked Question To Us
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            {leftFAQs.map((item, i) => (
              <FAQItemComponent key={i} item={item} />
            ))}
          </div>

          <div>
            {rightFAQs.map((item, i) => (
              <FAQItemComponent key={i} item={item} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            If you haven’t found the answer you’re looking for, we’re here to
            help. Here’s a method for getting help!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium">
              Contact Via Form
            </button>

            <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-md font-medium">
              Contact Nearest Office
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}