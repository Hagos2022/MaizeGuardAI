import React from 'react';
import { Leaf, Shield, Upload, Activity } from 'lucide-react';
import { Link } from '../components/Link';

const MAIZE_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1598335624134-5bceb5de202d?auto=format&fit=crop&w=1200&q=80', // Beautiful corn field
  field: '../src/Img/corn-2655525_1920.jpg', // Close-up of corn leaves
  diseases: {
    blight: 'https://unsplash.com/photos/robot-hand-holding-corn-Or8qIb_4CIg', // Corn plants in field
  },
};

export function Home() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
            <img
              src={MAIZE_IMAGES.hero}
              alt="Vibrant green maize field"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end">
              <div className="text-white p-8">
                <h1 className="text-5xl font-bold mb-4">MaizeGuard AI</h1>
                <p className="text-xl max-w-2xl mx-auto">
                  Advanced maize leaf disease detection powered by artificial
                  intelligence. Protect your precious maize crops with instant,
                  accurate disease identification.
                </p>
              </div>
            </div>
          </div>
          <Link
            href="/detect"
            className="inline-block mt-8 px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Start Detection
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src={MAIZE_IMAGES.field}
              alt="Healthy maize leaves"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Protect Your Maize Investment
            </h2>
            <p className="text-gray-700 mb-6">
              Our AI-powered system specializes in detecting common maize
              diseases including Northern Leaf Blight, Gray Leaf Spot, and
              Common Rust. Early detection is crucial for maintaining healthy
              maize crops and ensuring optimal yield.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Upload className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy Upload</h3>
                <p className="text-gray-600">
                  Simply upload a photo of your maize leaf
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Activity className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
                <p className="text-gray-600">Get immediate detection results</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose MaizeGuard AI?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Leaf className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Specialized for Maize
              </h3>
              <p className="text-gray-600">
                Purpose-built for maize disease detection
              </p>
            </div>
            <div className="text-center">
              <Activity className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Analysis</h3>
              <p className="text-gray-600">Get results in seconds, not days</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Preventive Action</h3>
              <p className="text-gray-600">
                Early detection for better crop protection
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
