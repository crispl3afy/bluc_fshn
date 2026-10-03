"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   DROP ONE — 35 PHOTOS
========================================================= */

const dropOneLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "aa",
  "bb",
  "cc",
  "dd",
  "ee",
  "ff",
  "gg",
  "hh",
  "ii",
];

/* =========================================================
   DROP TWO — a TO j
========================================================= */

const dropTwoLetters = [
  "a",
  "b",
  "c",
  "e",
  "g",
  "h",
  "i",
  "j",
];

/* =========================================================
   DROP THREE — a TO m
========================================================= */

const dropThreeLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
];

/* =========================================================
   MONEY RAIN
========================================================= */

const moneyPieces = Array.from({ length: 40 }, (_, index) => ({
  left: `${(index * 17) % 100}%`,
  delay: `${(index * 0.35) % 7}s`,
  duration: `${6 + ((index * 0.47) % 4)}s`,
  size: `${36 + ((index * 7) % 16)}px`,
  rotate: `${-25 + ((index * 13) % 50)}deg`,
}));

/* =========================================================
   COLLECTIONS
========================================================= */

const collections = {
  "money-laundering": {
    name: "MONEY LAUNDRY",
    number: "DROP 04",
  },

  "drop-three": {
    name: "DROP THREE",
    number: "DROP 03",
  },

  "drop-two": {
    name: "DROP TWO",
    number: "DROP 02",
  },

  "drop-one": {
    name: "DROP ONE",
    number: "DROP 01",
  },
};

