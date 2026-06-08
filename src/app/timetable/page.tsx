import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Class Timetable",
  description:
    "View the weekly class timetable for HyperFit Mitcham — Functional Training (Strength Lab) and Hyperchamber Boxing (Rumble) sessions.",
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

interface ClassSlot {
  time: string;
  name: string;
  duration: string;
  trainer?: string;
  spots?: number;
}

const functionalClasses: Record<string, ClassSlot[]> = {
  Monday:    [
    { time: "5:15 AM", name: "Strength Lab", duration: "45 min" },
    { time: "6:15 AM", name: "Strength Lab", duration: "45 min" },
    { time: "7:15 AM", name: "Strength Lab", duration: "45 min" },
    { time: "9:30 AM", name: "Strength Lab", duration: "45 min" },
    { time: "5:00 PM", name: "Strength Lab", duration: "45 min" },
    { time: "6:00 PM", name: "Strength Lab", duration: "45 min" },
  ],
  Tuesday:   [
    { time: "5:15 AM", name: "Strength Lab", duration: "45 min" },
    { time: "6:15 AM", name: "Strength Lab", duration: "45 min" },
    { time: "7:15 AM", name: "Strength Lab", duration: "45 min" },
    { time: "9:30 AM", name: "Strength Lab", duration: "45 min" },
    { time: "5:00 PM", name: "Strength Lab", duration: "45 min" },
    { time: "6:00 PM", name: "Strength Lab", duration: "45 min" },
  ],
  Wednesday: [
    { time: "5:15 AM", name: "Strength Lab", duration: "45 min" },
    { time: "6:15 AM", name: "Strength Lab", duration: "45 min" },
    { time: "7:15 AM", name: "Strength Lab", duration: "45 min" },
    { time: "9:30 AM", name: "Strength Lab", duration: "45 min" },
    { time: "5:00 PM", name: "Strength Lab", duration: "45 min" },
    { time: "6:00 PM", name: "Strength Lab", duration: "45 min" },
  ],
  Thursday:  [
    { time: "5:15 AM", name: "Strength Lab", duration: "45 min" },
    { time: "6:15 AM", name: "Strength Lab", duration: "45 min" },
    { time: "7:15 AM", name: "Strength Lab", duration: "45 min" },
    { time: "9:30 AM", name: "Strength Lab", duration: "45 min" },
    { time: "5:00 PM", name: "Strength Lab", duration: "45 min" },
    { time: "6:00 PM", name: "Strength Lab", duration: "45 min" },
  ],
  Friday:    [
    { time: "5:15 AM", name: "Strength Lab", duration: "45 min" },
    { time: "6:15 AM", name: "Strength Lab", duration: "45 min" },
    { time: "7:15 AM", name: "Strength Lab", duration: "45 min" },
    { time: "9:30 AM", name: "Strength Lab", duration: "45 min" },
    { time: "5:00 PM", name: "Strength Lab", duration: "45 min" },
    { time: "6:00 PM", name: "Strength Lab", duration: "45 min" },
  ],
  Saturday:  [
    { time: "6:30 AM", name: "Strength Lab", duration: "45 min" },
    { time: "7:30 AM", name: "Strength Lab", duration: "45 min" },
    { time: "8:30 AM", name: "Strength Lab", duration: "45 min" },
    { time: "9:30 AM", name: "Strength Lab", duration: "45 min" },
  ],
  Sunday:    [
    { time: "8:00 AM", name: "Strength Lab", duration: "45 min" },
    { time: "9:00 AM", name: "Strength Lab", duration: "45 min" },
  ],
};

