"use client";

import { useEffect, useState } from "react";

const collections = [
  {
    name: "MONEY LAUNDERING",
    slug: "money-laundering",
    number: "DROP 04",
    image: "/jacket.moneylaundering.jpeg",
  },
  {
    name: "drop 3",
    slug: "drop 3",
    number: "DROP 03",
    image: "/bee.boy.png",
  },
  {
    name: "DROP THREE",
    slug: "drop-three",
    number: "DROP 02",
    image: "/bee.boy.png",
  },
  {
    name: "DROP FOUR",
    slug: "drop-four",
    number: "DROP 01",
    image: "/bee.boy.png",
  },
];

export default function CollectionsPage() {
  // RED CAN CURSOR
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] px-5 py-8 text-[#f5f5f0] sm:px-6 md:px-10 md:py-10">

      {/* RED CAN CURSOR */}
      <div
        className="hidden md:block"
        style={{
          position: "fixed",
          left: cursorPosition.x,
          top: cursorPosition.y,
          width: "80px",
          height: "80px",
          zIndex: 99999,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src="/can.cursor.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* HEADER */}
      <header className="mb-20 flex items-start justify-between">
        <a
          href="/"
          className="text-xs font-medium tracking-[0.2em] transition-opacity duration-300 hover:opacity-50 sm:text-sm sm:tracking-[0.25em]"
        >
          BLUC FSHN
        </a>

        <div className="text-right">
          <p className="text-[10px] tracking-[0.2em] text-zinc-500">
            BLUC FSHN / 004
          </p>

          <p className="mt-1 text-[10px] tracking-[0.2em]">
            NAIROBI, KENYA
          </p>
        </div>
      </header>

      {/* TITLE */}
      <section className="mb-16">
        <p className="mb-4 text-[10px] tracking-[0.3em] text-zinc-500">
          BLUC FSHN / COLLECTIONS
        </p>

        <h1 className="text-[16vw] font-black uppercase leading-none tracking-[-0.05em] sm:text-7xl md:text-9xl">
          COLLECTIONS
        </h1>
      </section>

      {/* COLLECTIONS GRID */}
      <section className="grid gap-6 md:grid-cols-2">
        {collections.map((collection) => (
          <a
            key={collection.slug}
            href={`/collections/${collection.slug}`}
            className="group relative block overflow-hidden"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
  <img
    src={collection.image}
    alt={collection.name}
    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
  />

  {collection.slug === "money-laundering" && (
    <div
      className="pointer-events-none absolute inset-0 z-25 overflow-hidden"
      aria-hidden="true"
    >
      {[
        { left: "5%", delay: "0s", duration: "5s", size: "42px" },
        { left: "20%", delay: "1.5s", duration: "6s", size: "35px" },
        { left: "38%", delay: "0.8s", duration: "5.5s", size: "45px" },
        { left: "55%", delay: "2s", duration: "6.5s", size: "38px" },
        { left: "72%", delay: "0.5s", duration: "5s", size: "42px" },
        { left: "88%", delay: "2.5s", duration: "6s", size: "35px" },
      ].map((money, index) => (
        <img
          key={index}
          src="/bluc-money.png"
          alt=""
          className="money-rain-preview absolute top-[-80px] opacity-80"
          style={{
            left: money.left,
            width: money.size,
            height: "auto",
            animationDuration: money.duration,
            animationDelay: money.delay,
          }}
        />
      ))}
    </div>
  )}

  <div className="absolute inset-0 z-20 bg-black/20 transition-colors duration-500 group-hover:bg-black/40" />

  <div className="absolute inset-0 z-30 flex flex-col justify-between p-5 sm:p-6 md:p-8">
    <div className="flex justify-between text-[9px] tracking-[0.2em] text-white/70 sm:text-[10px]">
      <span>{collection.number}</span>
      <span>BLUC / 004</span>
    </div>

    <div>
      <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.04em] sm:text-5xl md:text-6xl">
        {collection.name}
      </h2>

      <p className="mt-4 text-[10px] tracking-[0.25em] text-white/70 transition-all duration-300 group-hover:text-white">
        VIEW COLLECTION →
      </p>
    </div>
  </div>
</div>
          </a>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="mt-24 border-t border-white/10 pt-6">
        <div className="flex flex-col justify-between gap-3 text-[9px] tracking-[0.15em] text-zinc-600 sm:flex-row sm:text-[10px] sm:tracking-[0.2em]">
          <p>© 2023 BLUC FSHN</p>
          <p>MADE IN NAIROBI</p>
        </div>
      </footer>
    </main>
  );
}