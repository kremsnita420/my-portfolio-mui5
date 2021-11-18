import Particles from 'react-tsparticles'

export default function ParticlesContainer({ particlesInit, particlesLoaded }) {
	const options = {
		background: {
			color: {
				value: 'transparent',
			},
		},
		fpsLimit: 60,

		particles: {
			collisions: {
				enable: false,
			},
			move: {
				direction: 'none',
				enable: true,
				outMode: 'bounce',
				random: false,
				speed: 0.3,
				straight: false,
			},
			number: {
				density: {
					enable: true,
					value_area: 600,
				},
				value: 40,
			},
			opacity: {
				value: 0.5,
			},
			shape: {
				type: 'images',
				options: {
					images: [
						{
							src: 'https://particles.js.org/images/amongus_blue.png',
							width: 205,
							height: 267,
						},
						{
							src: 'https://particles.js.org/images/amongus_cyan.png',
							width: 207,
							height: 265,
						},
						{
							src: 'https://particles.js.org/images/amongus_green.png',
							width: 204,
							height: 266,
						},
						{
							src: 'https://particles.js.org/images/amongus_lime.png',
							width: 206,
							height: 267,
						},
						{
							src: 'https://particles.js.org/images/amongus_orange.png',
							width: 205,
							height: 265,
						},
						{
							src: 'https://particles.js.org/images/amongus_pink.png',
							width: 205,
							height: 265,
						},
						{
							src: 'https://particles.js.org/images/amongus_red.png',
							width: 204,
							height: 267,
						},
						{
							src: 'https://particles.js.org/images/amongus_white.png',
							width: 205,
							height: 267,
						},
					],
				},
			},
			size: {
				random: true,
				value: 50,
			},
		},
		detectRetina: true,
	}

	return (
		<Particles
			id='tsparticles'
			init={particlesInit}
			loaded={particlesLoaded}
			options={options}
		/>
	)
}
