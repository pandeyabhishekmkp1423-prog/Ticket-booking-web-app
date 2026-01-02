import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { banners } from "../../data/banners";
import { movies } from "../../data/movies";

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const banner = banners[index];
  const movie = movies[index % movies.length];

  return (
    <section className="relative w-full h-[95vh] overflow-hidden">

      {/* BACKGROUND */}
      <img
        src={banner.image}
        alt="Cinematic banner"
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <span className="uppercase tracking-widest text-sm text-gray-400">
            Featured Today
          </span>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold text-white max-w-2xl">
            {movie.title}
          </h1>

          <p className="mt-4 text-gray-300 max-w-xl">
            {movie.genre} • {movie.language} • ⭐ {movie.rating}
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to={`/movie/${movie.id}`}
              className="bg-primary px-8 py-3 rounded-xl text-white font-medium hover:bg-primary/90 transition"
            >
              Book Tickets
            </Link>

            <button className="border border-white/30 px-8 py-3 rounded-xl text-white hover:border-white transition">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {banners.map((_, i) => (
          <span
            key={i}
            className={`h-2.5 w-2.5 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
