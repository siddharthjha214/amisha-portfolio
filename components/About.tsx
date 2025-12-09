
import React from 'react';
import { Section } from './ui/Section';
import { Briefcase, Globe, Users, Target, Heart, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const experiences = [
    {
      role: 'Senior HR Recruiter',
      company: 'Upstaff',
      period: '2024 – Present',
      location: 'Ontario, Canada',
      desc: 'Leading internal recruitment, full-cycle hiring, and talent strategy.'
    },
    {
      role: 'Senior Recruiter',
      company: 'IMCS Group',
      period: '2023 – 2024',
      desc: 'Built strong candidate pipelines, partnered with hiring managers.'
    },
    {
      role: 'Senior Recruiter',
      company: 'T&N Business Services Pvt. Ltd.',
      period: '2023',
      desc: 'Full-cycle hiring, behavioral interviews, candidate evaluation, client management.'
    },
    {
      role: 'Talent Acquisition Recruiter',
      company: 'Scalable Systems',
      period: '2022 – 2023',
      desc: 'IT & Non-IT hiring, sourcing strategies, conversion optimization, team collaboration.'
    },
    {
      role: 'HR Manager & US IT Recruiter',
      company: 'Ecera System',
      period: '2021 – 2022',
      desc: 'Managed 30+ team, handled HR operations, US IT recruitment, H1B sponsorships, onboarding, compensation planning, performance reviews, training.'
    },
    {
      role: 'HR Intern',
      company: 'Various',
      period: '2020 – 2021',
      desc: 'Sourcing, screening, onboarding, orientation, events.'
    }
  ];

  const expertise = [
    "Full-cycle Recruitment (IT & Non-IT)", "US & Canada Hiring", "Client Relationship Management", 
    "Behavioral Interviewing", "HR Operations", "Visa Sponsorship (H1B)",
    "Team Leadership", "Onboarding & Documentation", "Performance Reviews"
  ];

  return (
    <div className="w-full bg-lux-cream dark:bg-lux-black transition-colors duration-700">
      <Section className="pt-32 pb-20">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-serif text-lux-black dark:text-white mb-6 leading-tight">
            The Architect of <span className="text-lux-gold italic">Talent.</span>
          </h2>
          <div className="w-24 h-1 bg-lux-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
            I am a Senior HR Recruiter with global experience across Canada, the US, and India. 
            My work is defined by strategic thinking, precision in hiring, and a commitment to 
            building high-performing teams for fast-scaling companies.
          </p>
        </div>

        {/* Philosophy / What Drives Me */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24 animate-slide-up" style={{ animationDelay: '0.2s' }}>
           <div className="bg-white dark:bg-lux-charcoal p-10 rounded-2xl shadow-sm border border-gray-200/50 dark:border-white/5 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-lux-gold">
                <Target size={120} />
              </div>
              <h3 className="text-2xl font-serif text-lux-black dark:text-white mb-4 flex items-center gap-3 relative z-10">
                <Globe className="text-lux-gold" size={24}/> My Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                People-first hiring, transparent communication, and strategic talent mapping. I believe in creating seamless processes that build long-term organizational value.
              </p>
           </div>
           <div className="bg-white dark:bg-lux-charcoal p-10 rounded-2xl shadow-sm border border-gray-200/50 dark:border-white/5 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-lux-gold">
                <Heart size={120} />
              </div>
              <h3 className="text-2xl font-serif text-lux-black dark:text-white mb-4 flex items-center gap-3 relative z-10">
                <Users className="text-lux-gold" size={24}/> What Drives Me
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                A passion for connecting top-tier talent with businesses. I strive to deliver meaningful hiring experiences and shape workplaces with integrity and vision.
              </p>
           </div>
        </div>

        {/* Professional Journey (Timeline) */}
        <div className="max-w-4xl mx-auto mb-24 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl font-serif text-center text-lux-black dark:text-white mb-12">Professional Journey</h3>
          
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-lux-gold/20 before:via-lux-gold before:to-lux-gold/20">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                
                {/* Timeline Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-lux-black bg-lux-gold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase size={14} className="text-white" />
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-lux-charcoal p-6 rounded-xl shadow-sm border border-gray-200/50 dark:border-white/5 hover:border-lux-gold/30 hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="font-bold text-lux-black dark:text-white text-lg">{exp.role}</h4>
                    <span className="text-xs font-bold text-lux-gold uppercase tracking-wider bg-lux-gold/10 px-2 py-1 rounded mt-2 sm:mt-0 w-fit">{exp.period}</span>
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">{exp.company} {exp.location && <span className="opacity-75">• {exp.location}</span>}</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Core Expertise (Tags) */}
        <div className="animate-slide-up mb-12" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-3xl font-serif text-center text-lux-black dark:text-white mb-10">Core Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {expertise.map((skill, i) => (
              <div key={i} className="group flex items-center px-5 py-3 bg-white dark:bg-lux-charcoal border border-gray-200 dark:border-white/10 rounded-full hover:border-lux-gold transition-colors duration-300">
                <CheckCircle size={14} className="text-lux-gold mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 dark:text-gray-200 text-sm font-medium">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

      </Section>
    </div>
  );
};
