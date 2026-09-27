
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

const moneyRain = [
  { left: "2%", delay: "-1s", duration: "5.5s", size: "32px", rotate: "-18deg" },
  { left: "7%", delay: "1.2s", duration: "6.5s", size: "42px", rotate: "12deg" },
  { left: "12%", delay: "-2.5s", duration: "5s", size: "36px", rotate: "-8deg" },
  { left: "17%", delay: "0.5s", duration: "7s", size: "48px", rotate: "20deg" },
  { left: "22%", delay: "-3s", duration: "5.8s", size: "34px", rotate: "-15deg" },
  { left: "27%", delay: "1.8s", duration: "6.2s", size: "44px", rotate: "8deg" },
  { left: "32%", delay: "-1.5s", duration: "5.2s", size: "30px", rotate: "25deg" },
  { left: "37%", delay: "0.8s", duration: "6.8s", size: "46px", rotate: "-20deg" },
  { left: "42%", delay: "-2s", duration: "5.5s", size: "38px", rotate: "15deg" },
  { left: "47%", delay: "1.5s", duration: "6.5s", size: "50px", rotate: "-10deg" },
  { left: "52%", delay: "-0.8s", duration: "5.8s", size: "34px", rotate: "18deg" },
  { left: "57%", delay: "2.2s", duration: "7s", size: "42px", rotate: "-25deg" },
  { left: "62%", delay: "-2.8s", duration: "5.3s", size: "36px", rotate: "10deg" },
  { left: "67%", delay: "0.3s", duration: "6.4s", size: "48px", rotate: "-12deg" },
  { left: "72%", delay: "-1.8s", duration: "5.6s", size: "32px", rotate: "22deg" },
  { left: "77%", delay: "1.7s", duration: "6.8s", size: "45px", rotate: "-18deg" },
  { left: "82%", delay: "-2.2s", duration: "5.2s", size: "37px", rotate: "14deg" },
  { left: "87%", delay: "0.9s", duration: "6.3s", size: "50px", rotate: "-8deg" },
  { left: "92%", delay: "-1.2s", duration: "5.7s", size: "35px", rotate: "20deg" },
  { left: "97%", delay: "2s", duration: "6.7s", size: "43px", rotate: "-15deg" },
  { left: "10%", delay: "3s", duration: "5.4s", size: "40px", rotate: "16deg" },
  { left: "29%", delay: "3.5s", duration: "6s", size: "33px", rotate: "-22deg" },
  { left: "59%", delay: "3.2s", duration: "5.9s", size: "47px", rotate: "11deg" },
  { left: "89%", delay: "3.8s", duration: "6.6s", size: "39px", rotate: "-19deg" },
];
const moneyPieces = [
  { left: "2%", delay: "0s", duration: "7s", size: "42px", rotate: "-18deg" },
  { left: "8%", delay: "2s", duration: "9s", size: "55px", rotate: "16deg" },
  { left: "15%", delay: "4s", duration: "8s", size: "38px", rotate: "-25deg" },
  { left: "22%", delay: "1s", duration: "10s", size: "62px", rotate: "12deg" },
  { left: "29%", delay: "5s", duration: "7.5s", size: "48px", rotate: "-10deg" },
  { left: "36%", delay: "2s", duration: "9.5s", size: "40px", rotate: "22deg" },
  { left: "43%", delay: "6s", duration: "8.5s", size: "68px", rotate: "-16deg" },
  { left: "50%", delay: "3s", duration: "11s", size: "45px", rotate: "18deg" },
  { left: "57%", delay: "0s", duration: "8s", size: "58px", rotate: "-22deg" },
  { left: "64%", delay: "5s", duration: "9s", size: "40px", rotate: "14deg" },
  { left: "71%", delay: "2s", duration: "7s", size: "60px", rotate: "-12deg" },
  { left: "78%", delay: "0.5s", duration: "10s", size: "44px", rotate: "25deg" },
  { left: "85%", delay: "6s", duration: "8.5s", size: "52px", rotate: "-20deg" },
  { left: "92%", delay: "3s", duration: "9.5s", size: "46px", rotate: "20deg" },
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

              {/* MONEY RAIN — MONEY LAUNDERING ONLY */}
              {collection.slug === "money-laundering" && (
               <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
  {moneyPieces.map((money, index) => (
    <img
      key={index}
      src="/bluc-money.png"
      alt=""
      className="money-rain-preview absolute"
      style={
        {
          left: money.left,
          width: money.size,
          height: "auto",
          animationDuration: money.duration,
          animationDelay: money.delay,
          "--money-rotate": money.rotate,
        } as React.CSSProperties
      }
    />
  ))}
</div>
              )}

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 z-20 bg-black/20 transition-colors duration-500 group-hover:bg-black/40" />

              {/* TEXT */}
              <div className="absolute inset-0 z-30 flex flex-col justify-between p-5 sm:p-6 md:p-8">

                <div className="flex justify-between text-[9px] tracking-[0.2em] text-white/70 sm:text-[10px]">
                  <span>{collection.number}</span>
                  <span>BLUC / 004</span>
                </div>

                <div>
                  <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.04em] sm:text-5xl md:text-6xl">
                    {collection.name}
                  </h2>

                  <div className="mt-4 inline-block bg-black px-4 py-3 text-[10px] font-medium tracking-[0.2em] text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    VIEW COLLECTION →
                  </div>
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

