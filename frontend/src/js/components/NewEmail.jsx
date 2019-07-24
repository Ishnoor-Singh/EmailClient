import React, { Component } from 'react'
import ComposeEmail from "./ComposeEmail"
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';

const styles = {
    floatingLabelFocusStyle: {
        color: "black"
    }
}


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
                    <ComposeText>Compose Email</ComposeText>
                    <CloseButton onClick = {this.props.toggleCompose}>
                        close
                    </CloseButton>
                </Top>
                <TextField
         label="Subject"
        // placeholder="Subject"
        fullWidth
        InputLabelProps={{
            style: { color: '#7c7c7c' },
          }}
      />
                      <TextField
         label="Reciepients"
        // placeholder="Subject"
        fullWidth
        InputLabelProps={{
            style: { color: '#7c7c7c' },
          }}
      />
 
                <Compose/>
            </Container>
        )
    }
}

const Top = styled.div`
    background-color: #404040;
    width: 100%;
    height: 30px;
    display:flex;
    flex-direction:row;
    order:0;
    color:white;
`

const Container = styled.div`
    display :flex;
    flex-direction:column;
    border : 5px solid #404040;
    width:100%;
    height:100%;
`
 const Compose = styled(ComposeEmail)`
    flex-grow:1;
    order:1;
    overflow:scroll;
 `

 const CloseButton = styled.button`
    color : white;
    background-color: transparent;
    border:none;
    align-self:end;
    height: 100%;
 `

 const ComposeText = styled.span`
    flex-grow:1;
 `