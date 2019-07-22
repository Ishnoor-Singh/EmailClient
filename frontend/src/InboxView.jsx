import React, { Component } from 'react';
import { styled, StylesProvider } from '@material-ui/styles';
import TopBar from "./js/components/TopBar";
import { Container } from '@material-ui/core';

export default class InboxView extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "User Name",
            menu : false
        }
        this.openMenu = this.openMenu.bind();
    }

    openMenu = () => {
        this.setState({menu : !this.state.menu});
        console.log(this.state.menu);
    } 

    render(props){
        return (
            <StylesProvider injectFirst>
            <Page>
                <TopBar name = {this.state.name} openMenu = {this.openMenu}/>
                {this.state.menu && <h1>sidebar</h1>}
            </Page>
            </StylesProvider>
        );
    }
}

const Page = styled('div')({
    position : "fixed",
    left : 0,
    top : 0,
    height : "100%",
    width : "100%"
})