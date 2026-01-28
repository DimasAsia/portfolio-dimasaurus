import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto max-w-6xl px-4 py-10"
    >
      <div className="grid items-center gap-16 md:grid-cols-2">

        {/* ===== LEFT : TEXT ===== */}
        <div className="flex flex-col gap-6">
          <span className="text-sm font-medium text-green-600">
            &gt; Hello World!
          </span>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            I'm Galih Dimas Prastowo
          </h1>

          <h2 className="text-3xl font-semibold text-gray-500 sm:text-4xl">
            Fullstack Developer
          </h2>

          <p className="max-w-xl text-gray-600 leading-relaxed">
            I build modern, scalable web applications with clean architecture,
            performance-focused design, and maintainable code.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href="#projects"
              className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-md border px-6 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* ===== RIGHT : IMAGE + SHAPE ===== */}
        <div className="flex justify-center md:justify-end">
          <div className="relative h-82 w-82 sm:h-80 sm:w-80">

            {/* SHAPE BACKGROUND */}
            <div
              className="
                absolute inset-0
                -z-10
                rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
                bg-gradient-to-br
                from-indigo-500 via-purple-500 to-pink-500
                blur-2xl opacity-70
              "
            />

            {/* PHOTO */}
            <Image
              src="/profile.png"
              alt="Galih Dimas"
              fill
              priority
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}