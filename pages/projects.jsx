import {
	Button,
	CardMedia,
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
import { useRouter } from 'next/router'

import { projectsData } from '../data/data'

import Layout from '../components/Layout'
import { styled } from '@mui/styles'

import path from 'path'
import fs from 'fs/promises'

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		right: '-50%',
		top: '50%',
		border: `2px solid red`,
		padding: '5px',
	},
}))

export default function ProjectsPage({ projects }) {
	const router = useRouter()
	const { projectId } = router.query
	console.log(projects)
	return (
		<Layout title='Projects'>
			<Box sx={{ marginTop: '2rem' }}>
				<Typography
					sx={{ textAlign: 'center' }}
					variant='h1'
					component='h1'
					gutterBottom>
					All Projects Page
				</Typography>

				<Grid container spacing={2}>
					{projects.map((project) => (
						<Grid sx={12} md={6} lg={4} item key={project.id}>
							<NextLink href={`/project/${project.id}`} passHref>
								<Link>
									<Card>
										<NextImage
											src={project.image}
											width={800}
											height={400}
											layout='responsive'
										/>

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
											<Button
												target='_blank'
												href={project.gitLink}
												size='small'>
												Github
											</Button>
											<Button
												target='_blank'
												href={project.webLink}
												size='small'>
												Live Site
											</Button>
										</CardActions>
									</Card>
								</Link>
							</NextLink>
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
