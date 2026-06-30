import { BRAND } from "@/lib/content";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        aria-hidden
        className="grid h-8 w-8 place-items-center rounded-xl bg-blue-btn text-ink"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 8h12a3 3 0 0 1 0 6h-1.2A5 5 0 0 1 10 18H8a4 4 0 0 1-4-4V8Z"
            fill="currentColor"
          />
          <path
            d="M16 9h1.5a2.5 2.5 0 0 1 0 5H16"
            stroke="#fff"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M7 4.5c.6.6.6 1.4 0 2M10 4.5c.6.6.6 1.4 0 2"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="font-heading text-xl font-bold tracking-tight text-ink">
        {BRAND}
      </span>
    </span>
  );
}
