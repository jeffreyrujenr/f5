'use client';

import Link from 'next/link';
import Image from 'next/image';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

const navItems = [
	{
		text: 'Invite',
		href: 'https://docs.google.com/forms/d/e/1FAIpQLSelqQZVu2BybvBFAuQqh9hx9ksqNn-jCSbQKaQ-3JLSxlJGUQ/viewform',
	},
	{
		text: 'Volunteer',
		href: 'https://docs.google.com/forms/d/1yIqavxRGwO2-281JZ1Y4k1iyjLHFtRpRBg4XXm2U96I',
	},
	{ text: 'Contact Us', href: '/#contact' },
];

const Navbar = (props) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box sx={{ textAlign: 'center' }}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '80%',
					marginX: 'auto',
				}}>
				<IconButton
					color='inherit'
					edge='start'
					onClick={handleDrawerToggle}
					sx={{ mr: 2, display: { sm: 'none' } }}>
					<CloseIcon />
				</IconButton>
				<Image
					className='rounded-full h-[7vh] w-[7vh]'
					src='/logo/F5 Logo-color black.png'
					alt='F5 moments logo'
					height={128}
					width={128}
				/>
			</Box>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem
						key={item}
						disablePadding>
						<Link
							className='w-[80%] mx-auto hover:bg-gradient rounded'
							target={item.href !== '/#contact' ? '_blank' : ''}
							href={item.href}>
							<ListItemButton
								sx={{ textAlign: 'center' }}
								onClick={handleDrawerToggle}>
								<ListItemText>{item.text}</ListItemText>
							</ListItemButton>
						</Link>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<>
			<AppBar component='nav'>
				<Toolbar
					sx={{
						backgroundColor: '#111',
						display: 'flex',
						justifyContent: 'space-between',
					}}>
					<IconButton
						color='inherit'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}>
						<MenuIcon />
					</IconButton>
					<Link
						href='/#hero'
						className='hover:opacity-80'>
						<Image
							className='rounded-full h-[7vh] w-[7vh]'
							src='/logo/F5 Logo-color black.png'
							alt='F5 moments logo'
							height={128}
							width={128}
						/>
					</Link>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map((item) => (
							<Button
								key={item}
								className='hover:bg-gradient'
								sx={{ color: '#fff' }}>
								<Link
									target={item.href !== '/#contact' ? '_blank' : ''}
									href={item.href}>
									{item.text}
								</Link>
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: '100%',
							backgroundColor: '#111',
							color: '#fff',
						},
					}}>
					{drawer}
				</Drawer>
			</Box>
		</>
	);
};
export default Navbar;
