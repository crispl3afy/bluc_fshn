"use client";

import { useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  return (
    <main
      id="top"
      className="min-h-screen bg-[#050505] text-[#f5f5f0]"
      onMouseMove={(e) =>
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        })
      }
    >
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-[background] duration-300"
        style={{
          background: `
            radial-gradient(
              circle 35vw at ${mousePosition.x}% ${mousePosition.y}%,
              rgba(255, 20, 60, 0.16),
              transparent 65%
            ),
            radial-gradient(
              circle 30vw at ${100 - mousePosition.x}% ${100 - mousePosition.y}%,
              rgba(170, 255, 0, 0.10),
              transparent 65%
            )
          `,
        }}
      />

      <section className="hero relative min-h-screen overflow-hidden p-6 md:p-10">

        {/* Top navigation */}
        <div className="relative z-10 flex justify-between items-start">
       <p className="text-sm font-medium tracking-[0.25em]">
  BLUC FSHN
</p>

          <p className="text-sm tracking-[0.2em]">
            NAIROBI, KENYA
          </p>
        </div>

        {/* Main logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">

            <div className="logo-wrap">
  <h1 className="brand-name text-[27vw] leading-[0.8] font-normal tracking-[-0.08em]">
    BLUC
  </h1>

  <h1
    className="brand-color text-[27vw] leading-[0.8] font-normal tracking-[-0.08em]"
    aria-hidden="true"
  >
    BLUC
  </h1>
</div>

            <p className="absolute left-1/2 -translate-x-1/2 -bottom-8 text-sm tracking-[0.8em]">
              FSHN
            </p>

          </div>
        </div>

        {/* Bottom information */}
        <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex justify-between items-end">

          <div>
            <p className="text-2xl md:text-4xl font-bold">
              GET FLY.
            </p>
            <p className="mt-2 text-xs tracking-[0.25em] text-zinc-400">
              SS23
            </p>
          </div>

          <a 
          href="#collection"
          className="text-xs tracking-[0.25em] transition-opacity duration-300 hover:opacity-50 ">
            SCROLL TO EXPLORE
          </a>

        </div>

          </section>

      {/* Collection */}
      <section id="collection"
       className="min-h-screenpx-6 py-32 md:px-10 md:py-48">

        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.3em] text-zinc-500">
              BLUC FSHN / 001
            </p>

            <h2 className="text-6xl font-black  uppercase leading-none tracking-[-0.01em] md:text-9xl">
              COLLECTION
            </h2>
          </div>

          <p className="hidden text-xs tracking-[0.25em] text-zinc-500 md:block">
            SS26
          </p>
        </div>

      <div className="relative min-h-[60vh] overflow-hidden">

      <img
       src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85"
       alt="Fashion editorial"
       className="absolute inset-0 h-full w-full scale-105 object-cover  brightness -[0.85]transition-transform duration -1000 hover:scale-100"
      />

  <div className="absolute inset-0 bg-black/40 " />

  <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-red-500/10 blur-3xl" />

  <div className="absolute bottom-[10%] right-[15%] h-40 w-40 rounded-full bg-lime-400/10 blur-3xl" />

  <div className="relative z-10 flex min-h-[60vh] flex-col justify-between p-6 md:p-10">

    <div className="flex justify-between text-xs tracking-[0.2em] text-white/70">
      <span>LOOK 01</span>
      <span>NAIROBI</span>
    </div>

    <div>
      <p className="mb-3 text-sm tracking-[0.25em] text-white/70">
        THE NEW STANDARD
      </p>

      <h3 className="text-5xl font-black tracking-[-0.015em] md:text-8xl">
        GET FLY.
      </h3>
    </div>

  </div>
