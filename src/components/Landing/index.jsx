/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Image from 'next/image';
import styles from './style.module.scss';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	let xPercent = 0;
	let direction = -1;

    // const [time, setTime] = useState("");

	// useEffect(() => {
	// 	const updateTime = () => {
	// 		const indiaTime = new Date().toLocaleTimeString('en-IN', {
	// 			timeZone: 'Asia/Kolkata',
	// 			hour12: true,
	// 			hour: '2-digit',
	// 			minute: '2-digit',
	// 			second: '2-digit',
	// 		});
	// 		setTime(indiaTime);
	// 	};
	// 	updateTime();
	// 	const intervalId = setInterval(updateTime, 1000);
	// 	return () => clearInterval(intervalId);
	// }, []);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (slider.current && firstText.current && secondText.current) {
			gsap.to(slider.current, {
				scrollTrigger: {
					trigger: document.documentElement,
					scrub: 0.5,
					start: 0,
					end: window.innerHeight,
					onUpdate: (e) => (direction = e.direction * -1),
				},
				x: '-500px',
			});

			requestAnimationFrame(animate);
		}
	}, []);

	const animate = () => {
		if (xPercent < -100) {
			xPercent = 0;
		} else if (xPercent > 0) {
			xPercent = -100;
		}
		gsap.set(firstText.current, { xPercent: xPercent });
		gsap.set(secondText.current, { xPercent: xPercent });
		xPercent += 0.03 * direction;
		requestAnimationFrame(animate);
	};

	return (
		<motion.main 
			variants={slideUp}
			initial="initial"
			animate="enter"
			className={styles.landing}
			id="home"
		>
			<Image
				src="/images/116.jpeg"
				fill={true}
				alt="background"
				priority={true}
			/>
			<div className={styles.sliderContainer}>
				<div ref={slider} className={styles.slider}>
					<div>
						{/* <p ref={firstText}>Subodh_</p>
						<p ref={secondText}>Meshram</p> */}
					</div>
				</div>
			</div>
			<div
				data-scroll
				data-scroll-speed={0.1}
				className={styles.description}
			>
				<svg
					width="9"
					height="9"
					viewBox="0 0 9 9"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient
							id="grad1"
							x1="0%"
							x2="100%"
							y1="0%"
							y2="0%"
						>
							<stop offset="0%" stopColor="#dafff8" />
							<stop offset="100%" stopColor="#c1ff5d" />
						</linearGradient>
					</defs>
					<path
						d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
						fill="url(#grad1)"
					/>
				</svg>
				{/* <p>Freelance</p> */}
				<p>Fullstack Web Developer</p>
                {/* <p>India: {time}</p> */}
			</div>
		</motion.main>
	);
}
