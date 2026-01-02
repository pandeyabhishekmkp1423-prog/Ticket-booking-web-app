import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { ShowixLogo } from "../logo/ShowixLogo";
import { useTheme } from "../../hooks/useTheme";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LEFT */}
        <Link to="/">
          <ShowixLogo size="medium" />
        </Link>

        {/* RIGHT */}
        <div className="flex items-center gap-3 relative">

          {/* AUTH BUTTONS */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 text-sm border rounded-lg">
                Login
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="px-5 py-2 text-sm rounded-lg bg-primary text-white">
                Register
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          {/* HAMBURGER (FOR EVERYONE) */}
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-lg hover:bg-[var(--surface)] text-xl"
          >
            ☰
          </button>

          {/* MENU */}
          {open && (
            <div className="absolute right-0 top-16 w-64 bg-[var(--surface)] border border-[var(--border)] rounded-xl shadow-xl overflow-hidden">

              <MenuItem label="Trending" />
              <MenuItem label="Genres" />
              <MenuItem label="Movies" />
              <MenuItem label="Events" />
              <MenuItem label="Sports" />

              <div className="border-t border-[var(--border)]" />

              <MenuItem label="Settings" />
              <MenuItem label="FAQ" />

              <button
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                className="w-full text-left px-4 py-3 text-sm hover:bg-[var(--bg)]"
              >
                {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
              </button>

              <SignedIn>
                <div className="border-t border-[var(--border)] px-4 py-3">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function MenuItem({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-3 text-sm hover:bg-[var(--bg)]"
    >
      {label}
    </button>
  );
}
