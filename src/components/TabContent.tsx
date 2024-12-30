import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const quotes = [
  "The best is yet to come.",
  "New year, new chapter, blank pages. Start writing!",
  "In the New Year, never forget to thank your past years because they enabled you to reach today!",
  "Cheers to a new year and another chance for us to get it right.",
  "May the New Year bring you courage to break your resolutions early!",
]

const hopes = [
  "May 2025 bring you endless opportunities and success.",
  "Here's to health, happiness, and prosperity in the coming year.",
  "May your dreams take flight and your aspirations become reality.",
  "Wishing you 366 days of laughter, love, and unforgettable moments.",
  "May 2025 be the year you conquer your fears and achieve greatness.",
]

const roasts = [
  "Kya ukhad liya 2024 mein? Bas Netflix aur chill?",
  "Iss saal ke resolutions bhi toot gaye, just like every year, huh?",
  "2024 mein kya kiya? Bas Instagram pe dusron ki life dekh ke jala?",
  "Abhi tak to bas excuses hi ukhaade hain, kuch real kab ukhadoge?",
  "2024 mein kya ukhaada? Bas weight? Wo bhi sirf badhaya, kam nahi kiya!",
]

export function TabContent({ activeTab }: { activeTab: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 5)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        {activeTab === 'quotes' && (
          <p className="text-2xl italic">"{quotes[currentIndex]}"</p>
        )}
        {activeTab === 'hopes' && (
          <p className="text-2xl">{hopes[currentIndex]}</p>
        )}
        {activeTab === 'roast' && (
          <>
            <p className="text-2xl mb-4">{roasts[currentIndex]}</p>
            <p className="text-xl font-bold mt-4">But seriously...</p>
            <p className="text-xl mt-2">
              2025 mein kuch aisa ukhaado ki log tumse pooche, 'Kaise kar liya?'
            </p>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

