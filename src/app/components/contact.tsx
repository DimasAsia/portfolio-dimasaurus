export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 mx-auto max-w-6xl px-4 py-32"
    >
      <div className="max-w-xl">
        <h3 className="mb-6 text-3xl font-bold">
          Let’s work together
        </h3>

        <p className="mb-10 text-gray-600 leading-relaxed">
          I’m open to full-time roles, freelance projects, or collaborations.
          Feel free to reach out if you want to build something great together.
        </p>

        <div className="flex gap-4">
          <a
            href="mailto:galihdimas@outlook.com.com"
            className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Send Email
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="rounded-md border px-6 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}