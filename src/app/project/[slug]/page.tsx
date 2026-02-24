import { notFound } from 'next/navigation';
import ProjectDetailClient from '@/app/components/projectdetailclient';
import { supabase } from '@/app/lib/supabase';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  if (!slug) return notFound();

  const { data: project } = await supabase
    .from('projects')
    .select(`
      id,
      slug,
      title,
      short_description,
      image,
      featured,
      project_details (
        content,
        demo_url,
        repo_url
      ),
      project_tech (
        tech
      )
    `)
    .eq('slug', slug)
    .single();

  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}