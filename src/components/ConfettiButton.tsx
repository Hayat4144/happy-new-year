'use client'

import { useState } from 'react'
import confetti from 'canvas-confetti'

export function ConfettiButton() {
    const [isExploding, setIsExploding] = useState(false)

    const handleClick = () => {
        setIsExploding(true)
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        })
        setTimeout(() => setIsExploding(false), 1000)
    }

    return (
        <button
            onClick={handleClick}
            className={`fixed bottom-4 left-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full transition-transform ${isExploding ? 'scale-110' : 'scale-100'
                }`}
        >
            Celebrate!
        </button>
    )
}

