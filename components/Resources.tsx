import React from 'react';
import { Section } from './ui/Section';
import { Resource } from '../types';
import { BookOpen, Mic, PenTool } from 'lucide-react';

const resources: Resource[] = [
  { id: '1', name: 'Atomic Habits', description: 'The Bible for building better systems.', type: 'Book', link: '#' },
  { id: '2', name: 'My First Million', description: 'Business brainstorming on steroids.', type: 'Podcast', link: '#' },
  { id: '3', name: 'Notion', description: 'Where I organize my entire life.', type: 'Tool', link: '#' },
  { id: '4', name: 'Zero to One', description: 'Notes on startups and future.', type: 'Book', link: '#' },
  { id: '5', name: 'Readwise', description: 'For remembering what I read.', type: 'Tool', link: '#' },
  { id: '6', name: 'Invest Like the Best', description: 'High level capital allocator interviews.', type: 'Podcast', link: '#' },
];

export const Resources: React.FC = () => {
  const getIcon = (type: string) => {
    switch(type) {
      case 'Book': return <BookOpen size={16} />;
      case 'Podcast': return <Mic size={16} />;
      default: return <PenTool size={16} />;
    }
  };

  return (
    <Section id="resources">
      <div className="mb-16">
        <h2 className="text-4xl font-serif font-bold text-navy mb-4">Resources I recommend</h2>
        <p className="text-gray-600 max-w-xl">
          The tools, books, and content that have shaped my thinking the most.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res) => (
          <a 
            key={res.id} 
            href={res.link}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-amber-200 transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 bg-cream rounded-lg text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                {getIcon(res.type)}
              </span>
              <span className="text-xs font-medium text-gray-400">{res.type}</span>
            </div>
            <h3 className="font-bold text-navy mb-1 group-hover:text-amber-600 transition-colors">{res.name}</h3>
            <p className="text-sm text-gray-500">{res.description}</p>
          </a>
        ))}
      </div>
    </Section>
  );
};