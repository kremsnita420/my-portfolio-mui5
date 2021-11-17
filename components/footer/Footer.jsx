import { useContext, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import {
	AppBar,
	Button,
	Container,
	Drawer,
	IconButton,
	Link,
	Toolbar,
	Typography,
} from '@mui/material'
import {
	ArrowForwardIosOutlined,
	ArrowBackIosOutlined,
	WbSunnyIcon,
	Brightness2Icon,
} from '@mui/icons-material'
import classes from '../../src/styles'

import MenuItems from './MenuItems'
import { Store } from '../../src/StoreProvider'
import Cookies from 'js-cookie'
import { motion } from 'framer-motion'

export default function Footer() {
	return (
		<AppBar position='relative'>
			<Container maxWidth='md'>
				<Toolbar>
					{/* logo */}
					<Typography variant='h4' component='div'>
						<NextLink href='/' passHref>
							<Link color='secondary'>
								{`<`}
								<span style={{ color: '#eee' }}>{` SafetDev `}</span>
								{`/>`}
							</Link>
						</NextLink>
					</Typography>

					<Box style={{ flexGrow: '1' }} />
				</Toolbar>
			</Container>
		</AppBar>
	)
}
