import { useState, useEffect } from 'react'

const quotes = [
  "The best is yet to come.",
  "New year, new chapter, blank pages. Start writing!",
  "In the New Year, never forget to thank your past years because they enabled you to reach today!",
  "Cheers to a new year and another chance for us to get it right.",
  "May the New Year bring you courage to break your resolutions early!",
]

export function QuoteCarousel() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8">
      <h2 className="text-3xl font-semibold mb-4">Inspirational Quotes</h2>
      <p className="text-xl italic">"{quotes[currentQuote]}"</p>
    </div>
  )
}

