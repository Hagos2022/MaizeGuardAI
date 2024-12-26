import React, { useState } from 'react';

export function Feedback() {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    type: 'general',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/meertechnology01@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: feedback.name,
          email: feedback.email,
          type: feedback.type,
          message: feedback.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFeedback({ name: '', email: '', type: 'general', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Feedback & Support
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          {status === 'success' && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
              Thank you for your feedback! We'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
              Something went wrong. Please try again later.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={feedback.name}
                onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={feedback.email}
                onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Feedback Type
              </label>
              <select
                value={feedback.type}
                onChange={(e) => setFeedback({ ...feedback, type: e.target.value })}
                className="w-full p-2 border rounded-lg"
              >
                <option value="general">General Feedback</option>
                <option value="bug">Report a Bug</option>
                <option value="feature">Feature Request</option>
                <option value="support">Support Request</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                value={feedback.message}
                onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
                className="w-full p-2 border rounded-lg h-32"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-2 px-4 bg-green-600 text-white rounded-lg ${status === 'sending'
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-green-700'
                }`}
            >
              {status === 'sending' ? 'Sending...' : 'Submit Feedback'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}