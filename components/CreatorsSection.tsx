"use client";

import { useState } from "react";
import Image from "next/image";
import { categories, creatorsByCategory } from "@/lib/content";

export default function CreatorsSection() {
  const [active, setActive] = useState(categories[0].id);
  const creators = creatorsByCategory[active] ?? [];

  return (
    <section className="reveal bg-cream px-5 py-14 text-center md:py-20">
      <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">
        Creators of all kinds, all kind!
      </h2>
      <p className="mt-3 text-ink/80">
        From podcasts to cosplay, pixel art to crochet.
      </p>

      {/* Category pills */}
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
        {categories.map((cat) => {
          const isActive = cat.id === active;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              aria-pressed={isActive}
              className={`flex items-center gap-2 rounded-pill border-[1.6px] border-ink px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                isActive
                  ? "bg-ink text-white"
                  : "bg-white text-ink hover:bg-cream-card"
              }`}
            >
              <Image
                src={cat.icon}
                alt=""
                width={22}
                height={22}
                className="h-[22px] w-[22px] object-contain"
              />
              {cat.label}
            </button>
          );
        })}
      </div>

      <p className="mt-8 text-sm italic text-ink/60">
        Example creators using CreatorByte
      </p>

      {/* Creator grid */}
      <div className="mx-auto mt-6 grid max-w-4xl gap-6 sm:grid-cols-2 md:grid-cols-3">
        {creators.map((c, i) => (
          <a
            key={`${active}-${c.name}`}
            href={c.href}
            style={{ animationDelay: `${i * 70}ms` }}
            className="pop group block text-left transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="card3d card3d-sm rounded-[24px]">
              <div className="relative aspect-square w-full overflow-hidden rounded-t-[22px]">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="font-heading text-lg font-bold text-ink">
                  {c.name}
                </p>
                <p className="mt-1 inline-flex items-center gap-1.5 rounded-pill bg-cream px-3 py-1 text-xs font-medium text-ink/80">
                  <span aria-hidden>❤</span>
                  {c.meta}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
