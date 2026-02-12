

export async function getFeaturedProjects() {
  const res = await fetch(`api/project`);
  if (!res.ok) {
        throw new Error("Failed to fetch portfolio image");
    }
    return res.json();
}
