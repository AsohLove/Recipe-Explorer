import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <footer className="bg-gray-200 p-4 text-center">
        &copy; 2026 Recipe Exporer
      </footer>
    </div>
  );
}
