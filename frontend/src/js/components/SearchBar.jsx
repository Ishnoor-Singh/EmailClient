import React, { Component } from "react";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import theme from "./theme";
import { styled } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
	searchIcon: {
		width: theme.spacing(7),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	inputRoot: {
		color: "inherit"
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: 120,
			"&:focus": {
				width: 200
			}
		}
	}
}));

const SearchBar = () => {
	const classes = useStyles();
	console.log(theme);
	return (
		<div>
			<SearchContainer>
				<SearchIconContainer>
					<SearchIcon />
				</SearchIconContainer>
				<InputBase
					placeholder="Search…"
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput
					}}
					inputProps={{ "aria-label": "Search" }}
				/>
			</SearchContainer>
		</div>
	);
};

const SearchContainer = styled("div")({
	position: "relative",
	borderRadius: 4,
	backgroundColor: fade("#fff", 0.15),
	"&:hover": {
		backgroundColor: fade("#fff", 0.25)
	},
	marginLeft: 0,
	width: "100%"
});

const SearchIconContainer = styled("div")({
	width: "56dp",
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
    justifyContent: "center",
    paddingLeft:10
});

export default SearchBar;
