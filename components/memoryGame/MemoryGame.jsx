import React, { useEffect, useState } from 'react'

const pokemons = [
	{
		id: 1,
		name: 'image1',
		image: '/images/memory-game/image-1.JPG',
	},
	{
		id: 2,
		name: 'image2',
		image: '/images/memory-game/image-2.JPG',
	},
	{
		id: 3,
		name: 'image3',
		image: '/images/memory-game/image-3.JPG',
	},
	{
		id: 4,
		name: 'image4',
		image: '/images/memory-game/image-4.JPG',
	},
	{
		id: 15,
		name: 'image15',
		image: '/images/memory-game/image-15.JPG',
	},
	{
		id: 16,
		name: 'image16',
		image: '/images/memory-game/image-16.JPG',
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
	}, [matched, openedCard, pairOfPokemons])

	return (
		<div className='App'>
			<div className='cards'>
				{pairOfPokemons.map((pokemon, index) => {
					//lets flip the card

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
										src='/images/memory-game/rick-morty-title2.JPG'
										alt='pokemon-name'
										width='150'
										height='150'
									/>
								</div>
							</div>
						</div>
					)
				})}
				<button onClick={() => setMatched([])}>Reset</button>
				<button
					onClick={() =>
						setOpenedCard([
							0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
						])
					}>
					Show all
				</button>
			</div>
		</div>
	)
}
