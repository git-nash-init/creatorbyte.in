export default function PaydaySection() {
  return (
    <section className="bg-cream px-5 py-12 md:py-16">
      <div className="mx-auto max-w-5xl rounded-[32px] bg-white p-7 shadow-[0_2px_0_rgba(32,32,32,0.06)] md:p-12">
        <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">
          Payday your way
        </h2>
        <p className="mt-4 max-w-xl text-ink/80">
          Decide how you want to earn, set your own terms and get paid directly.
          All from one place, at your own pace.
        </p>
        <a
          href="#"
          className="mt-6 inline-block rounded-pill bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Learn how CreatorByte works
        </a>

        {/* Creator profile mockup */}
        <div className="mt-9 rounded-[28px] bg-cream-card p-5 md:p-8">
          <div className="mx-auto max-w-lg rounded-[24px] bg-white p-5 md:p-7">
            <div className="flex items-start justify-between">
              <div className="h-16 w-16 overflow-hidden rounded-full ring-4 ring-cream-card">
                <div className="grid h-full w-full place-items-center bg-blue-soft text-2xl">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <circle cx="12" cy="9" r="4" fill="#202020" opacity="0.8" />
                    <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" fill="#202020" opacity="0.8" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-pill bg-ink px-4 py-2 text-sm font-semibold text-white">
                  Follow
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-pill border-[1.6px] border-ink">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M4 6h16v12H4z"
                      stroke="#202020"
                      strokeWidth="1.6"
                    />
                    <path d="m4 7 8 6 8-6" stroke="#202020" strokeWidth="1.6" />
                  </svg>
                </span>
              </div>
            </div>
            <h3 className="mt-4 font-heading text-xl font-bold text-ink">
              Dylan Knox
            </h3>
            <div className="mt-4 space-y-3">
              <div className="h-3 w-full rounded-full bg-cream-card" />
              <div className="h-3 w-3/4 rounded-full bg-cream-card" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
