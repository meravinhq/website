export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: number;

  slug: string;

  title: string;

  category: string;

  description: string;

  year: string;

  technologies: string[];

  cover: string;

  images: ProjectImage[];

  website?: string;

  github?: string;

  featured: boolean;
}
