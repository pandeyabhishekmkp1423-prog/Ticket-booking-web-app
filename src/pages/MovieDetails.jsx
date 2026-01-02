import { useParams, Link } from "react-router-dom";
import { movies } from "../data/movies";

export default function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div className="p-8 text-gray-400">
        Movie not found
      </div>
    );
  }

  return (
    <div className="w-full">

      {/* ================= MOVIE HERO ================= */}
      <section className="w-full bg-black/40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">

          {/* Poster */}
          <img
            src={movie.poster}
            alt={movie.title}
            loading="lazy"
            onError={(e) =>
              (e.currentTarget.src =
                "https://via.placeholder.com/300x450?text=No+Image")
            }
            className="w-full md:w-64 h-96 object-cover rounded-2xl"
          />

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white">
              {movie.title}
            </h1>

            <p className="mt-2 text-gray-300">
              {movie.genre}
            </p>

            <div className="flex items-center gap-3 mt-3 text-sm text-gray-400">
              <span>{movie.language}</span>
              <span>•</span>
              <span>{movie.duration}</span>
              <span>•</span>
              <span className="text-yellow-400 font-medium">
                ⭐ {movie.rating}
              </span>
            </div>

            {/* CTA */}
            <Link
              to={`/seat/${movie.id}`}
              className="inline-block mt-6 bg-primary hover:bg-primary/90 transition px-6 py-3 rounded-xl text-white font-medium"
            >
              Book Tickets
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SHOW TIMINGS ================= */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Available Shows
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {["10:00 AM", "1:30 PM", "4:45 PM", "7:30 PM", "10:15 PM"].map(
            (time) => (
              <button
                key={time}
                className="border border-gray-700 rounded-lg py-3 text-sm text-gray-300
                           hover:border-primary hover:text-primary transition"
              >
                {time}
              </button>
            )
          )}
        </div>
      </section>

    </div>
  );
}
