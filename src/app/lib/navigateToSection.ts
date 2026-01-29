export function navigateToSection(
  router: any,
  pathname: string,
  id: string
) {
  if (pathname === "/") {
    const el = document.getElementById(id);
    if (!el) return;

    // 🔑 INI YANG KAMU BUTUH
    window.history.pushState(null, "", `/#${id}`);

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    // pindah halaman DULU
    router.push(`/#${id}`);
  }
}
