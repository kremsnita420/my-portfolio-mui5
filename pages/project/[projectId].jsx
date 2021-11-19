import { Typography, Container } from '@mui/material'
import { Box } from '@mui/system'
import Layout from '../../components/Layout'

import path from 'path'
import fs from 'fs/promises'
import HeadTitle from '../../components/layout/HeadTitle'

export default function SingleProjectPage(props) {
	const { filteredProject } = props

	console.log(filteredProject)

	return (
		<Layout
			title={filteredProject.title}
			description={filteredProject.description}>
			<Container maxWidth='sm'>
				<Box sx={{ marginTop: '2rem' }}>
					<HeadTitle title={filteredProject.title} />
				</Box>
			</Container>
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
