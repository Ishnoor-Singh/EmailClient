import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Drawer from '@material-ui/core/Drawer';
import MailIcon from '@material-ui/icons/Mail';

export default class SideBar extends Component {
    render() {
        return (
    <div z-index= {0}>
                <SideDrawer
        variant="persistent"
        anchor="left"
        open={this.props.open}
      >
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </SideDrawer>
    </div>
        )
    }
}


const drawerWidth = 240;

const SideDrawer = styled(Drawer)(({theme})=>({
    width : drawerWidth,
    flexShrink : 0,
    position: "static",
    top : 50,
    left : 0,
    zIndex:0,
}))

