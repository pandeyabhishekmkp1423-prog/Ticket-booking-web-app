import { ShowixLogo } from "../logo/ShowixLogo";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black/60">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <ShowixLogo size="small" />
          <p className="mt-4 text-sm text-gray-400 max-w-xs">
            Showix is your destination for movies, events, sports and live
            entertainment experiences.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Movies</li>
            <li>Events</li>
            <li>Sports</li>
            <li>Offers</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Terms</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Help Center</li>
            <li>Cancellation</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Showix. All rights reserved.
      </div>
    </footer>
  );
}
