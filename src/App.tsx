/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4">
          Hello <span className="text-emerald-500">World</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl font-light tracking-wide">
          Welcome to your new Google AI Studio application.
        </p>
      </motion.div>
    </div>
  );
}
