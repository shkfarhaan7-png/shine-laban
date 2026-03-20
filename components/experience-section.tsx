import { experienceDetails } from "@/lib/content";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-frame py-16 md:py-24 lg:py-32">
      <div className="surface-panel overflow-hidden px-7 py-8 md:px-10 md:py-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-kicker">Experience</p>
          <h2 className="mt-5 text-balance text-4xl text-white sm:text-5xl md:text-6xl">
            {experienceDetails.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-balance text-base leading-8 text-cream/72 md:text-lg">
            {experienceDetails.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {experienceDetails.points.map((point) => (
            <div
              key={point}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-6 text-center text-sm leading-7 text-cream/70"
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
