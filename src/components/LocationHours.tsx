import { siteConfig } from "@/config/site";
import { MapPinIcon, ClockIcon, PhoneIcon, EnvelopeIcon } from "./Icons";

export default function LocationHours() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Contact Info */}
      <div className="space-y-6">
        {[
          {
            Icon: MapPinIcon,
            label: "Address",
            content: (
              <>
                <p className="text-white/70">{siteConfig.address.full}</p>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm text-white/70 hover:text-white transition-colors"
                >
                  Get Directions &rarr;
                </a>
              </>
            ),
          },
          {
            Icon: PhoneIcon,
            label: "Phone",
            content: (
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-white/70 hover:text-white transition-colors"
              >
                {siteConfig.phoneDisplay}
              </a>
            ),
          },
          {
            Icon: EnvelopeIcon,
            label: "Email",
            content: (
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-white/70 hover:text-white transition-colors"
              >
                {siteConfig.email}
              </a>
            ),
          },
        ].map(({ Icon, label, content }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5">
              <Icon className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
                {label}
              </h3>
              {content}
            </div>
          </div>
        ))}
      </div>

      {/* Business Hours */}
      <div className="card-futuristic rounded-xl p-6">
        <div className="mb-5 flex items-center gap-2">
          <ClockIcon className="h-4 w-4 text-white" />
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
            Opening Hours
          </h3>
        </div>
        <div className="space-y-2.5">
          {siteConfig.hours.map((h) => (
            <div
              key={h.day}
              className="flex justify-between border-b border-white/5 pb-2.5 text-sm"
            >
              <span className="font-medium">{h.day}</span>
              <span className="text-white/70">
                {h.open} – {h.close}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
