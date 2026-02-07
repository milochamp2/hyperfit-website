import { siteConfig } from "@/config/site";
import { MapPinIcon, ClockIcon, PhoneIcon, EnvelopeIcon } from "./Icons";

export default function LocationHours() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Contact Info */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-cyan" />
          <div>
            <h3 className="font-heading font-bold">Address</h3>
            <p className="text-muted">{siteConfig.address.full}</p>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm text-cyan hover:text-cyan-glow"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <PhoneIcon className="mt-1 h-5 w-5 shrink-0 text-cyan" />
          <div>
            <h3 className="font-heading font-bold">Phone</h3>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-muted hover:text-cyan"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <EnvelopeIcon className="mt-1 h-5 w-5 shrink-0 text-cyan" />
          <div>
            <h3 className="font-heading font-bold">Email</h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-muted hover:text-cyan"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <ClockIcon className="h-5 w-5 text-cyan" />
          <h3 className="font-heading font-bold">Opening Hours</h3>
        </div>
        <div className="space-y-2">
          {siteConfig.hours.map((h) => (
            <div
              key={h.day}
              className="flex justify-between border-b border-steel-light pb-2 text-sm"
            >
              <span className="font-medium">{h.day}</span>
              <span className="text-muted">
                {h.open} – {h.close}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
