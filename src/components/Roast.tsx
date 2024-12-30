'use client'

import { useState } from 'react'

export function Roast() {
    const [showRoast, setShowRoast] = useState(false)

    const roasts = [
        "Kya ukhad liya 2024 mein? Bas Netflix aur chill?",
        "Iss saal ke resolutions bhi toot gaye, just like every year, huh?",
        "2024 mein kya kiya? Bas Instagram pe dusron ki life dekh ke jala?",
        "Abhi tak to bas excuses hi ukhaade hain, kuch real kab ukhadoge?",
        "2024 mein kya ukhaada? Bas weight? Wo bhi sirf badhaya, kam nahi kiya!",
    ]

    const motivations = [
        "2025 mein apne comfort zone se bahar niklo, varna 2026 mein bhi yahi sawaal puchna padega!",
        "Iss baar real goals set karo, na ki bas social media pe post karne ke liye!",
        "2025 mein kuch aisa ukhaado ki log tumse pooche, 'Kaise kar liya?'",
        "Naye saal mein naya version launch karo apna, update zaruri hai!",
        "2025 mein aise ukhaado ki duniya dekhti reh jaaye, aur tum bas muskurate raho!",
    ]

    return (
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h2 className="text-3xl font-semibold mb-4">The Roast & Motivation Corner</h2>
            {!showRoast ? (
                <button
                    onClick={() => setShowRoast(true)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                    Dare to see the roast?
                </button>
            ) : (
                <div>
                    <p className="text-xl mb-4">{roasts[Math.floor(Math.random() * roasts.length)]}</p>
                    <p className="text-xl font-bold mt-4">But seriously...</p>
                    <p className="text-xl mt-2">{motivations[Math.floor(Math.random() * motivations.length)]}</p>
                </div>
            )}
        </div>
    )
}