export default function CollectionPage({ params }: PageProps) {
  const { slug } = use(params);

  const [cursorPosition, setCursorPosition] = useState({
    x: 50,
    y: 50,
  });

  const [jacketPhoto, setJacketPhoto] = useState(0);
  const [jeansPhoto, setJeansPhoto] = useState(0);

  const collection =
    collections[slug as keyof typeof collections];

  const isDropOne = slug === "drop-one";
  const isDropTwo = slug === "drop-two";
  const isDropThree = slug === "drop-three";
  const isMoneyLaundry = slug === "money-laundering";

  /* =======================================================
     CURSOR
  ======================================================= */

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      setCursorPosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.cursor = "none";
    document.body.style.cursor = "none";

    return () => {
      document.documentElement.style.cursor = "";
      document.body.style.cursor = "";
    };
  }, []);

  /* =======================================================
     COLLECTION NOT FOUND
  ======================================================= */

  if (!collection) {
    return (
      <main className="min-h-screen bg-[#050505] text-[#f5f5f0] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] opacity-50 mb-6">
            COLLECTION NOT FOUND
          </p>

          <Link
            href="/collections"
            className="text-sm tracking-[0.2em] underline underline-offset-8"
          >
            BACK TO COLLECTIONS
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen bg-[#050505] text-[#f5f5f0]"
      style={{
        backgroundImage: `
          radial-gradient(
            circle at ${cursorPosition.x}% ${cursorPosition.y}%,
            rgba(255,20,60,0.16),
            transparent 24%
          ),
          radial-gradient(
            circle at ${100 - cursorPosition.x}% ${100 - cursorPosition.y}%,
            rgba(170,255,0,0.10),
            transparent 28%
          )
        `,
      }}
    >
      {/* CUSTOM CURSOR */}

      <img
        src="/can.cursor.png"
        alt=""
        className="fixed hidden md:block pointer-events-none z-[99999] w-20 h-20 object-contain"
        style={{
          left: `${cursorPosition.x}%`,
          top: `${cursorPosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* HEADER */}

      <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 bg-[#050505]/80 backdrop-blur-md">
        <Link
          href="/"
          className="text-sm tracking-[0.25em] font-medium hover:opacity-60 transition-opacity"
        >
          BLUC FSHN
        </Link>

        <Link
          href="/collections"
          className="text-xs tracking-[0.2em] hover:opacity-60 transition-opacity"
        >
          ← COLLECTIONS
        </Link>
      </header>

      {/* ===================================================
          DROP ONE
      =================================================== */}

      {isDropOne && (
        <>
          <section className="px-6 md:px-10 pt-16 pb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <p className="text-xs tracking-[0.3em] opacity-50 mb-5">
                  {collection.number}
                </p>

                <h1 className="text-[clamp(4rem,13vw,11rem)] leading-[0.8] tracking-[-0.06em] font-light">
                  {collection.name}
                </h1>
              </div>

              <span className="inline-block border border-white/60 px-5 py-3 text-xs tracking-[0.3em]">
                SOLD OUT
              </span>
            </div>
          </section>

          <section className="px-6 md:px-10 pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
              {dropOneLetters.map((letter, index) => (
                <div
                  key={letter}
                  className="relative overflow-hidden bg-neutral-900 group"
                >
                  <img
                    src={`/drop one (${letter}).jpeg`}
                    alt={`BLUC FSHN Drop One ${letter}`}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {index === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="border border-white px-6 py-3 text-xs tracking-[0.35em] bg-black/45 backdrop-blur-sm">
                        SOLD OUT
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ===================================================
          DROP TWO
      =================================================== */}

      {isDropTwo && (
        <>
          <section className="px-6 md:px-10 pt-16 pb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <p className="text-xs tracking-[0.3em] opacity-50 mb-5">
                  {collection.number}
                </p>

                <h1 className="text-[clamp(4rem,13vw,11rem)] leading-[0.8] tracking-[-0.06em] font-light">
                  {collection.name}
                </h1>
              </div>

              <span className="inline-block border border-white/60 px-5 py-3 text-xs tracking-[0.3em]">
                SOLD OUT
              </span>
            </div>
          </section>

          <section className="px-6 md:px-10 pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
              {dropTwoLetters.map((letter, index) => (
                <div
                  key={letter}
                  className="relative overflow-hidden bg-neutral-900 group"
                >
                  <img
                    src={`/drop two ${letter}.jpeg`}
                    alt={`BLUC FSHN Drop Two ${letter}`}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {index === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="border border-white px-6 py-3 text-xs tracking-[0.35em] bg-black/45 backdrop-blur-sm">
                        SOLD OUT
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ===================================================
          DROP THREE
      =================================================== */}

      {isDropThree && (
        <>
          <section className="px-6 md:px-10 pt-16 pb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <p className="text-xs tracking-[0.3em] opacity-50 mb-5">
                  {collection.number}
                </p>

                <h1 className="text-[clamp(4rem,13vw,11rem)] leading-[0.8] tracking-[-0.06em] font-light">
                  {collection.name}
                </h1>
              </div>

              <span className="inline-block border border-white/60 px-5 py-3 text-xs tracking-[0.3em]">
                SOLD OUT
              </span>
            </div>
          </section>

          <section className="px-6 md:px-10 pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
              {dropThreeLetters.map((letter, index) => (
                <div
                  key={letter}
                  className="relative overflow-hidden bg-neutral-900 group"
                >
                  <img
                    src={`/drop three ${letter}.jpeg`}
                    alt={`BLUC FSHN Drop Three ${letter}`}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {index === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="border border-white px-6 py-3 text-xs tracking-[0.35em] bg-black/45 backdrop-blur-sm">
                        SOLD OUT
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ===================================================
          MONEY LAUNDRY — DROP 04
      =================================================== */}

      {isMoneyLaundry && (
        <>
          <section className="px-6 md:px-10 pt-16 pb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <p className="text-xs tracking-[0.3em] opacity-50 mb-5">
                  {collection.number}
                </p>

                <h1 className="text-[clamp(4rem,13vw,11rem)] leading-[0.8] tracking-[-0.06em] font-light">
                  {collection.name}
                </h1>
              </div>

              <span className="inline-block border border-white/60 px-5 py-3 text-xs tracking-[0.3em]">
                SOLD OUT
              </span>
            </div>
          </section>

          {/* HERO */}

          <section className="px-6 md:px-10 pb-16">
            <div className="relative overflow-hidden">
              <img
                src="/jacket.moneylaundering.jpeg"
                alt="Money Laundry"
                className="w-full h-auto block"
              />

              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {moneyPieces.map((money, index) => (
                  <img
                    key={index}
                    src="/bluc-money.png"
                    alt=""
                    className="money-rain-piece"
                    style={{
                      left: money.left,
                      width: money.size,
                      animationDuration: money.duration,
                      animationDelay: money.delay,
                      ["--money-rotate" as string]: money.rotate,
                    }}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* PRODUCTS */}

          <section className="px-6 md:px-10 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* JACKET */}

              <div>
                <div className="relative overflow-hidden bg-neutral-900">
                  <img
                    src={
                      [
                        "/jacket.moneylaundering.jpeg",
                        "/jacket.frontside.jpeg",
                        "/jacket.backside.jpeg",
                      ][jacketPhoto]
                    }
                    alt="Yellow Jacket"
                    className="w-full h-auto block"
                  />

                  <button
                    onClick={() =>
                      setJacketPhoto((prev) =>
                        prev === 2 ? 0 : prev + 1
                      )
                    }
                    className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 text-xs tracking-[0.2em]"
                  >
                    NEXT →
                  </button>
                </div>

                <div className="flex justify-between items-center pt-4 border-b border-white/20 pb-4">
                  <span className="text-lg">
                    YELLOW JACKET
                  </span>

                  <span className="text-sm opacity-60">
                    KSh 7,500
                  </span>
                </div>
              </div>

              {/* PANTS */}

              <div>
                <div className="relative overflow-hidden bg-neutral-900">
                  <img
                    src={
                      [
                        "/jeans.moneylaundering.jpeg",
                        "/jeans.backside.jpeg",
                        "/jeans.pockets.jpeg",
                      ][jeansPhoto]
                    }
                    alt="Walking on Wings Pants"
                    className="w-full h-auto block"
                  />

                  <button
                    onClick={() =>
                      setJeansPhoto((prev) =>
                        prev === 2 ? 0 : prev + 1
                      )
                    }
                    className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 text-xs tracking-[0.2em]"
                  >
                    NEXT →
                  </button>
                </div>

                <div className="flex justify-between items-center pt-4 border-b border-white/20 pb-4">
                  <span className="text-lg">
                    WALKING ON WINGS PANTS
                  </span>

                  <span className="text-sm opacity-60">
                    KSh 4,000
                  </span>
                </div>
              </div>

              {/* BIKINI */}

              <div>
                <div className="relative overflow-hidden bg-neutral-900">
                  <img
                    src="/bikini.moneylaundering.jpeg"
                    alt="Lady Money Bikini Set"
                    className="w-full h-auto block"
                  />
                </div>

                <div className="flex justify-between items-center pt-4 border-b border-white/20 pb-4">
                  <span className="text-lg">
                    LADY MONEY BIKINI SET
                  </span>

                  <span className="text-sm opacity-60">
                    KSh 1,500
                  </span>
                </div>
              </div>

            </div>
          </section>
        </>
      )}

      {/* FOOTER */}

      <footer className="border-t border-white/10 px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between gap-4 text-xs tracking-[0.2em] opacity-50">
        <span>© 2023 BLUC FSHN</span>
        <span>MADE IN NAIROBI</span>
      </footer>
    </main>
  );
}