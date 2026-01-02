export default function Dashboard() {
  const upcomingBookings = [1, 2];
  const pastBookings = [1];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          My Dashboard
        </h1>
        <p className="text-gray-400 mt-1">
          Manage your bookings and tickets
        </p>
      </div>

      {/* Upcoming Bookings */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Upcoming Bookings
        </h2>

        {upcomingBookings.length === 0 ? (
          <EmptyState text="No upcoming bookings" />
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingBookings.map((_, index) => (
              <BookingCard key={index} status="upcoming" />
            ))}
          </div>
        )}
      </section>

      {/* Past Bookings */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Past Bookings
        </h2>

        {pastBookings.length === 0 ? (
          <EmptyState text="No past bookings" />
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {pastBookings.map((_, index) => (
              <BookingCard key={index} status="past" />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function BookingCard({ status }) {
  return (
    <div className="bg-surface border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/40 transition">
      <div className="flex">
        
        {/* Poster Placeholder */}
        <div className="w-28 bg-gray-700 animate-pulse" />

        {/* Info */}
        <div className="p-4 flex-1">
          <h3 className="font-semibold text-white">
            Movie Title
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Fri, 12 Jan • 7:30 PM
          </p>

          <p className="text-sm text-gray-400">
            PVR Cinemas • Screen 3
          </p>

          <p className="text-sm text-gray-400 mt-1">
            Seats: A1, A2
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span
              className={`text-xs px-3 py-1 rounded-full ${
                status === "upcoming"
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
      </div>
    </div>
  );
}

function EmptyState({ text }) {
  return (
    <div className="bg-surface border border-gray-800 rounded-2xl p-8 text-center text-gray-400">
      {text}
    </div>
  );
}
