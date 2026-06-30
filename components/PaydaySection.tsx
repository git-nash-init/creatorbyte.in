export default function PaydaySection() {
  return (
    <section className="reveal bg-cream px-5 py-12 md:py-16">
      <div className="card3d mx-auto max-w-5xl rounded-[40px] p-7 md:p-12">
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

        {/* Product demo video */}
        <div className="mt-9 rounded-[28px] bg-cream-card p-4 md:p-8">
          <div className="card3d card3d-sm mx-auto max-w-2xl rounded-[24px]">
            <video
              src="/assets/product-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="CreatorByte product demo"
              className="block aspect-[4/3] w-full rounded-[22px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
