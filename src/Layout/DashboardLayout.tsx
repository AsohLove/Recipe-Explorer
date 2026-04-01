import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion"


export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <Navbar />

     <motion.main
        key={location.pathname}
        className="flex-1 p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Outlet />
      </motion.main>
      <footer className="bg-gray-200 p-4 text-center">
        &copy; 2026 Recipe Exporer
      </footer>
    </div>
  );
}
