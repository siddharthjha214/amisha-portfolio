import React from 'react';
import { Section } from './ui/Section';
import { Article } from '../types';
import { ArrowUpRight } from 'lucide-react';

const articles: Article[] = [
  {
    id: '1',
    title: 'Why generalists win in a specialized world',
    summary: 'Connecting dots between seemingly unrelated fields is a superpower.',
    category: 'Career',
    date: 'Oct 2023',
    link: '#'
  },
  {
    id: '2',
    title: 'My simple system for managing personal finances',
    summary: 'Automating savings and investments so I don’t have to think about it.',
    category: 'Money',
    date: 'Sep 2023',
    link: '#'
  },
  {
    id: '3',
    title: 'Reflections on my first year post-grad',
    summary: 'The difference between university theory and workplace reality.',
    category: 'Mindset',
    date: 'Aug 2023',
    link: '#'
  }
];

export const Writing: React.FC = () => {
  return (
    <Section id="writing" className="bg-white dark:bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">Ideas & Notes</h2>
          <p className="text-gray-600">Documenting my learning curve in public.</p>
        </div>

        <div className="space-y-4">
          {articles.map((article) => (
            <a 
              key={article.id} 
              href={article.link}
              className="block group bg-transparent hover:bg-cream p-6 rounded-2xl transition-colors border border-transparent hover:border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase">
                      {article.category}
                    </span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy group-hover:text-amber-600 transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {article.summary}
                  </p>
                </div>
                <div className="flex-shrink-0 self-start md:self-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                  <ArrowUpRight className="text-gray-400" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="text-navy font-medium hover:underline decoration-amber-400 underline-offset-4 decoration-2">
            Read all articles →
          </a>
        </div>
      </div>
    </Section>
  );
};