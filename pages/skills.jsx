import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineOppositeContent,
} from '@mui/lab'
import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'

import Layout from '../components/Layout'
import HeadTitle from '../components/layout/HeadTitle'
import { education } from '../data/data'
import classes from '../styles/skills.module.css'

export default function SkillsPage() {
	return (
		<Layout title='Skills' description='Check out my skills and cetifications'>
			<HeadTitle title='Skills' />
			<Timeline position='alternate'>
				{education.map((single) => (
					<TimelineItem key={single.id}>
						<TimelineOppositeContent color='text.secondary'>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'flex-end',
									flexWrap: 'wrap',
									'& > :not(style)': {
										p: 2,
										maxWidth: 600,
									},
								}}>
								<Paper elevation={3}>{single.description}</Paper>
							</Box>{' '}
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							{single.title} <br />
							{single.date}
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</Layout>
	)
}
