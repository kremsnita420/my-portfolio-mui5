import {
	Button,
	Card,
	Typography,
	CardContent,
	CardActions,
	Grid,
	Badge,
	Link,
} from '@mui/material'
import { Box } from '@mui/system'
import NextLink from 'next/link'
import NextImage from 'next/image'

import Layout from '../components/Layout'
import { styled } from '@mui/styles'

import path from 'path'
import fs from 'fs/promises'
import HeadTitle from '../components/layout/HeadTitle'

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		right: '-50%',
		top: '50%',
		border: `2px solid red`,
		padding: '5px',
	},
}))

export default function ProjectsPage({ projects }) {
	return (
		<Layout title='Projects'>
			<Box sx={{ marginTop: '2rem' }}>
				<HeadTitle title='Projects' />

				<Grid container spacing={2}>
					{projects.map((project) => (
						<Grid xs={12} md={6} lg={4} item key={project.id}>
							<Card>
								<NextLink href={`/project/${project.id}`} passHref>
									<Link>
										<NextImage
											src={project.image}
											width={800}
											height={400}
											layout='responsive'
										/>
									</Link>
								</NextLink>

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
											<Button size='small'>Github</Button>
										</Link>
									</NextLink>

									<NextLink href={project.gitLink} passHref>
										<Link target='_blank'>
											<Button size='small'>Live Site</Button>
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

	return {
		props: {
			projects: data.projectsData,
		},
	}
}
