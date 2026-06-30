"use client";

import Image from "next/image";

export default function FooterCta() {
  return (
    <section className="relative overflow-hidden bg-blue-soft px-5 py-16 text-center md:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-heading text-3xl font-bold leading-tight text-ink md:text-4xl">
          Make money
          <br />
          doing what you love
        </h2>

        <form
          className="mx-auto mt-8 flex max-w-md items-stretch overflow-hidden rounded-pill bg-ink p-1.5"
          onSubmit={(e) => e.preventDefault()}
        >
          <span className="flex select-none items-center pl-4 text-sm font-medium text-white/70">
            creatorbyte.in/
          </span>
          <input
            type="text"
            aria-label="Choose your page name"
            placeholder="YourPage"
            className="min-w-0 flex-1 bg-transparent px-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-pill bg-blue-btn px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-blue-btn-hover"
          >
            Claim
          </button>
        </form>
      </div>

      <Image
        src="/assets/footer-character.png"
        alt=""
        width={170}
        height={170}
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-2 hidden h-auto w-28 md:block lg:left-12 lg:w-36"
      />
    </section>
  );
}
