"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const moneyPieces = [
  { left: "2%", delay: "0s", duration: "7s", size: "42px", rotate: "-18deg" },
  { left: "8%", delay: "1.2s", duration: "8s", size: "38px", rotate: "12deg" },
  { left: "14%", delay: "2.4s", duration: "6.5s", size: "45px", rotate: "-8deg" },
  { left: "20%", delay: "0.8s", duration: "7.5s", size: "40px", rotate: "20deg" },
  { left: "27%", delay: "3s", duration: "8.5s", size: "43px", rotate: "-15deg" },
  { left: "34%", delay: "1.7s", duration: "7s", size: "37px", rotate: "8deg" },
  { left: "41%", delay: "2.8s", duration: "9s", size: "44px", rotate: "-22deg" },
  { left: "48%", delay: "0.4s", duration: "6.8s", size: "39px", rotate: "16deg" },
  { left: "55%", delay: "2.1s", duration: "8s", size: "46px", rotate: "-10deg" },
  { left: "62%", delay: "1s", duration: "7.2s", size: "41px", rotate: "14deg" },
  { left: "69%", delay: "3.4s", duration: "8.7s", size: "38px", rotate: "-18deg" },
  { left: "76%", delay: "1.5s", duration: "7.8s", size: "45px", rotate: "10deg" },
  { left: "83%", delay: "2.7s", duration: "6.9s", size: "40px", rotate: "-14deg" },
  { left: "90%", delay: "0.6s", duration: "8.3s", size: "43px", rotate: "18deg" },
  { left: "96%", delay: "2s", duration: "7.4s", size: "39px", rotate: "-6deg" },
  { left: "5%", delay: "4s", duration: "9s", size: "36px", rotate: "22deg" },
  { left: "18%", delay: "3.5s", duration: "7.7s", size: "44px", rotate: "-12deg" },
  { left: "31%", delay: "4.2s", duration: "8.4s", size: "41px", rotate: "17deg" },
  { left: "44%", delay: "3.8s", duration: "7.1s", size: "37px", rotate: "-20deg" },
  { left: "57%", delay: "4.5s", duration: "8.8s", size: "45px", rotate: "9deg" },
  { left: "70%", delay: "3.2s", duration: "7.6s", size: "40px", rotate: "-16deg" },
  { left: "83%", delay: "4.7s", duration: "8.1s", size: "43px", rotate: "13deg" },
  { left: "94%", delay: "3.9s", duration: "7.3s", size: "38px", rotate: "-9deg" },
];

const collections = [
  {
    name: "MONEY LAUNDRY",
    slug: "money-laundering",
    number: "DROP 04",
    image: "/jacket.moneylaundering.jpeg",
    moneyRain: true,
  },
  {
    name: "DROP THREE",
    slug: "drop-three",
    number: "DROP 03",
    image: "/cover drop three.jpeg",
    soldOut: true,
  },
  {
    name: "DROP TWO",
    slug: "drop-two",
    number: "DROP 02",
    image: "/cover drop two.jpeg",
    soldOut: true,
  },
  {
    name: "DROP ONE",
    slug: "drop-one",
    number: "DROP 01",
    image: "/cover drop one.jpeg",
    soldOut: true,
  },
];

export default function CollectionsPage() {
  const [cursorPosition, setCursorPosition] = useState({
    x: 50,
    y: 50,
  });

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

        <nav className="flex items-center gap-8 text-xs tracking-[0.2em]">
          <Link
            href="/"
            className="hover:opacity-60 transition-opacity"
          >
            HOME
          </Link>

          <Link
            href="/collections"
            className="hover:opacity-60 transition-opacity"
          >
            COLLECTION
          </Link>
        </nav>
      </header>

      {/* PAGE TITLE */}
      <section className="px-6 md:px-10 pt-16 pb-12">
        <p className="text-xs tracking-[0.3em] opacity-50 mb-5">
          BLUC FSHN / 004
        </p>

        <h1 className="text-[clamp(4rem,13vw,11rem)] leading-[0.8] tracking-[-0.06em] font-light">
          COLLECTIONS
        </h1>
      </section>

      {/* COLLECTION CARDS */}
      <section className="px-6 md:px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group relative block overflow-hidden bg-neutral-900"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                {/* COLLECTION IMAGE */}
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* MONEY RAIN */}
                {collection.moneyRain && (
                  <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                    {moneyPieces.map((money, index) => (
                      <img
                        key={index}
                        src="/bluc-money.png"
                        alt=""
                        className="money-rain-preview"
                        style={{
                          left: money.left,
                          width: money.size,
                          height: "auto",
                          animationDuration: money.duration,
                          animationDelay: money.delay,
                          ["--money-rotate" as string]: money.rotate,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* SOLD OUT */}
                {collection.soldOut && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <span className="border border-white px-6 py-3 text-sm tracking-[0.35em] bg-black/40 backdrop-blur-sm">
                      SOLD OUT
                    </span>
                  </div>
                )}

                {/* IMAGE HOVER OVERLAY */}
                <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* COLLECTION LABEL */}
              <div className="flex items-center justify-between py-4 border-b border-white/20">
                <div>
                  <p className="text-xs tracking-[0.25em] opacity-50 mb-1">
                    {collection.number}
                  </p>

                  <h2 className="text-xl md:text-2xl tracking-[-0.02em]">
                    {collection.name}
                  </h2>
                </div>

                <span className="text-xl group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between gap-4 text-xs tracking-[0.2em] opacity-50">
        <span>© 2023 BLUC FSHN</span>
        <span>MADE IN NAIROBI</span>
      </footer>
    </main>
  );
}