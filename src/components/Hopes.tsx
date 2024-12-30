export function Hopes() {
  const hopes = [
    "May 2025 bring you endless opportunities and success.",
    "Here's to health, happiness, and prosperity in the coming year.",
    "May your dreams take flight and your aspirations become reality.",
    "Wishing you 366 days of laughter, love, and unforgettable moments.",
    "May 2025 be the year you conquer your fears and achieve greatness.",
  ]

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8">
      <h2 className="text-3xl font-semibold mb-4">Hopes for 2025</h2>
      <ul className="list-disc list-inside space-y-2">
        {hopes.map((hope, index) => (
          <li key={index} className="text-lg">{hope}</li>
        ))}
      </ul>
    </div>
  )
}

