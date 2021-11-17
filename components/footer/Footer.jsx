import { useContext, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import { AppBar, Container, Link, Toolbar, Typography } from '@mui/material'

function Footer() {
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

// MAKE CART RENDER ON CLIENTSIDE
export default dynamic(() => Promise.resolve(Footer), { ssr: false })
