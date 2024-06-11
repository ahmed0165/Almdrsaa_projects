// Features.jsx
import React from "react";

const features = [
  {
    label: "Free and Fast Delivery",
    icon: "🚚",
    description: "For orders in subsidiaries within 24 hours",
  },
  {
    label: "24/7 Customer Service",
    icon: "📞",
    description: "Reach out to us anytime for support",
  },
  {
    label: "Money Back Guarantee",
    icon: "💸",
    description: "We offer a 30-day money back guarantee",
  },
];

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
      {features.map((feature, index) => (
        <div key={index} className="text-center p-4 border rounded-md">
          <div className="text-3xl mb-4">{feature.icon}</div>
          <h4 className="text-xl font-bold mb-2">{feature.label}</h4>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
