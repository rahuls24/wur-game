import * as React from 'react';
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	Avatar,
	Button,
	Tooltip,
	MenuItem,
	Drawer,
	Divider,
	ListItem,
	ListItemIcon,
	ListItemText,
	List,
} from '@mui/material';
import {
	Menu as MenuIcon,
	AccountBalanceWallet,
	BorderColor,
	Lock,
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';
const pages = ['MoneyManager', 'Notes', 'PasswordManager'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));
const navItems = [
	{ name: 'MoneyManager', icon: AccountBalanceWallet },
	{ name: 'Notes', icon: BorderColor },
	{ name: 'PasswordManager', icon: Lock },
];
const Navbar = () => {
	// eslint-disable-next-line no-unused-vars
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = event => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
					>
						LOGO
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleDrawerOpen}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Drawer
							sx={{
								width: drawerWidth,
								flexShrink: 0,
								'& .MuiDrawer-paper': {
									width: drawerWidth,
									boxSizing: 'border-box',
								},
							}}
							variant='persistent'
							anchor='left'
							open={open}
						>
							<DrawerHeader>
								<IconButton onClick={handleDrawerClose}>
									{theme.direction === 'ltr' ? (
										<ChevronLeftIcon />
									) : (
										<ChevronRightIcon />
									)}
								</IconButton>
							</DrawerHeader>
							<Divider />
							<Divider />
							<List>
								{navItems.map(navItem => (
									<ListItem button key={navItem.name}>
										<ListItemIcon>
											<navItem.icon />
										</ListItemIcon>
										<ListItemText primary={navItem.name} />
									</ListItem>
								))}
							</List>
						</Drawer>
					</Box>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
					>
						LOGO
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map(page => (
							<Button
								key={page}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map(setting => (
								<MenuItem key={setting} onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
