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

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.documentElement.style.cursor = "none";
    document.body.style.cursor = "none";

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
      document.documentElement.style.cursor = "";
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <main
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#050505] text-[#f5f5f0]"
    >
      {/* CURSOR-FOLLOWING BACKGROUND */}
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
              circle 30vw at ${100 - mousePosition.x}% ${
            100 - mousePosition.y
          }%,
              rgba(170, 255, 0, 0.10),
              transparent 65%
            )
          `,
        }}
      />

      {/* CUSTOM CAN CURSOR — DESKTOP ONLY */}
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

      {/* HERO */}
      <section className="hero relative min-h-screen overflow-hidden p-5 sm:p-6 md:p-10">
        {/* TOP NAVIGATION */}
        <div className="relative z-20 grid grid-cols-[1fr_auto_1fr] items-start">
          {/* BRAND */}
          <a
            href="#top"
            onClick={() => setShowMenu(false)}
            className="justify-self-start text-xs font-medium tracking-[0.2em] transition-opacity duration-300 hover:opacity-50 sm:text-sm sm:tracking-[0.25em]"
          >
            BLUC FSHN
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 md:flex">
            <a
              href="/collections"
              className="text-[10px] tracking-[0.22em] transition-opacity duration-300 hover:opacity-50"
            >
              COLLECTION
            </a>

            <a
              href="#about"
              className="text-[10px] tracking-[0.22em] transition-opacity duration-300 hover:opacity-50"
            >
              ABOUT
            </a>

            <a
              href="#contact"
              className="text-[10px] tracking-[0.22em] transition-opacity duration-300 hover:opacity-50"
            >
              CONTACT
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setShowMenu(!showMenu)}
            className="justify-self-end text-[10px] tracking-[0.22em] transition-opacity duration-300 hover:opacity-50 md:hidden"
          >
            {showMenu ? "CLOSE" : "MENU"}
          </button>

          {/* LOCATION */}
          <p className="col-start-3 row-start-1 hidden justify-self-end text-right text-[10px] tracking-[0.2em] sm:text-sm sm:tracking-[0.35em] md:block">
            NAIROBI, KENYA
          </p>
        </div>

        {/* MOBILE MENU */}
        {showMenu && (
          <div className="relative z-20 mt-8 flex flex-col items-end gap-5 text-right md:hidden">
            <a
              href="/collections"
              onClick={() => setShowMenu(false)}
              className="text-xs tracking-[0.25em] transition-opacity duration-300 hover:opacity-50"
            >
              COLLECTION
            </a>

            <a
              href="#about"
              onClick={() => setShowMenu(false)}
              className="text-xs tracking-[0.25em] transition-opacity duration-300 hover:opacity-50"
            >
              ABOUT
            </a>

            <a
              href="#contact"
              onClick={() => setShowMenu(false)}
              className="text-xs tracking-[0.25em] transition-opacity duration-300 hover:opacity-50"
            >
              CONTACT
            </a>
          </div>
        )}

        {/* BEE */}
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

        {/* BOTTOM INFORMATION */}
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
            href="/collections"
            className="max-w-[150px] text-right text-[9px] tracking-[0.2em] transition-opacity duration-300 hover:opacity-50 sm:max-w-none sm:text-xs sm:tracking-[0.35em]"
          >
            SCROLL TO EXPLORE
          </a>
        </div>
      </section>

      {/* COLLECTION PREVIEW */}
      <section className="px-5 py-24 sm:px-6 sm:py-32 md:px-10 md:py-48">
        <div className="mb-12 flex items-end justify-between gap-4 sm:mb-16">
          <div>
            <p className="mb-3 text-[10px] tracking-[0.25em] text-zinc-500 sm:text-xs sm:tracking-[0.3em]">
              BLUC FSHN / 004
            </p>

            <h2 className="text-[15vw] font-black uppercase leading-none tracking-[-0.04em] sm:text-6xl md:text-9xl">
              COLLECTION
            </h2>
          </div>

          <p className="hidden text-xs tracking-[0.25em] text-zinc-500 md:block">
            SS26
          </p>
        </div>

        {/* MONEY LAUNDERING PREVIEW */}
        <div className="relative min-h-[65vh] overflow-hidden sm:min-h-[70vh]">
          <img
            src="/jacket.moneylaundering.jpeg"
            alt="BLUC FSHN Money Laundering jacket"
            className="absolute inset-0 h-full w-full object-cover brightness-[0.85] transition-transform duration-1000 hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/30" />

          {/* FALLING BLUC MONEY */}
          <div className="money-rain pointer-events-none absolute inset-0 z-10">
            {Array.from({ length: 16 }).map((_, index) => (
              <img
                key={index}
                src="/bluc-money.png"
                alt=""
                className={`money-note money-note-${index + 1}`}
              />
            ))}
          </div>

          {/* SOFT COLOUR EFFECTS */}
          <div className="absolute left-[10%] top-[20%] h-24 w-24 rounded-full bg-red-500/10 blur-3xl sm:h-32 sm:w-32" />

          <div className="absolute bottom-[10%] right-[15%] h-32 w-32 rounded-full bg-lime-400/10 blur-3xl sm:h-40 sm:w-40" />

          {/* COLLECTION INFORMATION */}
          <div className="relative z-20 flex min-h-[65vh] flex-col justify-between p-5 sm:min-h-[70vh] sm:p-6 md:p-10">
            <div className="flex justify-between gap-4 text-[10px] tracking-[0.15em] text-white/70 sm:text-xs sm:tracking-[0.2em]">
              <span>DROP 04</span>
              <span>BLUC / 004</span>
            </div>

            <div>
              <p className="mb-3 text-xs tracking-[0.2em] text-white/70 sm:text-sm sm:tracking-[0.25em]">
                MONEY LAUNDRY
              </p>

              <h3 className="text-5xl font-black uppercase tracking-[-0.03em] sm:text-6xl md:text-8xl">
                MONEY
                <br />
                LAUNDRY.
              </h3>

              <a
                href="/collections/money-laundering"
                className="mt-6 inline-flex items-center gap-3 border border-white/30 px-5 py-3 text-[10px] tracking-[0.25em] transition-all duration-300 hover:bg-white hover:text-black sm:text-xs"
              >
                VIEW DROP
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="px-5 py-24 sm:px-6 sm:py-32 md:px-10 md:py-48"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 text-[10px] tracking-[0.25em] text-zinc-500 sm:text-xs sm:tracking-[0.3em]">
            BLUC FSHN / NAIROBI
          </p>

          <h2 className="max-w-5xl text-[11vw] font-black leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-8xl">
            BUILT FOR THE ONES
            <br />
            WHO DON&apos;T FOLLOW.
          </h2>

          <div className="mt-10 flex justify-end sm:mt-12">
            <p className="max-w-md text-sm leading-7 text-zinc-400">
              BLUC FSHN is a Nairobi streetwear label built around
              individuality, movement and the freedom to wear your own rules.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer
        id="contact"
        className="border-t border-white/10 px-5 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16"
      >
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
            {/* INSTAGRAM */}
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

            {/* TIKTOK */}
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

            {/* CONTACT */}
            <a
              href="#contact"
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