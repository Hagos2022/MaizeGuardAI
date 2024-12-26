import React from 'react';

const faqs = [
  {
    question: 'How accurate is the disease detection?',
    answer: 'Our AI model achieves 95.35% accuracy in detecting common maize diseases, including Northern Leaf Blight, Gray Leaf Spot, and Common Rust.'
  },
  {
    question: 'What type of images should I upload?',
    answer: 'Upload clear, well-lit photos of maize leaves showing the suspected disease symptoms. Ensure the affected area is in focus and fills most of the frame.'
  },
  {
    question: 'How can I get the best detection results?',
    answer: 'Take photos during daylight hours, avoid shadows, and ensure the leaf surface is clearly visible. Multiple photos from different angles may help improve accuracy.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we take data security seriously. All uploaded images and chat conversations are handled securely and are not shared with third parties.'
  }
];

export function FAQ() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {faq.question}
              </h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}