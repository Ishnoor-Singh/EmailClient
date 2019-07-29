import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import {styled} from '@material-ui/styles';
import { Box, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle'
import ProfilePic from './ProfilePic';


export default class ProfilePopup extends Component {
    render() {
        return (
            <div>
                <FlexContainer>
                    <FirstRow>
                        <ProflePicContainer>
                        <ProfilePic name = {this.props.name} size = "large"/>
                        </ProflePicContainer>
                        <NameArea>
                            <NameText variant= "h6">{this.props.name}</NameText>
                            <EmailText variant="caption">{this.props.email}</EmailText> 
                        </NameArea>
                    </FirstRow>
                    <ButtonRow>
                        <Box flexGrow={1}>
                            <Button onClick = {()=> this.props.history.push({pathname: "/", location: this.props.location})}>Add Account</Button>
                        </Box>
                        <Button onClick = {()=> this.props.history.push({pathname: "/" , location: this.props.location})}>Sign Out</Button>
                    </ButtonRow>
                </FlexContainer>
            </div>
        )
    }
}



const FlexContainer = styled(Box)({
    display:"flex",
    height:150,
    width:300,
    flexDirection:"column",
})

const FirstRow = styled(Box)({
    display:"flex",
    order:0,
    flexDirection: "row",
    flexGrow:1,
})

const NameText = styled( Typography )({
    order:0,
})

const ProflePicContainer = styled ( Box )({
    width:'50%',
    height:'100%',
    display:"flex",
    alignItems:'center',
    justifyContent:'center'
})

const NameArea = styled ( Box )({
    order:2,
    display:'flex',
    flexDirection: 'column'
})

const EmailText = styled( Typography )({
    order:2
})

const ButtonRow = styled( Box )({
    display:'flex',
    flexDirection:'row',
    paddingLeft:10,
    paddingRight:10,
})

