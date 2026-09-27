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
    description: "BLUC FSHN collection.",
    pieces: [],
  },

  "drop-four": {
    name: "DROP FOUR",
    drop: "DROP 01",
    description: "BLUC FSHN collection.",
    pieces: [],
  },
};

export default function CollectionPage({ 

  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const [currentPhotos, setCurrentPhotos] = useState<Record<number, number>>(
    {}
  );

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

  const [showMenu, setShowMenu] = useState(false);

  const collection = collections[slug];

  if (!collection) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#050505] px-5 text-center text-[#f5f5f0]">
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
        <p className="mb-4 text-[10px] tracking-[0.3em] text-zinc-500">
          BLUC FSHN
        </p>

        <h1 className="text-5xl font-black uppercase tracking-[-0.04em]">
          COLLECTION NOT FOUND
        </h1>

        <a
          href="/collections"
          className="mt-8 border border-white/30 px-5 py-3 text-[10px] tracking-[0.25em] transition-all hover:bg-white hover:text-black"
        >
          BACK TO COLLECTIONS
        </a>
      </main>
    );
  }

  const changePhoto = (pieceIndex: number, direction: number) => {
    const piece = collection.pieces[pieceIndex];

    if (!piece) return;

    const current = currentPhotos[pieceIndex] ?? 0;

    let next = current + direction;

    if (next < 0) {
      next = piece.images.length - 1;
    }

    if (next >= piece.images.length) {
      next = 0;
    }

    setCurrentPhotos((previous) => ({
      ...previous,
      [pieceIndex]: next,
    }));
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f0]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/90 px-5 py-5 backdrop-blur-md sm:px-6 md:px-10">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-xs font-medium tracking-[0.2em] transition-opacity hover:opacity-50 sm:text-sm sm:tracking-[0.25em]"
          >
            BLUC FSHN
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <a
              href="/collections"
              className="text-[10px] tracking-[0.22em] transition-opacity hover:opacity-50"
            >
              COLLECTION
            </a>

            <a
              href="/#about"
              className="text-[10px] tracking-[0.22em] transition-opacity hover:opacity-50"
            >
              ABOUT
            </a>

            <a
              href="/#contact"
              className="text-[10px] tracking-[0.22em] transition-opacity hover:opacity-50"
            >
              CONTACT
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setShowMenu(!showMenu)}
            className="text-[10px] tracking-[0.22em] md:hidden"
          >
            {showMenu ? "CLOSE" : "MENU"}
          </button>
        </div>

        {showMenu && (
          <div className="mt-8 flex flex-col items-end gap-5 text-right md:hidden">
            <a
              href="/collections"
              onClick={() => setShowMenu(false)}
              className="text-xs tracking-[0.25em]"
            >
              COLLECTION
            </a>

            <a
              href="/#about"
              onClick={() => setShowMenu(false)}
              className="text-xs tracking-[0.25em]"
            >
              ABOUT
            </a>

            <a
              href="/#contact"
              onClick={() => setShowMenu(false)}
              className="text-xs tracking-[0.25em]"
            >
              CONTACT
            </a>
          </div>
        )}
      </header>

      {/* COLLECTION INTRO */}
      <section className="px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[10px] tracking-[0.25em] text-zinc-500">
              BLUC FSHN / {collection.drop}
            </p>

            <p className="text-[10px] tracking-[0.25em] text-zinc-500">
              NAIROBI, KENYA
            </p>
          </div>

          <h1 className="max-w-6xl text-[15vw] font-black uppercase leading-[0.85] tracking-[-0.05em] sm:text-7xl md:text-9xl">
            {collection.name}
          </h1>

          <p className="mt-8 max-w-md text-sm leading-7 text-zinc-500">
            {collection.description}
          </p>
        </div>
      </section>

      {/* COLLECTION PIECES */}
      {collection.pieces.length > 0 ? (
        <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 sm:pb-32 md:px-10 md:pb-48">
          {collection.pieces.map((piece, pieceIndex) => {
            const currentPhoto = currentPhotos[pieceIndex] ?? 0;

            return (
              <article
                key={piece.name}
                className="mb-20 last:mb-0 sm:mb-28"
              >
                {/* PIECE HEADER */}
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[9px] tracking-[0.25em] text-zinc-500 sm:text-[10px]">
                      PIECE {String(pieceIndex + 1).padStart(2, "0")}
                    </p>

                    <h2 className="mt-1 text-2xl font-bold uppercase tracking-[-0.03em] sm:text-3xl md:text-4xl">
                      {piece.name}
                    </h2>

                    <p className="mt-2 text-sm tracking-[0.15em] text-white/60">
                      {piece.price}
                    </p>
                  </div>

                  <span className="text-[9px] tracking-[0.2em] text-zinc-600 sm:text-[10px]">
                    {currentPhoto + 1} / {piece.images.length}
                  </span>
                </div>

                {/* MAIN IMAGE */}
                <div className="relative overflow-hidden bg-zinc-900">
                  <img
                    src={piece.images[currentPhoto]}
                    alt={`${collection.name} - ${piece.name}`}
                    className="h-auto max-h-[80vh] w-full object-contain"
                  />

                  {piece.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => changePhoto(pieceIndex, -1)}
                        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/30 text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black sm:left-5"
                        aria-label="Previous photo"
                      >
                        ←
                      </button>

                      <button
                        type="button"
                        onClick={() => changePhoto(pieceIndex, 1)}
                        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/30 text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black sm:right-5"
                        aria-label="Next photo"
                      >
                        →
                      </button>
                    </>
                  )}
                </div>

                {/* THUMBNAILS */}
                {piece.images.length > 1 && (
                  <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                    {piece.images.map((image, imageIndex) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() =>
                          setCurrentPhotos((previous) => ({
                            ...previous,
                            [pieceIndex]: imageIndex,
                          }))
                        }
                        className={`overflow-hidden border transition-all duration-300 ${
                          currentPhoto === imageIndex
                            ? "border-white"
                            : "border-white/10 opacity-50 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${piece.name} view ${imageIndex + 1}`}
                          className="aspect-[4/5] w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </section>
      ) : (
        /* TEMPORARY EMPTY COLLECTION */
        <section className="mx-auto max-w-7xl px-5 pb-32 sm:px-6 md:px-10">
          <div className="flex min-h-[50vh] items-center justify-center border border-white/10">
            <div className="text-center">
              <p className="mb-4 text-[10px] tracking-[0.3em] text-zinc-500">
                COLLECTION CONTENT
              </p>

              <h2 className="text-4xl font-black uppercase tracking-[-0.04em]">
                COMING SOON
              </h2>

              <p className="mx-auto mt-4 max-w-sm text-xs leading-6 text-zinc-600">
                Collection pieces will be added here once the collection
                details are available.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* BACK TO COLLECTIONS */}
      <section className="border-t border-white/10 px-5 py-12 sm:px-6 md:px-10">
        <div className="flex justify-between">
          <a
            href="/collections"
            className="text-[10px] tracking-[0.25em] transition-opacity hover:opacity-50"
          >
            ← ALL COLLECTIONS
          </a>

          <a
            href="/"
            className="text-[10px] tracking-[0.25em] transition-opacity hover:opacity-50"
          >
            HOME
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16">
        <div className="flex flex-col justify-between gap-3 text-[9px] tracking-[0.15em] text-zinc-600 sm:flex-row sm:text-[10px] sm:tracking-[0.2em]">
          <p>© 2023 BLUC FSHN</p>
          <p>MADE IN NAIROBI</p>
        </div>
      </footer>
    </main>
  );
}

