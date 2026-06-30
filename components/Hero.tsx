import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-cream px-5 pb-6 pt-10 text-center md:pt-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mx-auto max-w-2xl font-heading text-4xl font-bold leading-[1.05] text-ink sm:text-5xl md:text-6xl">
          Love what you do and make money too
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-ink/80 md:text-lg">
          Join all types of creators getting tips, memberships and sales from
          their fans!
        </p>
        <div className="mt-7">
          <a
            href="#"
            className="inline-block rounded-pill bg-blue-btn px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-blue-btn-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            Get started
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-md">
        <Image
          src="/assets/hero-characters.png"
          alt="CreatorByte characters celebrating creators"
          width={520}
          height={320}
          priority
          className="mx-auto h-auto w-full"
        />
      </div>
    </section>
  );
}
