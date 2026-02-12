export async function getImage(title: string) {
  const res = await fetch(`/api/imageAll/${title}`);

  if (!res.ok) {
    throw new Error("Failed to fetch portfolio image");
  }

  return res.json() as Promise<{
    image_url: string;
  }>;
}
