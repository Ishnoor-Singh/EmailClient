import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { StylesProvider } from '@material-ui/styles'
import SideBarContents from './js/components/SideBarContents';
import TopBar from './js/components/TopBar';
import NewEmail from "./js/components/NewEmail"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {styled} from '@material-ui/styles';
import theme from './js/components/theme.js'
import Email from './js/components/Email';

const drawerWidth = 240;



export default class InboxView extends Component {
  constructor(props){
    super(props);
    this.state= {
      open : false,
      compose : false,
      name : "Name",
      email : "name@fakeEmail.com"
    }
    this.toggleCompose = this.toggleCompose.bind();
    this.toggleDrawer = this.toggleDrawer.bind();
  }

  toggleCompose = () => {
    this.setState((state, props) => { return { compose : !this.state.compose }})
  }

  toggleDrawer = () => {
    this.setState((state, props) => { return { open : !this.state.open }})
    
  }

  render() {
    return (
      <div>
        <StylesProvider injectFirst >
    <div display = "flex"> 
        <MenuBar position="fixed">
          <TopBar toggleDrawer = {this.toggleDrawer} name = {this.state.name} email= {this.state.email} history = {this.props.history} location = {this.props.location}></TopBar>
        </MenuBar>
        <FlexBoxContainer>
        {this.state.open && 
        <SideDrawer
        variant="permanent"
        >
        <ToolBar />
        <SideBarContents/>
        </SideDrawer>}
        <FlexEmailContainer>
        <ToolBar />

         <Email toggleCompose= {this.toggleCompose}/>
        </FlexEmailContainer>
        </FlexBoxContainer>
        
            {this.state.compose &&<ComposeContainer> <NewEmail  toggleCompose = {this.toggleCompose}/></ComposeContainer>}
          
            {!this.state.compose && <ComposeButton onClick = {this.toggleCompose} >
            <AddIcon />
            
          </ComposeButton>}
      </div>
    </StylesProvider>
      </div>
    )
  }
}


const Bar = styled(AppBar)({    
  backgroundColor : "#1976d2",
  Height:"10%",
  maxHeight:80
})

const ComposeContainer = styled('div')({
  position: "fixed",
  backgroundColor:"white",
  right: "5%",
  bottom: "1%",
  minHeight:500,
  minWidth:400,
  height: "40%",
  width: "30%",
  border:5,
  borderRadius:3,
  display:"flex"
})

const ComposeButton = styled(Fab)({
position: "fixed",
right: "5%",
bottom: "3%"
})

const MenuBar = styled(Bar)(({theme})=>({
  zIndex: 1201,
}))

const SideDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
})

const ToolBar = styled('div')(({theme})=>({
  marginTop:70
}))

const FlexBoxContainer = styled('div')({
  display: "flex",
  flexDirection:"row",
})

const FlexEmailContainer = styled('div')({
  flexGrow:1,
  order:2,

})
