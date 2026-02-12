export type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  featured: boolean;
  tech: string[];

  // detail
  content?: string;
  demoUrl?: string | null;
  repoUrl?: string | null;
};
