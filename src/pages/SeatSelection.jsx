import { useState } from "react";
import { useParams } from "react-router-dom";
import { seatRows, bookedSeats } from "../data/seats";

export default function SeatSelection() {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seatId) => {
    if (bookedSeats.includes(seatId)) return;

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  const totalPrice = selectedSeats.reduce((total, seat) => {
    const row = seat[0];
    const seatRow = seatRows.find((r) => r.row === row);
    return total + (seatRow?.price || 0);
  }, 0);

  return (
    <div className="w-full min-h-screen bg-dark text-white">
      
      {/* HEADER */}
      <div className="border-b border-gray-800 px-6 py-4">
        <h1 className="text-xl font-semibold">
          Select Seats
        </h1>
        <p className="text-sm text-gray-400">
          Movie ID: {id}
        </p>
      </div>

      {/* SCREEN */}
      <div className="flex justify-center mt-8">
        <div className="w-3/4 h-2 bg-gray-600 rounded-full text-center text-xs text-gray-300">
          SCREEN THIS WAY
        </div>
      </div>

      {/* SEATS */}
      <div className="mt-10 flex flex-col items-center gap-4">
        {seatRows.map((row) => (
          <div key={row.row} className="flex items-center gap-3">
            
            {/* Row Label */}
            <span className="w-5 text-gray-400 text-sm">
              {row.row}
            </span>

            {/* Seats */}
            <div className="flex gap-2">
              {Array.from({ length: 12 }).map((_, i) => {
                const seatId = `${row.row}${i + 1}`;
                const isBooked = bookedSeats.includes(seatId);
                const isSelected = selectedSeats.includes(seatId);

                return (
                  <button
                    key={seatId}
                    onClick={() => toggleSeat(seatId)}
                    className={`w-7 h-7 rounded text-xs font-medium
                      ${
                        isBooked
                          ? "bg-gray-700 cursor-not-allowed"
                          : isSelected
                          ? "bg-primary text-white"
                          : "border border-gray-600 hover:border-primary"
                      }
                    `}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>

            {/* Price */}
            <span className="ml-4 text-xs text-gray-500">
              ₹{row.price}
            </span>
          </div>
        ))}
      </div>

      {/* SUMMARY BAR */}
      {selectedSeats.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-gray-800 px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">
              Selected Seats
            </p>
            <p className="font-medium">
              {selectedSeats.join(", ")}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-lg font-semibold">
              ₹{totalPrice}
            </p>
            <button className="bg-primary px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition">
              Proceed
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
