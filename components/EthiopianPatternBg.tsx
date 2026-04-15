"use client";

import { motion } from "framer-motion";

export default function EthiopianPatternBg() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="w-full h-full"
        >
          <defs>
            {/* ── Pattern 1: Refined Habesha Tilfi Diamonds ── */}
            <pattern id="tilfi" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <motion.g
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <polygon points="40,5 75,40 40,75 5,40" fill="none" stroke="#ecbe8d" strokeWidth="1.5"/>
                <polygon points="40,20 60,40 40,60 20,40" fill="none" stroke="#ecbe8d" strokeWidth="0.8" opacity="0.6"/>
                <circle cx="40" cy="5"  r="2" fill="#ecbe8d"/>
                <circle cx="75" cy="40" r="2" fill="#ecbe8d"/>
                <circle cx="40" cy="75" r="2" fill="#ecbe8d"/>
                <circle cx="5"  cy="40" r="2" fill="#ecbe8d"/>
              </motion.g>
            </pattern>

            {/* ── Pattern 2: Mesob Basket Weave ── */}
            <pattern id="mesob" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <motion.g
                animate={{ 
                  rotate: [0, 3, 0] 
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <polygon points="30,5 55,18 55,42 30,55 5,42 5,18" fill="none" stroke="#ecbe8d" strokeWidth="1.2"/>
                <circle cx="30" cy="30" r="3" fill="#ecbe8d" opacity="0.8"/>
                <line x1="30" y1="5" x2="30" y2="15" stroke="#ecbe8d" strokeWidth="0.8"/>
                <line x1="30" y1="55" x2="30" y2="45" stroke="#ecbe8d" strokeWidth="0.8"/>
              </motion.g>
            </pattern>

            {/* ── Pattern 3: Ethiopian Cross Decorative Element ── */}
            <symbol id="ethiopian-cross" viewBox="0 0 100 100">
              <path 
                d="M50 5 L62 25 L85 30 L68 48 L75 72 L50 60 L25 72 L32 48 L15 30 L38 25 Z" 
                fill="none" 
                stroke="#ecbe8d" 
                strokeWidth="2.5"
              />
              <circle cx="50" cy="45" r="10" fill="none" stroke="#ecbe8d" strokeWidth="2"/>
              <path d="M50 15 V75 M25 45 H75" stroke="#ecbe8d" strokeWidth="1.5"/>
            </symbol>

            <radialGradient id="vignette" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="#131313" stopOpacity="0.95" />
            </radialGradient>
          </defs>

          {/* Background Layers */}
          <rect width="100%" height="100%" fill="url(#tilfi)" opacity="0.5" />
          
          <motion.rect 
            width="100%" 
            height="100%" 
            fill="url(#mesob)" 
            opacity="0.4"
            animate={{ x: [0, 15, 0], y: [0, 8, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          {/* Strategic Placement of Large Crosses */}
          <g opacity="0.25">
            <use href="#ethiopian-cross" x="8%" y="12%" width="140" height="140" />
            <use href="#ethiopian-cross" x="82%" y="8%" width="120" height="120" />
            <use href="#ethiopian-cross" x="78%" y="75%" width="180" height="180" />
            <use href="#ethiopian-cross" x="4%" y="80%" width="110" height="110" />
            <use href="#ethiopian-cross" x="45%" y="45%" width="200" height="200" opacity="0.1" />
          </g>

          {/* Vignette to focus content */}
          <rect width="100%" height="100%" fill="url(#vignette)" />
        </svg>
      </motion.div>
    </div>
  );
}
