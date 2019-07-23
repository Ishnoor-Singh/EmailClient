import React, { Component } from 'react'
import ComposeEmail from "./ComposeEmail"
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';


export default class NewEmail extends Component {
    constructor(props){
        super(props);
        this.state = {
            subject : "Subject",
            reciepient: "Reciepient",
        }
    }
    render() {
        return (
            <Container>
                <Top>
                    Compose Email
                </Top>
                <TextField
        label="Send To"
        placeholder="Send To"
        fullWidth
        margin="normal"
        variant="filled"
        // InputLabelProps={{
        //   shrink: true,
        // }}
      />
 
                <Compose/>
            </Container>
        )
    }
}

const Top = styled.div`
    background-color: black;
    width: 100%;
    height: 30px;
    display:flex;
    order:0;
    color:white;
    padding:4px;
`

const Container = styled.div`
    display :flex;
    flex-direction:column;
    border-color:black;
    border:5px;
    border-style:solid;
    border-radius:5px;
    width:100%;
    height:100%;
`
 const Compose = styled(ComposeEmail)`
    flex-grow:1;
    order:1;
    overflow:scroll;
 `