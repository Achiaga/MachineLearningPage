import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Computer from '@material-ui/icons/Computer';
import Arrow from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles(theme => ({
	toolbar: {
		padding: '0 6vw',
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.dark,
		width: 'auto',
		height: '60px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	logo: {
		display: 'flex',
		alignItems: 'center',
		fontSize: '30px',
		marginRight: '10px',
		height: '100%',
	},

	item: {
		padding: '0 1.1vw',
		fontSize: '20px',
		fontWeight: '600',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		'&:hover': {
			backgroundColor: 'rgba(107, 107, 107, 0.63)',
			cursor: 'pointer',
		},
	},

	items: {
		display: 'flex',
		height: '100%',
	},
	icon: {
		paddingTop: '4px',
		paddingLeft: '3px',
		'&:hover': {
			color: '#fff',
		},
	},
}));

export default function NavBar() {
	const classes = useStyles();

	return (
		<div position='static'>
			<div className={classes.toolbar}>
				<div className={classes.items}>
					<div className={classes.item} style={{ fontSize: '26px' }}>
						CompanyName
					</div>
					<div className={classes.item}>
						Start <Arrow className={classes.icon} />
					</div>
					<div className={classes.item}>
						Sell <Arrow className={classes.icon} />
					</div>
					<div className={classes.item}>
						Market <Arrow className={classes.icon} />
					</div>
					<div className={classes.item}>
						Manage <Arrow className={classes.icon} />
					</div>
				</div>

				<div className={classes.items}>
					<div className={classes.item}>Pricing</div>
					<div className={classes.item}>
						Learn <Arrow className={classes.icon} />
					</div>
					<div className={classes.item}>Log in</div>
					<div className={classes.item}>Free Trial</div>
				</div>
			</div>
		</div>
	);
}
