"use client";

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">
          Leadership & Activities
        </h2>

        <div>
          {/* Header line */}
          <div className="flex flex-wrap justify-between gap-2">
            <h3 className="font-semibold">
              Himpunan Mahasiswa Teknologi Informasi
            </h3>
            <span className="text-sm text-muted-foreground">
              2020 – 2022 · Surabaya
            </span>
          </div>

          {/* Role line */}
          <p className="text-sm text-muted-foreground">
            Internal Development Staff → Chairman, Education & Research Division
          </p>

          {/* Impact line */}
          <p className="mt-2 text-sm max-w-3xl">
            Led academic initiatives, strengthened scientific culture,
            coordinated with faculty, and supported student development programs.
          </p>
        </div>
      </div>
    </section>
  );
}