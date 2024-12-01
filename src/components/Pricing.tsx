import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "5 AI portraits per month",
      "Basic styles",
      "Standard quality",
      "24-hour support"
    ],
    highlighted: false
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "per month",
    features: [
      "50 AI portraits per month",
      "All premium styles",
      "HD quality",
      "Priority support",
      "Commercial usage"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited AI portraits",
      "Custom styles",
      "4K quality",
      "Dedicated support",
      "API access",
      "Custom integration"
    ],
    highlighted: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Simple Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-elegant hover:shadow-elegant-hover 
                         transition-all duration-300 overflow-hidden ${
                           plan.highlighted ? 'ring-2 ring-primary' : ''
                         }`}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-500 ml-2">{plan.period}</span>
                    )}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-2 px-4 rounded-lg transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-primary text-white hover:shadow-elegant-hover'
                        : 'border border-primary/10 text-primary hover:border-primary'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};