</div>

        {/* More looks */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">

          {/* Look 02 */}
          <div className="group relative min-h-[70vh] overflow-hidden cursor -pointer">
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85"
              alt="Fashion look"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 flex min-h-[70vh] flex-col justify-between p-6 md:p-8">
              <div className="flex justify-between text-xs tracking-[0.2em] text-white/70">
                <span>LOOK 02</span>
                <span>BLUC / 002</span>
              </div>

              <h3 className="text-4xl font-black tracking-[-0.015em] transition-transform duration-500 group-hover:translate-x-2md:text-6xl">
                AFTER DARK.
              </h3>
            </div>
          </div>

          {/* Look 03 */}
          <div className="group relative min-h-[70vh] overflow-hidden cursor -pointer">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85"
              alt="Fashion look"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="relative z-10 flex min-h-[70vh] flex-col justify-between p-6 md:p-8">
              <div className="flex justify-between text-xs tracking-[0.2em] text-white/70">
                <span>LOOK 03</span>
                <span>BLUC / 003</span>
              </div>

              <h3 className="text-4xl font-black tracking-[-0.015em] transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">
                NO RULES.
              </h3>
            </div>
          </div>

        </div>

</section>
      

      {/* Brand statement */}
      <section className="px-6 py-32 md:px-10 md:py-48">

        <div className="mx-auto max-w-6xl">

          <p className="mb-8 text-xs tracking-[0.3em] text-zinc-500">
            BLUC FSHN / NAIROBI
          </p>

          <h2 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.02em] md:text-8xl">
            BUILT FOR THE ONES
            <br />
            WHO DON'T FOLLOW.
          </h2>

          <div className="mt-12 flex justify-end">
            <p className="max-w-md text-sm leading-7 text-zinc-400">
              BLUC FSHN is a Nairobi streetwear label built around
              individuality, movement and the freedom to wear your own rules.
            </p>
          </div>

        </div>

      </section>
                 {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12 md:px-10 md:py-16">

        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">

          <div>
           <a
  href="#top"
  className="text-sm font-medium tracking-[0.25em] transition-opacity duration-300 hover:opacity-50"
>
  BLUC FSHN
</a>

            <p className="mt-3 text-xs tracking-[0.25em] text-zinc-500">
              NAIROBI, KENYA
            </p>
          </div>

          <div className="flex flex-col gap-5 text-xs text-zinc-400">

            <a
              href="https://www.instagram.com/bluc_fshn/"
              target="_blank"
              rel="noopener noreferrer"
              className=" group flex items-center gap-3 transition-all duration-300 hover:text-white"
            ><span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:text-black">
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
</span>
              <span>
                <span className="block text-[9px] tracking-[0.2em] text-zinc-600">
                  INSTAGRAM
                </span>
                <span className="tracking-[0.08em]">
                  @bluc_fshn
                </span>
              </span>
            </a>

            <a
              href="https://www.tiktok.com/@blucfshn"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 transition-all duration-300 hover:text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:text-black">
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="currentColor"
  >
    <path d="M16.5 3c.3 2 1.4 3.4 3.5 3.7v3.1c-1.4-.1-2.6-.5-3.5-1.2v6.8c0 3.4-2.5 5.6-5.8 5.6-3.2 0-5.7-2.2-5.7-5.3 0-3.3 2.8-5.5 6.3-5.2v3.2c-1.5-.2-3 .5-3 2 0 1.2.9 2 2.2 2 1.4 0 2.3-.9 2.3-2.5V3h3.7z" />
  </svg>
</span>

              <span>
                <span className="block text-[9px] tracking-[0.2em] text-zinc-600">
                  TIKTOK
                </span>
                <span className="tracking-[0.08em]">
                  @blucfshn
                </span>
              </span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20">
                @
              </span>

              <span>
                <span className="block text-[9px] tracking-[0.2em] text-zinc-600">
                  CONTACT
                </span>
                <span className="tracking-[0.08em]">
                  GET IN TOUCH
                </span>
              </span>
            </a>

          </div>

        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[10px] tracking-[0.2em] text-zinc-600 md:flex-row">
          <p>© 2026 BLUC FSHN</p>
          <p>MADE IN NAIROBI</p>
        </div>

      </footer>
    </main>
  );
}