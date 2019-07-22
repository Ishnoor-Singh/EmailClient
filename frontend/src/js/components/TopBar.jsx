import React, { Component } from 'react';
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle'
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';


class TopBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Name"
        }
    }
    render() {
        return (
            <StylesProvider injectFirst>
                <Bar position="static" width = "100%">
                    <MenuContainer>
                        <IconButton edge="start" color="inherit" aria-label="Menu">
                            <MenuIcon order =  "10"/>
                        </IconButton>
                        <Box flexGrow={1}>
                            <Typography  variant="h6">
                            Inbox
                            </Typography>
                        </Box>
                        <Typography  varient = "h6" color="inherit">{this.state.name}</Typography>
                        <MenuItem>
                            <AccountCircle></AccountCircle>
                        </MenuItem>
                    </MenuContainer>
                </Bar>
            </StylesProvider>
        );
    }
}

const Bar = styled(AppBar)`
    background-color : #1976d2;
    width : 100%;

    display: flex;
`
const MenuContainer = styled(Toolbar)`
    display : flex;
    flex-direction :row;
`
export default TopBar;