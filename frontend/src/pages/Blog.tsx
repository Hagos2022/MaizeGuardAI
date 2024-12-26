import React from 'react';
import { Calendar } from 'lucide-react';

const posts = [
  {
    title: 'MAIZE LEAF DISEASE DETECTION AND CLASSIFICATION USING MACHINE LEARNING TECHNIQUE',
    date: '2024-03-10',
    excerpt: 'Learn how machine learning can be used to classify and detect maize leaf diseases.',
    author: 'Mahmud Sani',
    image: '../src/Img/deepl.png'
  },
  {
    title: 'Early Detection of Maize Diseases: A Game Changer',
    date: '2024-03-15',
    excerpt: 'Learn how early detection of maize diseases can significantly improve crop yields and reduce losses.',
    author: 'Dr. SM Madobi',
    image: '../src/Img/corn-2655525_1920.jpg'
  },
  {
    title: 'Best Practices for Maize Disease Prevention',
    date: '2024-03-10',
    excerpt: 'Discover the most effective strategies for preventing maize diseases in your crops.',
    author: 'Prof. Michael Chen',
    image: 'https://images.unsplash.com/photo-1598335624134-5bceb5de202d?auto=format&fit=crop&w=600&q=80'
  }

];

export function Blog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Latest Updates & Articles
        </h1>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <p className="text-sm text-gray-500">By {post.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}