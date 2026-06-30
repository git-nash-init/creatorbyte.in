import Image from "next/image";

export default function StorySection() {
  return (
    <section className="reveal bg-cream px-5 py-12 md:py-16">
      <div className="card3d mx-auto max-w-5xl rounded-[40px] p-7 md:p-12">
        <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">
              The home of creative joy
            </h2>
            <div className="mt-5 space-y-4 text-ink/80">
              <p>
                When did churning out content, maximizing metrics and pushing
                for profit become standard?
              </p>
              <p>At CreatorByte we don&apos;t conform to that kind of &lsquo;norm&rsquo;.</p>
              <p>
                Whether you&apos;re making things and putting them out there or
                you&apos;re showing the love for those that do – CreatorByte
                exists so that you can create, share, connect and support each
                other on your own terms.
              </p>
              <p>
                Together we&apos;re building a place where everyone can celebrate
                the joy of being free to explore your passions at your own pace.
              </p>
            </div>
            <a
              href="#"
              className="mt-6 inline-block rounded-pill bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Read CreatorByte&apos;s story
            </a>
          </div>
          <div>
            <Image
              src="/assets/story-character.png"
              alt="CreatorByte character playing a game"
              width={420}
              height={360}
              className="mx-auto h-auto w-full max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
