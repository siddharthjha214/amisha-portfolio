import React from 'react';
import { Section } from './ui/Section';
import { Project } from '../types';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'Growth Strategy Audit',
    description: 'A comprehensive breakdown of how Notion grew to 20M+ users using community-led growth tactics.',
    tags: ['Case Study', 'Growth', 'Analysis'],
    link: '#'
  },
  {
    id: '2',
    title: 'The Productivity OS',
    description: 'A custom Notion template system designed to help students and young professionals manage tasks effectively.',
    tags: ['No-Code', 'Product', 'System'],
    link: '#'
  },
  {
    id: '3',
    title: 'Tech Trends Newsletter',
    description: 'Curated weekly insights on the intersection of business and emerging technology, sent to 500+ subscribers.',
    tags: ['Writing', 'Newsletter', 'Curator'],
    link: '#'
  },
  {
    id: '4',
    title: 'Local Business Automation',
    description: 'Helped a local coffee shop save 10 hours/week by automating their inventory and scheduling process.',
    tags: ['Automation', 'Operations', 'Zapier'],
    link: '#'
  }
];

export const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">Things I've worked on</h2>
          <p className="text-gray-600 max-w-xl">
            A collection of experiments, case studies, and real-world projects.
          </p>
        </div>
        <a href="#" className="hidden md:flex items-center text-navy font-medium hover:text-amber-600 transition-colors group">
          View GitHub <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-amber-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-2 flex-wrap">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full tracking-wide uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <ExternalLink size={18} className="text-gray-300 group-hover:text-navy transition-colors" />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-navy mb-3 group-hover:text-amber-600 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              {project.description}
            </p>
            
            <a href={project.link} className="inline-flex items-center text-sm font-bold text-navy border-b-2 border-transparent group-hover:border-amber-400 pb-0.5 transition-all">
              View Case Study <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
         <a href="#" className="inline-flex items-center text-navy font-medium hover:text-amber-600 transition-colors">
          View GitHub <ArrowRight size={18} className="ml-2" />
        </a>
      </div>
    </Section>
  );
};