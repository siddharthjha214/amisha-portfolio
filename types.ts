export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  link: string;
}

export interface Resource {
  id: string;
  name: string;
  description: string;
  type: 'Book' | 'Tool' | 'Podcast' | 'Course';
  link: string;
}

export interface NavItem {
  label: string;
  href: string;
}