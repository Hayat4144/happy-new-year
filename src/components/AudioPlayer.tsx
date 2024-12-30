'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

export function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play()
            } else {
                audioRef.current.pause()
            }
        }
    }, [isPlaying])

    const togglePlay = () => setIsPlaying(!isPlaying)
    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    return (
        <div className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2 flex items-center space-x-2">
            <button onClick={togglePlay} className="p-2 hover:bg-white/20 rounded-full">
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button onClick={toggleMute} className="p-2 hover:bg-white/20 rounded-full">
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
            <audio ref={audioRef} loop>
                <source src="/fireworks.mp3" type="audio/mpeg" />
            </audio>
        </div>
    )
}

