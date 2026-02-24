export type Project = {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  tech: string[];
  featured: boolean;

  content?: string | null;
  demoUrl?: string | null;
  repoUrl?: string | null;
};