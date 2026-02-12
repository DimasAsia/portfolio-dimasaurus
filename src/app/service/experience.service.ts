export async function getExperiences() {
    const res = await fetch(`api/experiences`);

    if (!res.ok) {
        throw new Error("Failed to fetch portfolio image");
    }
    return res.json();
}
