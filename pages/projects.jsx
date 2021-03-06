import {
	Button,
	ToggleButton,
	Card,
	Typography,
	CardContent,
	CardActions,
	Grid,
	Badge,
	Link,
	CardMedia,
	ToggleButtonGroup,
} from '@mui/material'
import { Box } from '@mui/system'
import NextLink from 'next/link'
import NextImage from 'next/image'

import Layout from '../components/layout/Layout'
import { styled } from '@mui/styles'

import path from 'path'
import fs from 'fs/promises'
import HeadTitle from '../components/layout/HeadTitle'

import { useState } from 'react'

export default function ProjectsPage({ projects }) {
	const StyledBadge = styled(Badge)(({ theme }) => ({
		'& .MuiBadge-badge': {
			right: '-50%',
			top: '50%',
			border: `2px solid ${theme.palette.primary.main}`,
			padding: '5px',
		},
	}))

	// get unique category items
	const uniqueItems = (x, i, array) => array.indexOf(x) === i
	const PRODUCT_CATEGORIES = projects
		.map((prod) => prod.category)
		.filter(uniqueItems)
	PRODUCT_CATEGORIES.sort()

	const [projectCategory, setProjectCategory] = useState('')

	//toggle active buttons
	const [alignment, setAlignment] = useState('left')

	const handleAlignment = (event, newAlignment) => {
		event.preventDefault()
		setAlignment(newAlignment)
	}

	console.log(alignment)

	return (
		<Layout title='Projects' description='List of my best projects'>
			<Box sx={{ marginTop: '2rem' }}>
				<HeadTitle title='Projects' />

				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						'& > *': {
							m: 2,
						},
					}}>
					<ToggleButtonGroup
						variant='contained'
						value={alignment}
						exclusive
						onChange={handleAlignment}
						aria-label='text alignment'>
						<ToggleButton
							variant='contained'
							value='center'
							aria-label='centered'
							color='primary'
							onClick={() => setProjectCategory('')}>
							All
						</ToggleButton>
						{PRODUCT_CATEGORIES.map((category, index) => (
							<ToggleButton
								variant='contained'
								color='secondary'
								value={category}
								onClick={() => {
									setProjectCategory(category)
								}}
								key={index}>
								{category}
							</ToggleButton>
						))}
					</ToggleButtonGroup>
				</Box>

				<Grid container spacing={2}>
					{projects
						.filter((filterProject) =>
							filterProject.category.includes(projectCategory)
						)
						.map((project) => (
							<Grid xs={12} md={6} lg={4} item key={project.id}>
								<Card>
									<CardMedia>
										<NextLink href={`/project/${project.id}`} passHref>
											<Link>
												<NextImage
													placeholder='blur'
													blurDataURL='https://images.unsplash.com/photo-1613387275674-cb92af1c29d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
													src={project.image[0]}
													alt={project.image[0].title}
													width={800}
													height={400}
													layout='responsive'
													priority='high'
													rel='preload'
													as='image'
												/>
											</Link>
										</NextLink>
									</CardMedia>

									<CardContent>
										<StyledBadge
											badgeContent={project.category}
											color='secondary'
											horizontal='left'>
											<Typography gutterBottom variant='h5' component='div'>
												{project.title}
											</Typography>
										</StyledBadge>
										<Typography variant='body2' color='text.secondary'>
											{project.description}
										</Typography>
									</CardContent>

									<CardActions>
										<NextLink href={project.gitLink} passHref>
											<Link target='_blank'>
												<Button
													aria-label='external link'
													rel='noopener'
													variant='outlined'
													size='large'>
													Github
												</Button>
											</Link>
										</NextLink>

										<NextLink href={project.webLink} passHref>
											<Link target='_blank'>
												<Button
													aria-label='external link'
													rel='noopener'
													variant='contained'
													size='medium'>
													Live Site
												</Button>
											</Link>
										</NextLink>
									</CardActions>
								</Card>
							</Grid>
						))}
				</Grid>
			</Box>
		</Layout>
	)
}

export async function getStaticProps() {
	//node.js file sistem
	//define working directory, folder and file path
	const filePath = path.join(process.cwd(), 'data', 'projects-list.json')
	//define data and parse it
	const jsonData = await fs.readFile(filePath)
	const data = JSON.parse(jsonData)

	//extract categories
	const categories = data.projectsData.map((project) => project.category)
	const extractedCategories = categories.filter((value, index, array) => {
		return array.indexOf(value) === index
	})

	return {
		props: {
			projects: data.projectsData,
			categories: extractedCategories,
		},
	}
}
