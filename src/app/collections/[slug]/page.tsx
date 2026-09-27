"use client";

import { use, useEffect, useState } from "react";

const collections: Record<
  string,
  {
    name: string;
    drop: string;
    description: string;
    pieces: {
      name: string;
      price: string;
      images: string[];
    }[];
  }
> = {
  "money-laundering": {
    name: "MONEY LAUNDRY",
    drop: "DROP 04",
    description: "Money Laundry collection from BLUC FSHN.",
    pieces: [
      {
        name: "YELLOW JACKET",
        price: "KSh 7,500",
        images: [
          "/jacket.moneylaundering.jpeg",
          "/jacket.frontside.jpeg",
          "/jacket.backside.jpeg",
        ],
      },
      {
        name: "WALKING ON WINGS PANTS",
        price: "KSh 4,000",
        images: [
          "/jeans.moneylaundering.jpeg",
          "/jeans.backside.jpeg",
          "/jeans.pockets.jpeg",
        ],
      },
      {
        name: "LADY MONEY BIKINI SET",
        price: "KSh 1,500",
        images: ["/bikini.moneylaundering.jpeg"],
      },
    ],
  },

  guap: {
    name: "GUAP",
    drop: "DROP 03",
    description: "GUAP collection from BLUC FSHN.",
    pieces: [],
  },

  "drop-three": {
    name: "DROP THREE",
    drop: "DROP 02",
    description: "The second BLUC FSHN collection.",
    pieces: [],
  },

  "drop-four": {
    name: "DROP FOUR",
    drop: "DROP 01",
    description: "The first BLUC FSHN collection.",
    pieces: [],
  },
};

const moneyPieces = [
  { left: "3%", delay: "0s", duration: "8s", size: "55px", rotate: "-15deg" },
  { left: "9%", delay: "2s", duration: "10s", size: "70px", rotate: "20deg" },
  { left: "16%", delay: "5s", duration: "9s", size: "45px", rotate: "-25deg" },
  { left: "24%", delay: "1s", duration: "11s", size: "65px", rotate: "12deg" },
  { left: "31%", delay: "4s", duration: "8s", size: "50px", rotate: "-18deg" },
  { left: "38%", delay: "7s", duration: "10s", size: "75px", rotate: "25deg" },
  { left: "45%", delay: "2.5s", duration: "9s", size: "48px", rotate: "-10deg" },
  { left: "52%", delay: "6s", duration: "11s", size: "60px", rotate: "18deg" },
  { left: "59%", delay: "0.5s", duration: "8s", size: "52px", rotate: "-22deg" },
  { left: "66%", delay: "3s", duration: "10s", size: "72px", rotate: "15deg" },
  { left: "73%", delay: "5.5s", duration: "9s", size: "46px", rotate: "-17deg" },
  { left: "80%", delay: "1.5s", duration: "11s", size: "62px", rotate: "23deg" },
  { left: "87%", delay: "4.5s", duration: "8s", size: "50px", rotate: "-12deg" },
  { left: "94%", delay: "7.5s", duration: "10s", size: "68px", rotate: "19deg" },

  { left: "6%", delay: "6.5s", duration: "12s", size: "42px", rotate: "14deg" },
  { left: "19%", delay: "8s", duration: "9s", size: "58px", rotate: "-20deg" },
  { left: "35%", delay: "9s", duration: "10s", size: "47px", rotate: "16deg" },
  { left: "49%", delay: "8.5s", duration: "12s", size: "70px", rotate: "-14deg" },
  { left: "63%", delay: "10s", duration: "9s", size: "44px", rotate: "21deg" },
  { left: "77%", delay: "9.5s", duration: "11s", size: "57px", rotate: "-19deg" },
  { left: "91%", delay: "11s", duration: "10s", size: "65px", rotate: "13deg" },
];

