import { useEffect, useRef } from 'react'
import classNames from 'classnames'

import styles from './index.module.css'

export default function Background({ className, ...rest }) {
    const canvasRef = useRef(null)

    // const draw = (canvas, ctx, frameCount) => {
    //     canvas.width = window.innerWidth
    //     canvas.height = window.innerHeight
    //
    //     var stars = [], // Array that contains the stars
    //         FPS = 60, // Frames per second
    //         x = 100, // Number of stars
    //         mouse = {
    //             x: 0,
    //             y: 0,
    //         } // mouse location
    //
    //     // Push stars to array
    //
    //     for (var i = 0; i < x; i++) {
    //         stars.push({
    //             x: Math.random() * canvas.width,
    //             y: Math.random() * canvas.height,
    //             radius: Math.random() * 1 + 1,
    //             vx: Math.floor(Math.random() * 50) - 25,
    //             vy: Math.floor(Math.random() * 50) - 25,
    //         })
    //     }
    //     function distance(point1, point2) {
    //         var xs = 0
    //         var ys = 0
    //
    //         xs = point2.x - point1.x
    //         xs = xs * xs
    //
    //         ys = point2.y - point1.y
    //         ys = ys * ys
    //
    //         return Math.sqrt(xs + ys)
    //     }
    //
    //     ctx.clearRect(0, 0, canvas.width, canvas.height)
    //
    //     ctx.globalCompositeOperation = 'lighter'
    //
    //     for (var i = 0, x = stars.length; i < x; i++) {
    //         var s = stars[i]
    //
    //         ctx.fillStyle = '#fff'
    //         ctx.beginPath()
    //         ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI)
    //         ctx.fill()
    //         ctx.fillStyle = 'black'
    //         ctx.stroke()
    //     }
    //
    //     ctx.beginPath()
    //     for (var i = 0, x = stars.length; i < x; i++) {
    //         var starI = stars[i]
    //         ctx.moveTo(starI.x, starI.y)
    //         if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y)
    //         for (var j = 0, x = stars.length; j < x; j++) {
    //             var starII = stars[j]
    //             if (distance(starI, starII) < 150) {
    //                 //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
    //                 ctx.lineTo(starII.x, starII.y)
    //             }
    //         }
    //     }
    //     ctx.lineWidth = 0.05
    //     ctx.strokeStyle = 'white'
    //     ctx.stroke()
    // }
    //
    // useEffect(() => {
    //     const canvas = canvasRef.current
    //     const context = canvas.getContext('2d')
    //
    //     let frameCount = 0
    //     let animationFrameId
    //
    //     //Our draw came here
    //     const render = () => {
    //         frameCount++
    //         draw(canvas, context, frameCount)
    //         animationFrameId = window.requestAnimationFrame(render)
    //     }
    //     render()
    //
    //     return () => {
    //         window.cancelAnimationFrame(animationFrameId)
    //     }
    // }, [draw])

    return (
        <canvas ref={canvasRef} className={classNames(className)} {...rest} />
    )
}