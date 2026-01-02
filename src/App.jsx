import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <Navbar />

      <main className="bg-[var(--bg)]">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}
