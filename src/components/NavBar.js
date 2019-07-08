import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import Computer from '@material-ui/icons/Computer';

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1,
		color: 'white',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
		paddingLeft: '4px',
	},
	meniu: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: {
		paddingRight: '6vw',
		paddingLeft: '6vw',
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.dark,
		font: 'bold',
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}));

export default function NavBar() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	function handleProfileMenuOpen(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleMobileMenuClose() {
		setMobileMoreAnchorEl(null);
	}

	function handleMenuClose() {
		setAnchorEl(null);
		handleMobileMenuClose();
	}

	function handleMobileMenuOpen(event) {
		setMobileMoreAnchorEl(event.currentTarget);
	}

	const menuId = 'primary-search-account-menu';
	//   const renderMenu = (
	//     <Menu
	//       anchorEl={anchorEl}
	//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
	//       id={menuId}
	//       keepMounted
	//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
	//       open={isMenuOpen}
	//       onClose={handleMenuClose}
	//     >
	//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
	//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
	//     </Menu>
	//   );

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}>
			<MenuItem>
				<p>Pricing</p>
			</MenuItem>
			<MenuItem>
				<p>Learn</p>
			</MenuItem>
			<MenuItem>
				<p>Log in</p>
			</MenuItem>
			<MenuItem>
				<p>Free Trial</p>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar position='static'>
				<Toolbar className={classes.toolbar}>
					<Computer className={classes.icon} />
					<Typography className={classes.title} variant='h5' noWrap>
						CompanyName
					</Typography>
					<List component='nav' className='meniu' aria-controls={menuId}>
						<ListItem component='div'>
							<ListItemText inset>
								<TypoGraphy color='inherit' variant='title'>
									Start
								</TypoGraphy>
							</ListItemText>

							<ListItemText inset>
								<TypoGraphy color='inherit' variant='title'>
									Sell
								</TypoGraphy>
							</ListItemText>

							<ListItemText inset>
								<TypoGraphy color='inherit' variant='title'>
									Market
								</TypoGraphy>
							</ListItemText>

							<ListItemText inset>
								<TypoGraphy color='inherit' variant='title'>
									Manage
								</TypoGraphy>
							</ListItemText>
						</ListItem>
					</List>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<IconButton color='inherit'>Pricing</IconButton>
						<IconButton color='inherit'>Learn</IconButton>
						<IconButton color='inherit'>Log in</IconButton>
						<IconButton color='inherit'>Free Trial</IconButton>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label='Show more'
							aria-controls={mobileMenuId}
							aria-haspopup='true'
							onClick={handleMobileMenuOpen}
							color='inherit'>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
		</div>
	);
}