export default function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const collection = collections[slug];

  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

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

  if (!collection) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-[#f5f5f0]">
        <div className="text-center">
          <p className="mb-4 text-xs tracking-[0.3em] text-zinc-500">
            BLUC FSHN
          </p>

          <h1 className="text-5xl font-black uppercase">
            COLLECTION NOT FOUND
          </h1>

          <a
            href="/collections"
            className="mt-8 inline-block text-xs tracking-[0.2em] transition-opacity hover:opacity-50"
          >
            ← BACK TO COLLECTIONS
          </a>
        </div>
      </main>
    );
  }

  const isMoneyLaundry = slug === "money-laundering";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] px-5 py-8 text-[#f5f5f0] sm:px-6 md:px-10 md:py-10">
      {/* MONEY RAIN */}
      {isMoneyLaundry && (
        <div
          className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
          aria-hidden="true"
        >
          {moneyPieces.map((money, index) => (
            <img
              key={index}
              src="/bluc-money.png"
              alt=""
             className="money-rain-piece absolute top-[-120px] opacity-80"
              style={{
                left: money.left,
                width: money.size,
                height: "auto",
                animation: `moneyFall ${money.duration} linear ${money.delay} infinite`,
                "--money-rotate": money.rotate,
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}

      {/* CUSTOM CAN CURSOR */}
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
      <header className="relative z-30 mb-16 flex items-start justify-between md:mb-20">
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

      {/* COLLECTION INTRO */}
      <section className="relative z-30 mb-16">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-[10px] tracking-[0.3em] text-zinc-500">
            {collection.drop}
          </p>

          <a
            href="/collections"
            className="text-[10px] tracking-[0.2em] text-zinc-500 transition-colors hover:text-white"
          >
            ← ALL COLLECTIONS
          </a>
        </div>

        <h1 className="text-[15vw] font-black uppercase leading-[0.8] tracking-[-0.06em] sm:text-7xl md:text-9xl">
          {collection.name}
        </h1>

        <p className="mt-8 max-w-md text-xs leading-relaxed tracking-[0.1em] text-zinc-400">
          {collection.description}
        </p>
      </section>

      {/* COLLECTION PIECES */}
  <section className="relative z-30">
  {collection.pieces.length > 0 ? (
    <div className="grid gap-12 md:grid-cols-2">
      {collection.pieces.map((piece, index) => (
        <article key={piece.name} className="group">
  {/* CLOTHING NAME + PRICE */}
  <div className="mb-5 flex items-start justify-between border-b border-white/10 pb-5">
    <div>
      <h2 className="text-lg font-bold uppercase tracking-[-0.02em] sm:text-xl">
        {piece.name}
      </h2>

      <p className="mt-2 text-[10px] tracking-[0.2em] text-zinc-500">
        BLUC FSHN / NAIROBI
      </p>
    </div>

    <p className="text-xs tracking-[0.15em]">
      {piece.price}
    </p>
  </div>

  {/* MAIN CLOTHING IMAGE */}
  <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
    <img
      src={piece.images[0]}
      alt={piece.name}
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/25" />

    <div className="absolute left-5 top-5 flex w-[calc(100%-40px)] justify-between text-[9px] tracking-[0.2em] text-white/70 sm:left-6 sm:top-6 sm:w-[calc(100%-48px)]">
      <span>0{index + 1}</span>
      <span>{collection.drop}</span>
    </div>
  </div>

  {/* ADDITIONAL CLOTHING IMAGES */}
  {piece.images.length > 1 && (
    <div className="mt-4 grid grid-cols-2 gap-4">
      {piece.images.slice(1).map((image, imageIndex) => (
        <div
          key={image}
          className="aspect-square overflow-hidden bg-zinc-900"
        >
          <img
            src={image}
            alt={`${piece.name} view ${imageIndex + 2}`}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      ))}
    </div>
  )}
</article>
      ))}
    </div>
  ) : (
    <div className="flex min-h-[40vh] items-center justify-center border-y border-white/10">
      <div className="text-center">
        <p className="text-[10px] tracking-[0.3em] text-zinc-600">
          COLLECTION DETAILS
        </p>

        <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.04em]">
          COMING SOON
        </h2>

        <p className="mt-4 text-[10px] tracking-[0.2em] text-zinc-500">
          MORE FROM BLUC FSHN
        </p>
      </div>
    </div>
  )}
</section>

      {/* FOOTER */}
      <footer className="relative z-30 mt-24 border-t border-white/10 pt-6">
        <div className="flex flex-col justify-between gap-3 text-[9px] tracking-[0.15em] text-zinc-600 sm:flex-row sm:text-[10px] sm:tracking-[0.2em]">
          <p>© 2023 BLUC FSHN</p>
          <p>MADE IN NAIROBI</p>
        </div>
      </footer>
    </main>
  );
}