"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    document.documentElement.style.cursor="none";
    document.body.style.cursor="none";

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });

      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.style.cursor="";
      document.body.style.cursor="";
    };
  }, []);

  return (
    <main
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#050505] text-[#f5f5f0]"
    >
      {/* Cursor-following background */}
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

      {/* CUSTOM CAN CURSOR */}
<div
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

      {/* HERO */}
      <section className="hero relative min-h-screen overflow-hidden p-5 sm:p-6 md:p-10">
        {/* Top navigation */}
        <div className="relative z-10 flex items-start justify-between gap-4">
          <p className="text-xs font-medium tracking-[0.2em] sm:text-sm sm:tracking-[0.25em]">
            BLUC FSHN
          </p>

          <p className="text-right text-[10px] tracking-[0.2em] sm:text-sm sm:tracking-[0.35em]">
            NAIROBI, KENYA
          </p>
        </div>

        {/* Bee */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/bee.boy.png"
            alt="BLUC FSHN bee character"
            className="hero-bee"
            style={{
              marginLeft: `${(mousePosition.x - 50) * 0.12}px`,
              marginTop: `${(mousePosition.y - 50) * 0.08}px`,
            }}
          />
        </div>

        {/* Bottom information */}
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-10 md:left-10 md:right-10">
          <div>
            <p className="text-2xl font-bold sm:text-3xl md:text-4xl">
              GET FLY.
            </p>

            <p className="mt-2 text-[10px] tracking-[0.2em] text-zinc-400 sm:text-xs sm:tracking-[0.25em]">
              SS23
            </p>
          </div>

          <a
            href="#collection"
            className="max-w-[150px] text-right text-[9px] tracking-[0.2em] transition-opacity duration-300 hover:opacity-50 sm:max-w-none sm:text-xs sm:tracking-[0.35em]"
          >
            SCROLL TO EXPLORE
          </a>
        </div>
      </section>

      {/* COLLECTION */}
      <section
        id="collection"
        className="min-h-screen px-5 py-24 sm:px-6 sm:py-32 md:px-10 md:py-48"
      >
        <div className="mb-12 flex items-end justify-between gap-4 sm:mb-16">
          <div>
            <p className="mb-3 text-[10px] tracking-[0.25em] text-zinc-500 sm:text-xs sm:tracking-[0.3em]">
              BLUC FSHN / 001
            </p>

            <h2 className="text-[15vw] font-black uppercase leading-none tracking-[-0.04em] sm:text-6xl md:text-9xl">
              COLLECTION
            </h2>
          </div>

          <p className="hidden text-xs tracking-[0.25em] text-zinc-500 md:block">
            SS23
          </p>
        </div>

        {/* Look 01 */}
        <div className="relative min-h-[55vh] overflow-hidden sm:min-h-[60vh]">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85"
            alt="Fashion editorial"
            className="absolute inset-0 h-full w-full scale-105 object-cover brightness-[0.85] transition-transform duration-1000 hover:scale-100"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute left-[10%] top-[20%] h-24 w-24 rounded-full bg-red-500/10 blur-3xl sm:h-32 sm:w-32" />

          <div className="absolute bottom-[10%] right-[15%] h-32 w-32 rounded-full bg-lime-400/10 blur-3xl sm:h-40 sm:w-40" />

          <div className="relative z-10 flex min-h-[55vh] flex-col justify-between p-5 sm:min-h-[60vh] sm:p-6 md:p-10">
            <div className="flex justify-between gap-4 text-[10px] tracking-[0.15em] text-white/70 sm:text-xs sm:tracking-[0.2em]">
              <span>LOOK 01</span>
              <span>NAIROBI</span>
            </div>

            <div>
              <p className="mb-3 text-xs tracking-[0.2em] text-white/70 sm:text-sm sm:tracking-[0.25em]">
                THE NEW STANDARD
              </p>

              <h3 className="text-5xl font-black tracking-[-0.03em] sm:text-6xl md:text-8xl">
                GET FLY.
              </h3>
            </div>
          </div>
        </div>

        {/* More looks */}
        <div className="mt-5 grid gap-5 md:mt-6 md:grid-cols-2 md:gap-6">
          {/* Look 02 */}
          <div className="group relative min-h-[60vh] cursor-pointer overflow-hidden sm:min-h-[70vh]">
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85"
              alt="Fashion look"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 flex min-h-[60vh] flex-col justify-between p-5 sm:min-h-[70vh] sm:p-6 md:p-8">
              <div className="flex justify-between gap-4 text-[10px] tracking-[0.15em] text-white/70 sm:text-xs sm:tracking-[0.2em]">
                <span>LOOK 02</span>
                <span>BLUC / 002</span>
              </div>

              <h3 className="text-4xl font-black tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl md:text-6xl">
                AFTER DARK.
              </h3>
            </div>
          </div>

          {/* Look 03 */}
          <div className="group relative min-h-[60vh] cursor-pointer overflow-hidden sm:min-h-[70vh]">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85"
              alt="Fashion look"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="relative z-10 flex min-h-[60vh] flex-col justify-between p-5 sm:min-h-[70vh] sm:p-6 md:p-8">
              <div className="flex justify-between gap-4 text-[10px] tracking-[0.15em] text-white/70 sm:text-xs sm:tracking-[0.2em]">
                <span>LOOK 03</span>
                <span>BLUC / 003</span>
              </div>

              <h3 className="text-4xl font-black tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl md:text-6xl">
                NO RULES.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="px-5 py-24 sm:px-6 sm:py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 text-[10px] tracking-[0.25em] text-zinc-500 sm:text-xs sm:tracking-[0.3em]">
            BLUC FSHN / NAIROBI
          </p>

          <h2 className="max-w-5xl text-[11vw] font-black leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-8xl">
            BUILT FOR THE ONES
            <br />
            WHO DON'T FOLLOW.
          </h2>

          <div className="mt-10 flex justify-end sm:mt-12">
            <p className="max-w-md text-sm leading-7 text-zinc-400">
              BLUC FSHN is a Nairobi streetwear label built around
              individuality, movement and the freedom to wear your own rules.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <a
              href="#top"
              className="text-sm font-medium tracking-[0.3em] transition-opacity duration-300 hover:opacity-50 sm:tracking-[0.4em]"
            >
              BLUC FSHN
            </a>

            <p className="mt-3 text-[10px] tracking-[0.2em] text-zinc-500 sm:text-xs sm:tracking-[0.25em]">
              NAIROBI, KENYA
            </p>
          </div>

          <div className="flex flex-col gap-5 text-xs text-zinc-400">
            <a
              href="https://www.instagram.com/bluc_fshn/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 transition-all duration-300 hover:text-white"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:text-black">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </span>

              <span>
                <span className="block text-[9px] tracking-[0.2em] text-zinc-600">
                  INSTAGRAM
                </span>

                <span className="tracking-[0.08em]">@bluc_fshn</span>
              </span>
            </a>

            <a
              href="https://www.tiktok.com/@blucfshn"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 transition-all duration-300 hover:text-white"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:text-black">
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

                <span className="tracking-[0.08em]">@blucfshn</span>
              </span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20">
                @
              </span>

              <span>
                <span className="block text-[9px] tracking-[0.2em] text-zinc-600">
                  CONTACT
                </span>

                <span className="tracking-[0.08em]">GET IN TOUCH</span>
              </span>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[9px] tracking-[0.15em] text-zinc-600 sm:mt-16 sm:text-[10px] sm:tracking-[0.2em] md:flex-row">
          <p>© 2023 BLUC FSHN</p>
          <p>MADE IN NAIROBI</p>
        </div>
      </footer>
    </main>
  );
}