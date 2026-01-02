import { Link } from "react-router-dom";
import { movies } from "../data/movies";
import { banners } from "../data/banners";
import { useEffect, useState } from "react";

const cities = ["Lucknow", "Delhi", "Mumbai", "Bangalore"];
const categories = ["All", "Movies", "Events", "Sports"];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [city, setCity] = useState("Lucknow");
  const [category, setCategory] = useState("All");

  const featuredMovie = movies[index % movies.length];
  const heroBanner = banners[index % banners.length];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroLoaded(false);
      setIndex((prev) => (prev + 1) % banners.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  /* ================= FILTER LOGIC ================= */
  const showMovies = category === "All" || category === "Movies";
  const showEvents = category === "All" || category === "Events";
  const showSports = category === "All" || category === "Sports";

  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= STICKY TOP CONTROLS ================= */}
      <section className="sticky top-0 z-40 w-full border-b border-gray-800 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h1 className="text-2xl font-bold text-white">
              Discover in {city}
            </h1>
            <p className="text-xs text-gray-400">
              Movies • Events • Sports
            </p>
          </div>

          <div className="flex gap-3 flex-wrap items-center">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-dark border border-gray-700 px-4 py-2 rounded-lg text-sm"
            >
              {cities.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${category === cat
                  ? "bg-primary text-white shadow-md scale-105"
                  : "border border-gray-700 text-gray-300 hover:border-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[42vh] md:h-[50vh] overflow-hidden">

        {!heroLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black animate-pulse" />
        )}

        <img
          src={heroBanner.image}
          alt="Featured"
          onLoad={() => setHeroLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1600ms]
          ${heroLoaded ? "opacity-100 scale-105" : "opacity-0 scale-110"}`}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-12">
            <span className="text-xs uppercase tracking-widest text-gray-400">
              Featured Today
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white max-w-xl">
              {featuredMovie.title}
            </h2>

            <p className="mt-2 text-sm text-gray-300">
              {featuredMovie.genre} • ⭐ {featuredMovie.rating}
            </p>

            <Link
              to={`/movie/${featuredMovie.id}`}
              className="inline-block mt-4 bg-white text-black px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              ▶ Book Tickets
            </Link>
          </div>
        </div>
      </section>

      {/* ================= MOVIES ================= */}
      {showMovies && (
        <Section title="Trending Movies" subtitle="Most booked right now">
          <HorizontalRow items={movies.slice(0, 10)} />
        </Section>
      )}

      {/* ================= EVENTS ================= */}
      {showEvents && (
        <Section title="Live Events" subtitle="Concerts & stage shows">
          <ImageCards
            items={[
              {
                title: "Arijit Singh Live",
                tag: "Music",
                image: "https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1739172212.jpg",
              },
              {
                title: "Stand-up Comedy Night",
                tag: "Comedy",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQknwPco9HIxFeMJZflxLjKeuDAa1IWq1Rt9A&s",
              },
              {
                title: "New year Party",
                tag: "party",
                image: "https://media.istockphoto.com/id/2247131126/photo/happy-new-year-2026-celebration-with-family-holding-golden-balloons.webp?a=1&b=1&s=612x612&w=0&k=20&c=YDETbPx13QLlE4I44vMtHbpHsr13JQXwW_WXgaNZbtw=",
              },
              {
                title: "Theatre Play",
                tag: "Theatre",
                image: "https://i0.wp.com/www.thewrap.com/wp-content/uploads/2017/04/wrong.jpg?resize=618%2C412&quality=89&ssl=1",
              },
            ]}
          />
        </Section>
      )}

      {/* ================= SPORTS ================= */}
      {showSports && (
        <Section title="Sports" subtitle="Live sports action">
          <ImageCards
            items={[
              
               {
                title: "T20 World Cup",
                tag: "Cricket",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUjkgOU4q53Gn0XBJ-eelBiUdlCfvHfajMVA&s",
              },
              {
                title: "IPL Match",
                tag: "Cricket",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5cxNx6RhaFiGSdqHOK8zFFVexSxJYkLwPQ&s",
              },
              {
                title: "Pro Kabaddi League",
                tag: "Kabaddi",
                image: "https://www.prokabaddi.com/static-assets/waf-images/05/ac/81/16-9/72zONHwRQk.png?v=2.39&w=600",
              },
              {
                title: "Football",
                tag: "Football",
                image: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/rgzymghj9bxfyibw2gl3",
              },
              {
                title: "Hockey",
                tag: "Hockey",
                image: "https://www.thestatesman.com/wp-content/uploads/2023/05/Pic-from-India-vs-Australia-match.jpg",
              },
            ]}
          />
        </Section>
      )}
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function Section({ title, subtitle, children }) {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">
            {title}
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            {subtitle}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}

function HorizontalRow({ items }) {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
      {items.map((movie) => (
        <Link
          key={movie.id}
          to={`/movie/${movie.id}`}
          className="shrink-0 w-44 transition-transform hover:scale-105"
        >
          <div className="h-64 rounded-xl overflow-hidden bg-gray-800">
            <img
              src={movie.poster}
              alt={movie.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="mt-3 text-sm font-medium text-white truncate">
            {movie.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}

function ImageCards({ items }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div
          key={i}
          className="relative h-56 rounded-2xl overflow-hidden group"
        >
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 h-full p-6 flex flex-col justify-end">
            <span className="text-xs uppercase tracking-widest text-gray-400">
              {item.tag}
            </span>
            <h3 className="text-lg font-semibold text-white mt-1">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
