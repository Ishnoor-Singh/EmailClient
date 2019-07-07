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


class Inbox extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Name"
        }
    }
    render() {
        return (
            <StylesProvider injectFirst>
            <Page>
                <TopBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            Inbox
                        </Typography>
                        <Typography varient = "h6" color="inherit">{this.state.name}</Typography>
                        <MenuItem>
                            <AccountCircle></AccountCircle>
                        </MenuItem>
                    </Toolbar>
                </TopBar>
            </Page>
            </StylesProvider>
        );
    }
}

const TopBar = styled(AppBar)`
    background-color : #1976d2;
    width : 100%;
    padding : 0;
    display: flex;
`

const Page = styled(Container)`
    padding: 0;
`

export default Inbox;