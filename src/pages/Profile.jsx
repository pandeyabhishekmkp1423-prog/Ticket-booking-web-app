import { useUser } from "@clerk/clerk-react";

export default function Profile() {
  const { user, isLoaded } = useUser();

  // Prevent render until Clerk is ready
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center text-gray-400">
        Loading profile...
      </div>
    );
  }

  // Extra safety (should never happen because route is protected)
  if (!user) {
    return null;
  }

  const upcomingBookings = [
    {
      id: 1,
      movie: "Dunkirk",
      time: "Fri, 12 Jan • 7:30 PM",
      venue: "PVR Cinemas, Screen 3",
      seats: "A1, A2",
    },
  ];

  const pastBookings = [
    {
      id: 2,
      movie: "Jawaan",
      time: "Sun, 5 Jan • 9:00 PM",
      venue: "INOX Mall",
      seats: "C4, C5",
    },
  ];

  return (
    <div className="min-h-screen bg-dark">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* USER HEADER */}
        <div className="flex items-center gap-6 mb-16">
          <img
            src={user.imageUrl}
            alt="User avatar"
            className="w-16 h-16 rounded-full border border-gray-700"
          />

          <div>
            <h1 className="text-3xl font-bold text-white">
              {user.fullName || "My Profile"}
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              {user.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </div>

        {/* UPCOMING BOOKINGS */}
        <Section title="Upcoming Bookings">
          {upcomingBookings.length ? (
            upcomingBookings.map((booking) => (
              <BookingCard
                key={booking.id}
                data={booking}
                status="upcoming"
              />
            ))
          ) : (
            <EmptyState text="No upcoming bookings" />
          )}
        </Section>

        {/* PAST BOOKINGS */}
        <Section title="Past Bookings">
          {pastBookings.length ? (
            pastBookings.map((booking) => (
              <BookingCard
                key={booking.id}
                data={booking}
                status="past"
              />
            ))
          ) : (
            <EmptyState text="No past bookings" />
          )}
        </Section>

      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Section({ title, children }) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold text-white mb-6">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

function BookingCard({ data, status }) {
  return (
    <div className="flex items-center justify-between bg-surface border border-gray-800 rounded-2xl p-6 hover:border-primary/40 transition">
      <div>
        <h3 className="text-lg font-semibold text-white">
          {data.movie}
        </h3>

        <p className="text-sm text-gray-400 mt-1">
          {data.time}
        </p>

        <p className="text-sm text-gray-400">
          {data.venue}
        </p>

        <p className="text-sm text-gray-400 mt-1">
          Seats: {data.seats}
        </p>
      </div>

      <div className="flex flex-col items-end gap-4">
        <span
          className={`text-xs px-4 py-1 rounded-full ${status === "upcoming"
              ? "bg-primary/20 text-primary"
              : "bg-gray-700 text-gray-300"
            }`}
        >
          {status === "upcoming" ? "Upcoming" : "Completed"}
        </span>

        <button className="text-sm text-accent hover:underline">
          View Ticket
        </button>
      </div>
    </div>
  );
}

function EmptyState({ text }) {
  return (
    <div className="bg-surface border border-gray-800 rounded-2xl p-10 text-center text-gray-400">
      {text}
    </div>
  );
}
