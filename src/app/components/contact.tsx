export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 mx-auto max-w-6xl px-1 py-2"
    >
      <div className="rounded-2xl bg-white p-10 shadow-sm md:p-16">
        <div className="grid gap-16 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <h3 className="text-4xl font-bold leading-tight">
              Let’s build something{" "}
              <span className="text-indigo-500">remarkable.</span>
            </h3>

            <p className="mt-6 max-w-md text-gray-600 leading-relaxed">
              I’m currently available for freelance projects or full-time roles.
              If you have a challenge, I’m ready to solve it.
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <p className="flex items-center gap-3">
                <span className="text-indigo-500">✉</span>
                galihdimas@outlook.com
              </p>
              <p className="flex items-center gap-3">
                <span className="text-indigo-500">📍</span>
                Indonesia (Remote)
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-medium text-gray-500">
                  FULL NAME
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-gray-500">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium text-gray-500">
                MESSAGE
              </label>
              <textarea
                rows={5}
                placeholder="How can I help you?"
                className="w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-indigo-500 px-8 py-3 text-sm font-medium text-white transition hover:bg-indigo-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}