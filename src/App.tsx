import { useState } from 'react'
import { Fireworks } from './components/Fireworks'
import { AudioPlayer } from './components/AudioPlayer'
import { TabContent } from './components/TabContent'
import { ConfettiButton } from './components/ConfettiButton'
import { motion } from 'framer-motion'
import { Button } from './components/ui/button'

export default function HomePage() {
    const [activeTab, setActiveTab] = useState('wishes')

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white overflow-hidden">
            <Fireworks />
            <AudioPlayer />
            <main className="container mx-auto px-4 py-8 relative z-10">
                <h1 className="text-6xl font-bold text-center mb-5 animate-pulse">
                    Welcome to 2025!
                </h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-3"
                >
                    <div>
                        <h3 className="text-xl font-semibold mb-2">In English, we say:</h3>
                        <p className="text-lg italic">
                            "The new year is a blank page; write your story with courage and grace."
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">But in Urdu, Ghalib said:</h3>
                        <p className="text-lg" lang="ur" dir="rtl">
                            "عمر بھر غالب یہی بھول کرتا رہا،
                            <br />
                            دھول چہرے پہ تھی، اور آئینہ صاف کرتا رہا۔"
                        </p>
                        <p className="text-sm mt-2 italic">
                            (Umr bhar Ghalib yehi bhool karta raha,
                            <br />
                            Dhool chehre pe thi, aur aaina saaf karta raha.)
                        </p>
                    </div>
                </motion.div>


                <div className="my-5">
                    <div className="flex justify-center mb-4">
                        {['wishes', 'motivations', 'roasts'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 mx-2 rounded-full transition-colors ${activeTab === tab
                                    ? 'bg-white text-purple-900'
                                    : 'bg-purple-900/50 hover:bg-purple-900'
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    <TabContent activeTab={activeTab} />
                    <p className="flex justify-center my-2 text-center">Hope this gives you a good laugh and some motivation! Happy New Year! 😊</p>
                </div>

                <ConfettiButton />
                <div className="flex justify-center">
                    <Button asChild variant="link" className="underline">
                        <a href="https://www.linkedin.com/in/hayat-ilyas/" target="_blank" rel="noopener noreferrer">
                            Crafted with care by Hayat Ilyas ✨
                        </a>
                    </Button>
                </div>
            </main>
        </div>
    )
}


