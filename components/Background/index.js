import { useEffect, useRef } from 'react'
import classNames from 'classnames'

import styles from './index.module.css'

export default function Background({ className, ...rest }) {
    const canvasRef = useRef(null)

    let stars = []
    let FPS = 60

    const distance = (point1, point2) => {
        let xs = 0
        let ys = 0

        xs = point2.x - point1.x
        xs = xs * xs

        ys = point2.y - point1.y
        ys = ys * ys

        return Math.sqrt(xs + ys)
    }

    const draw = (ctx) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        ctx.globalCompositeOperation = 'lighter'

        for (let i = 0, x = stars.length; i < x; i++) {
            let s = stars[i]

            ctx.fillStyle = '#fff'
            ctx.beginPath()
            ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI)
            ctx.fill()
            ctx.fillStyle = 'black'
            ctx.stroke()
        }

        ctx.beginPath()
        for (let i = 0, x = stars.length; i < x; i++) {
            let starI = stars[i]
            ctx.moveTo(starI.x, starI.y)

            for (let j = 0, y = stars.length; j < y; j++) {
                let starII = stars[j]
                if (distance(starI, starII) < 150) {
                    ctx.lineTo(starII.x, starII.y)
                }
            }
        }
        ctx.lineWidth = 0.05
        ctx.strokeStyle = 'white'
        ctx.stroke()

        for (let i = 0, x = stars.length; i < x; i++) {
            let s = stars[i]

            s.x += s.vx / FPS
            s.y += s.vy / FPS

            if (s.x < 0 || s.x > ctx.canvas.width) s.vx = -s.vx
            if (s.y < 0 || s.y > ctx.canvas.height) s.vy = -s.vy
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        let animationFrameId

        if (stars.length === 0) {
            for (let i = 0; i < 100; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() + 1,
                    vx: Math.floor(Math.random() * 50) - 25,
                    vy: Math.floor(Math.random() * 50) - 25,
                })
            }
        }

        const render = () => {
            draw(context)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return (
        <canvas
            ref={canvasRef}
            className={classNames(className, styles.canvas)}
            {...rest}
        />
    )
}
