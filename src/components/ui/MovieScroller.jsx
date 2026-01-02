import { Link } from "react-router-dom";

export default function MovieScroller({ title, movies }) {
  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-white mb-4">
          {title}
        </h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="group min-w-[170px] bg-surface rounded-2xl border border-gray-800
                         transition-all duration-300 hover:-translate-y-2
                         hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="h-60 w-full object-cover rounded-t-2xl"
              />

              <div className="p-3">
                <h3 className="text-sm font-semibold text-white truncate">
                  {movie.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  ⭐ {movie.rating}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
