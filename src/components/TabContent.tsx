
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const wishes = [
    "May this year bring you endless joy and success!",
    "Here’s to new beginnings and unforgettable memories.",
    "Wishing you a year full of love, laughter, and achievements.",
    "May your dreams soar higher and your goals be within reach.",
    "Let 2025 be the year you finally make it happen!"
]

const motivations = [
    "Believe in yourself – the best is yet to come.",
    "Don’t just wait for opportunities, create them.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Every step you take is a step closer to your goal."
]


const roasts = [
    "Another year, another binge-watch on Netflix instead of achieving your goals, huh? 🎬",
    "You’ve already spent more time scrolling through Reels than working on your resolutions. 📱",
    "2025 is here, but you’re still stuck in 2024... just scrolling through Instagram and pretending it’s progress. 🙄",
    "You said ‘new year, new me,’ but the only thing that changed is the Netflix series you're watching. 🍿",
    "Another year, another set of broken resolutions. But hey, at least your Instagram feed looks great! 📸"
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
                className="text-center p-6 max-w-xl mx-auto bg-gradient-to-r from-indigo-600
                via-purple-500 to-pink-500 rounded-lg shadow-xl"
            >
                {activeTab === 'wishes' && (
                    <div>
                        <p className="text-2xl text-white font-semibold mb-4">"{wishes[currentIndex]}"</p>
                        <p className="text-lg text-white italic">Wishing you an amazing 2025!</p>
                    </div>
                )}
                {activeTab === 'motivations' && (
                    <div>
                        <p className="text-2xl text-white font-semibold mb-4">"{motivations[currentIndex]}"</p>
                        <p className="text-lg text-white italic">Stay inspired and keep moving forward!</p>
                    </div>
                )}
                {activeTab === 'roasts' && (
                    <div>
                        <p className="text-2xl text-white mb-4">{roasts[currentIndex]}</p>
                        <p className="text-lg text-white font-bold mt-4">But seriously...</p>
                        <p className="text-xl text-white mt-2">
                            "2025, it’s time to put down the phone, stop scrolling, and actually get stuff done!"                        </p>
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    )
}

