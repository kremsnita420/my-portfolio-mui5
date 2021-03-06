import React, { useEffect, useState } from 'react'
import { Paper, Button } from '@mui/material'
import { Box } from '@mui/system'

const pokemons = [
	{
		id: 1,
		name: 'image1',
		image: '/images/memory-game/image-1.jpg',
	},
	{
		id: 2,
		name: 'image2',
		image: '/images/memory-game/image-2.jpg',
	},
	{
		id: 3,
		name: 'image3',
		image: '/images/memory-game/image-3.jpg',
	},
	{
		id: 4,
		name: 'image4',
		image: '/images/memory-game/image-4.jpg',
	},
	{
		id: 15,
		name: 'image15',
		image: '/images/memory-game/image-15.jpg',
	},
	{
		id: 16,
		name: 'image16',
		image: '/images/memory-game/image-16.jpg',
	},
]

export default function App() {
	const [openedCard, setOpenedCard] = useState([])
	const [matched, setMatched] = useState([])

	//currently there are 4 pokemons but we need the pair

	const pairOfPokemons = [...pokemons, ...pokemons]

	function flipCard(index) {
		setOpenedCard((opened) => [...opened, index])
	}
	useEffect(() => {
		if (openedCard < 2) return

		const firstMatched = pairOfPokemons[openedCard[0]]
		const secondMatched = pairOfPokemons[openedCard[1]]

		if (secondMatched && firstMatched.id === secondMatched.id) {
			setMatched([...matched, firstMatched.id])
		}

		if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000)
	}, [openedCard])

	return (
		<Paper>
			<div className='cards'>
				{pairOfPokemons.map((pokemon, index) => {
					let isFlipped = false

					if (openedCard.includes(index)) isFlipped = true
					if (matched.includes(pokemon.id)) isFlipped = true
					return (
						<div
							className={`pokemon-card ${isFlipped ? 'flipped' : ''} `}
							key={index}
							onClick={() => !isFlipped && flipCard(index)}>
							<div className='inner'>
								<div className='front'>
									<img
										src={pokemon.image}
										alt='pokemon-name'
										width='150'
										height='150'
									/>
								</div>
								<div className='back'>
									<img
										src='/images/memory-game/rick-morty-title2.jpg'
										alt='pokemon-name'
										width='150'
										height='150'
									/>
								</div>
							</div>
						</div>
					)
				})}
			</div>
			<Box
				sx={{
					width: '40%',
					margin: 'auto',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-around',
					marginBottom: '2rem',
				}}>
				<Button onClick={() => setOpenedCard([]) || setMatched([])}>
					Reset
				</Button>
				<Button
					onClick={() =>
						setOpenedCard([
							0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
						]) ||
						setMatched([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
					}>
					Show all
				</Button>
			</Box>
		</Paper>
	)
}
