import { Paper, Grid } from '@mui/material'
import Image from 'next/image'
import { Box } from '@mui/system'
import Layout from '../../components/layout/Layout'

import path from 'path'
import fs from 'fs/promises'
import HeadTitle from '../../components/layout/HeadTitle'
import { useState } from 'react'

export default function SingleProjectPage(props) {
	const { filteredProject } = props
	const [selectedImage, setSelectedImage] = useState(filteredProject.image[2])

	console.log(filteredProject)

	return (
		<Layout
			title={filteredProject.title}
			description={filteredProject.description}>
			<HeadTitle title={filteredProject.title} />

			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Box>
						<Paper elevation={3}>
							<Box
								sx={{
									mt: 2,

									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<Image
									src={selectedImage}
									alt='thumbnail'
									width={1600}
									height={600}
								/>
							</Box>
						</Paper>
						<Paper elevation={3}>
							<Box
								sx={{
									m: 2,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								{filteredProject.image.map((img, i) => (
									<Box
										key={i}
										sx={{
											border:
												selectedImage === img
													? '5px solid'
													: '5px solid transparent',
										}}>
										<Image
											onClick={() => setSelectedImage(img)}
											src={img}
											alt='thumbnail'
											width={100}
											height={100}
										/>
									</Box>
								))}
							</Box>
						</Paper>
					</Box>
				</Grid>

				<Grid item xs={12} lg={6}>
					<Box>
						<Paper elevation={3}></Paper>
					</Box>
				</Grid>
			</Grid>
		</Layout>
	)
}

async function getData() {
	//node.js file sistem
	//define working directory, folder and file path
	const filePath = path.join(process.cwd(), 'data', 'projects-list.json')
	//define data and parse it
	const jsonData = await fs.readFile(filePath)
	const data = JSON.parse(jsonData)
	return data
}

export async function getStaticProps(context) {
	const { params } = context
	const projectIdSingle = params.projectId

	const data = await getData()

	//filter results and return only one that matches with id
	const project =
		data.projectsData.find((project) => project.id === projectIdSingle) || null

	//define fallback if data are not found
	if (!project) {
		return { notFound: true }
	}

	return {
		props: {
			filteredProject: project,
		},
	}
}

export async function getStaticPaths() {
	const data = await getData()

	//extract id for every project
	const ids = data.projectsData.map((project) => project.id)
	const pathsWithParams = ids.map((id) => ({ params: { projectId: id } }))

	return {
		paths: pathsWithParams,
		fallback: false,
	}
}
