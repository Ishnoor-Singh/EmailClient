// import React, { Component } from 'react';
// import { styled, StylesProvider } from '@material-ui/styles';
// import TopBar from "./js/components/TopBar";
// import { Container } from '@material-ui/core';
// import Drawer from '@material-ui/core/Drawer';
// import SideBarContents from './js/components/SideBarContents';
// import { makeStyles } from '@material-ui/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';


// const drawerWidth = 240;

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//      zIndex: theme.zIndex.drawer + 1,
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//     paddingTop: 56
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     flexGrow: 1,
//     // padding: theme.spacing(3),
//   },
// //   toolbar: theme.mixins.toolbar,
// }));




// export default class InboxView extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             name : "User Name",
//             menu : false
//         }
//         this.openMenu = this.openMenu.bind();
//     }

//     openMenu = () => {
//         this.setState({menu : !this.state.menu});
//         console.log(this.state.menu);
//     } 

//     render(props){
//         return (
//             <StylesProvider injectFirst>
//             <CssBaseline />
//             <Page>
//                 <TopBarContainer>
//                     <TopBar name = {this.state.name} openMenu = {this.openMenu} />
//                 </TopBarContainer>
//                 {this.state.menu && <SideBar/>}

//             </Page>
//             </StylesProvider>
//         );
//     }
// }

// const Page = styled('div')({
//     position : "fixed",
//     left : 0,
//     top : 0,
//     height : "100%",
//     width : "100%"
// })

// const TopBarContainer = styled('div')(({theme})=>({
// }))

// const SideBar = () =>{
//     const classes = useStyles();
//     return(
//     <Drawer 
//     style={{position:'relative', zIndex: 1}} 
//     variant = "permanent" 
//     >
//     <div className = {classes.toolbar}>
//         <SideBarContents/>
//     </div>
//     </Drawer>)
// }












// -------------------------------------------------------------------------------------
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle'
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import { StylesProvider } from '@material-ui/styles'
import SideBarContents from './js/components/SideBarContents';
import TopBar from './js/components/TopBar';
import ComposeEmil from './js/components/ComposeEmail';
import NewEmail from "./js/components/NewEmail";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("Name");

  function toggleDrawer() {
      setOpen(!open);
  }


  return (
    <StylesProvider injectFirst>
    <div className={classes.root}>
        <Bar position="fixed"  className = {classes.appBar}>
        <TopBar toggleDrawer = {toggleDrawer} name = {name}/>
        </Bar>
        {open && 
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        >
        <div className={classes.toolbar} />
        <SideBarContents/>
        </Drawer>}
      
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        {/**
        array.forEach(el=><EMail el = {el}/>)
         */}
        <ComposeContainer>
          <NewEmail/>
        </ComposeContainer>
      </main>
    </div>
    </StylesProvider>
  );
}

const Bar = styled(AppBar)`
    background-color : #1976d2;
`
const MenuContainer = styled(Toolbar)`
    display : flex;
    flex-direction :row;
`

const ComposeContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  min-height:500px;
  min-width:400px;
  height: 40%;
  width: 30%;
  background-color: white;
  border:5px;
  border-radius:3px
`