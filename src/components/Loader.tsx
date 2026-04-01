import { motion } from "framer-motion"

export default function Loader() {
  return (
    <div className="flex justify-center items-center p-10">

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="w-10 h-10 border-4 border-black border-t-transparent rounded-full"
      />

    </div>
  )
}