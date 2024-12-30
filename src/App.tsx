import { useState } from 'react'
import { Fireworks } from './components/Fireworks'
import { AudioPlayer } from './components/AudioPlayer'
import { TabContent } from './components/TabContent'
import { ConfettiButton } from './components/ConfettiButton'

export default function HomePage() {
    const [activeTab, setActiveTab] = useState('quotes')

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white overflow-hidden">
            <Fireworks />
            <AudioPlayer />
            <main className="container mx-auto px-4 py-8 relative z-10">
                <h1 className="text-6xl font-bold text-center mb-8 animate-pulse">
                    Welcome to 2025!
                </h1>

                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8">
                    <div className="flex justify-center mb-4">
                        {['quotes', 'hopes', 'roast'].map((tab) => (
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
                </div>

                <ConfettiButton />
            </main>
        </div>
    )
}


