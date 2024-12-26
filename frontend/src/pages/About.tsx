import React from 'react';
import { Sprout, Brain, Users, Target, BarChart, Shield } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: 'Fatima',
    role: 'Frontend Engineer & UI Designer',
    description: 'Expert in creating intuitive and beautiful user interfaces with React and modern CSS frameworks.',
    image: '../src/Img/fatima.jpg'
  },
  {
    name: 'Hagos',
    role: 'Frontend Engineer',
    description: 'Specialized in building responsive and performant web applications using modern JavaScript frameworks.',
    image: './src/Img/hagos.jpg'
  },
  {
    name: 'Mahmud',
    role: 'Backend & AI Developer',
    description: 'Expert in machine learning and AI, focusing on computer vision and agricultural applications.',
    image: './src/Img/mahmud.jpg'
  }
];

const PROJECT_STATS = [
  {
    label: 'Model Accuracy',
    value: '95.35%',
    description: 'In disease detection and classification'
  },
  {
    label: 'Disease Types',
    value: '3+',
    description: 'Including Northern Leaf Blight, Gray Leaf Spot, and Common Rust etc...'
  },
  {
    label: 'Target Region',
    value: 'Ethiopia and Nigeria',
    description: 'Supporting local farmers and agriculture'
  }
];

export function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About MaizeGuard AI
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            An innovative solution using deep learning to protect maize crops and enhance food security in Nigeria
          </p>
        </div>

        {/* Project Overview */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-gray-700 mb-6">
            MaizeGuard AI addresses the critical challenge of maize leaf diseases in Africa's agricultural sector.
            Using advanced Convolutional Neural Networks (CNNs), our system provides early detection and classification
            of common maize diseases, helping farmers protect their crops and maintain optimal yields.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECT_STATS.map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Target className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
            <p className="text-gray-600">
              Designed for resource-limited conditions, making it accessible to small-scale farmers
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <BarChart className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Analysis</h3>
            <p className="text-gray-600">
              Instant disease detection and classification with high accuracy
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Impact</h3>
            <p className="text-gray-600">
              Contributing to food security and economic stability
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Technology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Deep Learning Model</h3>
              <p className="text-gray-700">
                Our system utilizes Convolutional Neural Networks (CNNs) trained on extensive datasets
                of maize leaf images, achieving 95.35% accuracy in disease detection and classification.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">User-Friendly Interface</h3>
              <p className="text-gray-700">
                Built with modern web technologies to ensure accessibility and ease of use,
                allowing farmers to quickly get insights about their crops' health.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-green-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}