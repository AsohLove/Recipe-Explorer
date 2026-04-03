import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion"
import { useState } from "react";
import { useLocation } from "react-router-dom";



export default function DashboardLayout() {

  const location = useLocation();

   const [search, setSearch] = useState<string>("");
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <Navbar search={search} setSearch={setSearch} />

     <motion.main
        key={location.pathname}
        className="flex-1 p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Outlet context={{ search }} />
      </motion.main>
      <footer className="bg-gray-200 p-4 text-center">
        &copy; 2026 Recipe Explorer
      </footer>
    </div>
  );
}
