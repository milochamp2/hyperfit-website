import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Class Timetable",
  description:
    "Weekly class timetable for HyperFit Mitcham — Functional Training and Hyperchamber Boxing schedules.",
};

export default function TimetablePage() {
  return (
    <>
      <Hero
        title="Class Timetable"
        subtitle="Weekly schedule for Functional Training and Hyperchamber Boxing — book your spot via the Services page."
        showCTAs={false}
      />

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:items-start md:justify-center">
          {/* Functional Training */}
          <div className="w-full max-w-sm">
            <Image
              src="/timetable/Functional%20Training.png"
              alt="HyperFit Functional Training weekly timetable"
              width={600}
              height={900}
              className="w-full rounded-xl"
              priority
            />
          </div>

          {/* Boxing */}
          <div className="w-full max-w-sm">
            <Image
              src="/timetable/Hyperfit%20Boxing.png"
              alt="HyperFit Hyperchamber Boxing weekly timetable"
              width={600}
              height={900}
              className="w-full rounded-xl"
              priority
            />
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-white/30 uppercase tracking-widest">
          Times subject to change — check live availability via the booking widget
        </p>
      </section>
    </>
  );
}
