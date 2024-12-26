import { useState } from 'react';
import { generateChatResponse } from '../services/gemini';
import { ChatMessage } from '../types';
import { MAIZE_SYSTEM_PROMPT } from '../constants/prompts';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFirstMessage, setIsFirstMessage] = useState(true);

  const sendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      let newMessages: ChatMessage[] = [];

      // Add welcome message with first user message
      if (isFirstMessage) {
        const welcomeMessage = MAIZE_SYSTEM_PROMPT.split('Welcome Message: ')[1].replace(/["]/g, '');
        newMessages = [
          { role: 'assistant', content: welcomeMessage },
          { role: 'user', content }
        ];
        setIsFirstMessage(false);
      } else {
        newMessages = [...messages, { role: 'user', content }];
      }
      
      setMessages(newMessages);

      // Get AI response
      const response = await generateChatResponse(content);
      
      // Add AI response
      setMessages([...newMessages, { role: 'assistant', content: response }]);
    } catch (err) {
      setError('Failed to get response. Please try again.');
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    error,
    sendMessage
  };
}