const boxingClasses: Record<string, ClassSlot[]> = {
  Monday:    [
    { time: "6:15 AM", name: "Rumble", duration: "45 min" },
    { time: "7:15 AM", name: "Rumble", duration: "45 min" },
    { time: "5:00 PM", name: "Rumble", duration: "45 min" },
    { time: "6:00 PM", name: "Rumble", duration: "45 min" },
  ],
  Tuesday:   [
    { time: "6:15 AM", name: "Rumble", duration: "45 min" },
    { time: "7:15 AM", name: "Rumble", duration: "45 min" },
    { time: "5:00 PM", name: "Rumble", duration: "45 min" },
    { time: "6:00 PM", name: "Rumble", duration: "45 min" },
  ],
  Wednesday: [
    { time: "6:15 AM", name: "Rumble", duration: "45 min" },
    { time: "7:15 AM", name: "Rumble", duration: "45 min" },
    { time: "5:00 PM", name: "Rumble", duration: "45 min" },
    { time: "6:00 PM", name: "Rumble", duration: "45 min" },
  ],
  Thursday:  [
    { time: "6:15 AM", name: "Rumble", duration: "45 min" },
    { time: "7:15 AM", name: "Rumble", duration: "45 min" },
    { time: "5:00 PM", name: "Rumble", duration: "45 min" },
    { time: "6:00 PM", name: "Rumble", duration: "45 min" },
  ],
  Friday:    [
    { time: "6:15 AM", name: "Rumble", duration: "45 min" },
    { time: "7:15 AM", name: "Rumble", duration: "45 min" },
    { time: "5:00 PM", name: "Rumble", duration: "45 min" },
    { time: "6:00 PM", name: "Rumble", duration: "45 min" },
  ],
  Saturday:  [
    { time: "7:30 AM", name: "Rumble", duration: "45 min" },
    { time: "9:30 AM", name: "Rumble", duration: "45 min" },
  ],
  Sunday:    [
    { time: "9:00 AM", name: "Rumble", duration: "45 min" },
  ],
};

function TimetableGrid({
  data,
  accent,
}: {
  data: Record<string, ClassSlot[]>;
  accent: string;
}) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px]">
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-px mb-px">
          {days.map((day) => (
            <div
              key={day}
              className="bg-steel-light/60 px-3 py-3 text-center"
            >
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-white/80">
                {day}
              </span>
            </div>
          ))}
        </div>

        {/* Class slots */}
        <div className="grid grid-cols-7 gap-px bg-steel-light/20">
          {days.map((day) => (
            <div key={day} className="flex flex-col gap-px bg-jet p-2 min-h-[200px]">
              {(data[day] ?? []).map((slot, i) => (
                <div
                  key={i}
                  className={`rounded-lg px-3 py-2.5 ${accent}`}
                >
                  <p className="font-heading text-xs font-bold uppercase tracking-wide text-white">
                    {slot.name}
                  </p>
                  <p className="mt-0.5 text-[10px] font-medium text-white/60">
                    {slot.time} · {slot.duration}
                  </p>
                </div>
              ))}
              {(data[day] ?? []).length === 0 && (
                <p className="m-auto text-[10px] text-white/20 uppercase tracking-widest">—</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TimetablePage() {
  return (
    <>
      <Hero
        title="Class Timetable"
        subtitle="Weekly schedule for Functional Training and Hyperchamber Boxing — book your spot via the Services page."
        showCTAs={false}
      />

      {/* Functional Training */}
      <section className="px-4 py-16 md:py-20 max-w-[2400px] mx-auto w-full">
        <SectionHeading
          title="Functional Training Classes"
          subtitle="Strength Lab — The Engine Room · 45 min · All levels welcome"
          gradient
        />
        <TimetableGrid data={functionalClasses} accent="bg-steel hover:bg-steel-light transition-colors" />
        <p className="mt-4 text-center text-xs text-white/30 uppercase tracking-widest">
          Times subject to change — check live availability via the booking widget
        </p>
      </section>

      {/* Boxing */}
      <section className="bg-jet-light px-4 py-16 md:py-20">
        <div className="max-w-[2400px] mx-auto w-full">
          <SectionHeading
            title="Hyperchamber Boxing"
            subtitle="Rumble — The Hyper Chamber · 45 min · All levels welcome"
          />
          <TimetableGrid data={boxingClasses} accent="bg-[#1a0a00] border border-white/10 hover:border-white/20 transition-colors" />
          <p className="mt-4 text-center text-xs text-white/30 uppercase tracking-widest">
            Times subject to change — check live availability via the booking widget
          </p>
        </div>
      </section>

      {/* Book CTA */}
      <section className="px-4 py-16 text-center">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">Ready to Book?</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/60">
          Reserve your spot online — live availability updated in real time.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/services#book"
            className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-bold uppercase tracking-widest text-jet transition-colors hover:bg-white/90"
          >
            Book a Class
          </a>
          <a
            href="/membership"
            className="inline-flex items-center rounded-lg border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-white/50"
          >
            View Membership
          </a>
        </div>
      </section>
    </>
  );
}
