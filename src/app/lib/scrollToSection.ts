export const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    window.history.pushState(null, "", `/#${id}`);

    el.scrollIntoView({
        behavior: "smooth",
        block: "start",
    })
}