import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		padding: '0 10vw',
		height: '30vw',
		backgroundColor: theme.palette.primary.light,
		borderTop: '1px solid',
		paddingTop: '7vh',
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.gridContainer} />
		</div>
	);
}
