import { useEffect, useRef } from 'react'

export function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    function createFirework() {
      const x = Math.random() * canvas.width
      const y = canvas.height
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`
      const radius = Math.random() * 2 + 1
      const velocity = Math.random() * 3 + 3
      const angle = Math.random() * Math.PI
      const particles: any[] = []

      for (let i = 0; i < 50; i++) {
        particles.push({
          x: 0,
          y: 0,
          radius: Math.random() * 2 + 1,
          color: color,
          velocity: Math.random() * 5 + 1,
          angle: Math.random() * Math.PI * 2,
          decay: 0.96,
          opacity: 1
        })
      }

      return { x, y, color, radius, velocity, angle, particles, exploded: false }
    }

    const fireworks: any[] = []

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (Math.random() < 0.05) {
        fireworks.push(createFirework())
      }

      fireworks.forEach((firework, index) => {
        if (!firework.exploded) {
          firework.x += Math.cos(firework.angle) * firework.velocity
          firework.y -= Math.sin(firework.angle) * firework.velocity

          ctx.beginPath()
          ctx.arc(firework.x, firework.y, firework.radius, 0, Math.PI * 2)
          ctx.fillStyle = firework.color
          ctx.fill()

          if (firework.y <= canvas.height / 2) {
            firework.exploded = true
          }
        } else {
          firework.particles.forEach((particle: any, particleIndex: number) => {
            particle.x += Math.cos(particle.angle) * particle.velocity
            particle.y += Math.sin(particle.angle) * particle.velocity
            particle.velocity *= particle.decay
            particle.opacity *= particle.decay

            ctx.beginPath()
            ctx.arc(firework.x + particle.x, firework.y + particle.y, particle.radius, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(${parseInt(firework.color.slice(1, 3), 16)}, ${parseInt(firework.color.slice(3, 5), 16)}, ${parseInt(firework.color.slice(5, 7), 16)}, ${particle.opacity})`
            ctx.fill()

            if (particle.opacity < 0.01) {
              firework.particles.splice(particleIndex, 1)
            }
          })

          if (firework.particles.length === 0) {
            fireworks.splice(index, 1)
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      // Cleanup if needed
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />
}

