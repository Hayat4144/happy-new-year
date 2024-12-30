'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { Button } from './ui/button'

export function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [permissionGranted, setPermissionGranted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null)

    async function checkAutoplayPermission() {
        if ('permissions' in navigator) {
            try {
                const result = await navigator.mediaDevices.getUserMedia({ audio: true });
                if (result.getAudioTracks()) {
                    setPermissionGranted(true)
                    setIsPlaying(true)
                }
            } catch (error) {
                console.warn('Permissions API not fully supported:', error)
            }
        }
    }


    useEffect(() => {
        if (!permissionGranted) checkAutoplayPermission()
    }, [])

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play()
            } else {
                audioRef.current.pause()
            }
        }
    }, [isPlaying])

    const togglePlay = () => {
        if (audioRef.current) {
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        }
    }
    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    return (
        <div className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-md
            rounded-full
            p-2 flex flex-col items-center justify-center space-y-2">
            <Button size="icon" onClick={togglePlay} className="bg-white/20 hover:bg-white/20 rounded-full">
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </Button>
            <Button size="icon" onClick={toggleMute} className="bg-white/20 hover:bg-white/20 rounded-full">
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </Button>
            <audio ref={audioRef} loop>
                <source src="/fireworks.mp3" type="audio/mpeg" />
            </audio>
        </div>
    )
}

