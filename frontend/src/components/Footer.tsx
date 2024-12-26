import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from './Link';

interface TeamMember {
  name: string;
  role: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

const team: TeamMember[] = [
  {
    name: 'Fatima Haruna Imam',
    role: 'Frontend Engineer & UI Designer',
    github: 'https://github.com/FatimaHarunaImam',
    linkedin: 'https://www.linkedin.com/in/fatima-imam-117424201/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    email: 'fatima@example.com',
  },
  {
    name: 'Hagos Mehari',
    role: 'Frontend Engineer',
    github: 'https://github.com/Hagos2022',
    linkedin: 'http://www.linkedin.com/in/mehari-hagos',
    email: 'hagos69@gmail.com ',
  },
  {
    name: 'Mahmud Sani Madobi',
    role: 'Backend & AI Developer',
    github: 'https://github.com/meertechnology01',
    linkedin: 'https://www.linkedin.com/in/mahmud-madobi-988ba31ab/',
    email: 'meertechnology01@gmail.com',
  },
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Disease Detection', path: '/detect' },
  { name: 'AI Chat', path: '/chat' },
  { name: 'Disease Library', path: '/diseases' },
  { name: 'Resources', path: '/resources' },
  { name: 'About', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Blog', path: '/blog' },
  { name: 'Feedback', path: '/feedback' },
];

export function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About MaizeGuard AI</h3>
            <p className="text-green-100">
              MaizeGuard AI is an AI-powered maize disease detection system
              designed to assist African farmers.It's an ALX Africa Final
              Capstone Project with the goal of helping farmers identify and
              manage maize diseases early using artificial intelligence. The
              project features real-time disease detection, AI-powered chat
              assistance, a comprehensive disease library, and educational
              resources for farmers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-green-100 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Development Team</h3>
            <div className="space-y-4">
              {team.map((member) => (
                <div key={member.name} className="text-green-100">
                  <h4 className="font-medium">{member.name}</h4>
                  <p className="text-sm text-green-200">{member.role}</p>
                  <div className="flex space-x-3 mt-1">
                    {member.github && (
                      <a href={member.github} className="hover:text-white">
                        <Github size={16} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} className="hover:text-white">
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="hover:text-white"
                      >
                        <Mail size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-green-700 pt-8 text-center text-green-200">
          <p>
            &copy; {new Date().getFullYear()} MaizeGuard AI. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
