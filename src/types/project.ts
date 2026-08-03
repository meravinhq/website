export interface Project {
  id: number;

  slug: string;

  title: string;

  category: string;

  description: string;

  year: string;

  technologies: string[];

  cover: string;

  website?: string;

  github?: string;

  featured: boolean;
}