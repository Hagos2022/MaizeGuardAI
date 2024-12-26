import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // GitHub Flavored Markdown
import rehypeRaw from 'rehype-raw'; // Raw HTML in Markdown
import { useChat } from '../hooks/useChat';

export function Chat() {
  const { messages, isLoading, error, sendMessage } = useChat();
  const [input, setInput] = useState<string>('');

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Chat with MaizeGuard AI
          </h1>
          <p className="text-gray-600 mt-2">
            Ask anything about maize cultivation, diseases, and best practices
          </p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        {/* Display Messages */}
        <div className="prose prose-lg max-w-none mx-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 p-4 rounded-lg shadow ${
                message.sender === 'user'
                  ? 'bg-blue-50 text-blue-900'
                  : 'bg-gray-50 text-gray-900'
              }`}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]} // Enable GitHub Flavored Markdown
                rehypePlugins={[rehypeRaw]} // Enable raw HTML parsing
              >
                {message.content}
              </ReactMarkdown>
            </div>
          ))}

          {isLoading && (
            <div className="text-center mt-4 text-gray-500">Loading...</div>
          )}
        </div>

        {/* Input and Send Button */}
        <div className="flex items-center mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <button
            onClick={handleSendMessage}
            className="ml-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
