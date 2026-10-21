import { useEffect, useRef } from 'react'

/**
 * Animated PCB-style background: random orthogonal/diagonal traces
 * with glowing "signal" pulses travelling along them.
 */
const GRID = 44
const NEON = '57, 255, 20'
const DIRS = [
  [1, 0], [-1, 0], [0, 1], [0, -1],
  [1, 1], [-1, 1], [1, -1], [-1, -1],
]

function buildTrace(cols, rows) {
  let x = Math.floor(Math.random() * cols)
  let y = Math.floor(Math.random() * rows)
  const pts = [[x * GRID, y * GRID]]
  let dir = DIRS[Math.floor(Math.random() * 4)]
  const segs = 2 + Math.floor(Math.random() * 4)
  for (let i = 0; i < segs; i++) {
    const len = 1 + Math.floor(Math.random() * 4)
    x += dir[0] * len
    y += dir[1] * len
    pts.push([x * GRID, y * GRID])
    // turn 45° or 90° for PCB look
    const idx = DIRS.findIndex((d) => d[0] === dir[0] && d[1] === dir[1])
    const turn = Math.random() < 0.5 ? 4 : 2
    dir = DIRS[(idx + turn) % DIRS.length]
    if (dir[0] && dir[1] && Math.random() < 0.5) dir = DIRS[Math.floor(Math.random() * 4)]
  }
  // precompute segment lengths
  const lens = []
  let total = 0
  for (let i = 1; i < pts.length; i++) {
    const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1])
    lens.push(l)
    total += l
  }
  return {
    pts,
    lens,
    total,
    t: Math.random() * total,
    speed: 0.6 + Math.random() * 1.4,
    delay: Math.random() * 200,
  }
}

function pointAt(trace, dist) {
  let d = dist
  for (let i = 0; i < trace.lens.length; i++) {
    if (d <= trace.lens[i]) {
      const r = d / trace.lens[i]
      const [x1, y1] = trace.pts[i]
      const [x2, y2] = trace.pts[i + 1]
      return [x1 + (x2 - x1) * r, y1 + (y2 - y1) * r]
    }
    d -= trace.lens[i]
  }
  return trace.pts[trace.pts.length - 1]
}

export default function CircuitBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let traces = []
    let raf
    let w, h

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const cols = Math.ceil(w / GRID)
      const rows = Math.ceil(h / GRID)
      const count = Math.round((w * h) / 38000)
      traces = Array.from({ length: count }, () => buildTrace(cols, rows))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      for (const tr of traces) {
        // static trace
        ctx.strokeStyle = `rgba(${NEON}, 0.07)`
        ctx.lineWidth = 1.4
        ctx.beginPath()
        ctx.moveTo(tr.pts[0][0], tr.pts[0][1])
        for (let i = 1; i < tr.pts.length; i++) ctx.lineTo(tr.pts[i][0], tr.pts[i][1])
        ctx.stroke()

        // solder pads
        const [sx, sy] = tr.pts[0]
        const [ex, ey] = tr.pts[tr.pts.length - 1]
        ctx.fillStyle = `rgba(${NEON}, 0.16)`
        ctx.beginPath()
        ctx.arc(sx, sy, 2.6, 0, Math.PI * 2)
        ctx.arc(ex, ey, 2.6, 0, Math.PI * 2)
        ctx.fill()

        if (reduce) continue

        // pulse
        if (tr.delay > 0) {
          tr.delay -= 1
          continue
        }
        tr.t += tr.speed
        if (tr.t > tr.total + 60) {
          tr.t = 0
          tr.delay = 60 + Math.random() * 240
        }

        const tail = 60
        const head = Math.min(tr.t, tr.total)
        const start = Math.max(0, tr.t - tail)
        if (start < tr.total) {
          const steps = 10
          for (let s = 0; s < steps; s++) {
            const a = start + ((head - start) * s) / steps
            const b = start + ((head - start) * (s + 1)) / steps
            const [x1, y1] = pointAt(tr, a)
            const [x2, y2] = pointAt(tr, b)
            ctx.strokeStyle = `rgba(${NEON}, ${(s / steps) * 0.85})`
            ctx.lineWidth = 1.8
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.stroke()
          }
          if (tr.t <= tr.total) {
            const [hx, hy] = pointAt(tr, head)
            ctx.shadowColor = `rgba(${NEON}, 1)`
            ctx.shadowBlur = 12
            ctx.fillStyle = `rgba(${NEON}, 1)`
            ctx.beginPath()
            ctx.arc(hx, hy, 2.2, 0, Math.PI * 2)
            ctx.fill()
            ctx.shadowBlur = 0
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }

    setup()
    draw()
    let resizeTimer
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(setup, 150)
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <>
      <canvas ref={ref} className="circuit-canvas" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
    </>
  )
}
