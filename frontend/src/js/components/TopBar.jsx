import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import ProfilePopup from "./ProfilePopup";
import ProfilePic from "./ProfilePic";
import SearchBar from "./SearchBar";

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popUp: false
    };
    this.togglePopup = this.togglePopup.bind();
  }

  togglePopup = () => {
    this.setState((state, props) => {
      return { popUp: !this.state.popUp };
    });
    console.log(this.state.popUp);
  };

  render(props) {
    console.log(this.props);
    return (
      <MenuContainer>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="Menu"
          onClick={this.props.toggleDrawer}
        >
          <MenuIcon order="10" />
        </IconButton>
        <Box flexGrow={1}>
          <Typography variant="h6">Inbox</Typography>
        </Box>
        <Box paddingRight={2}>
          <SearchBar />
        </Box>

        <Typography varient="h6" color="inherit">
          {this.props.name ? this.props.name : this.props.email}
        </Typography>

        <PopupState variant="popover" popupId="demo-popup-popover">
          {popupState => (
            <div>
              <IconButton {...bindTrigger(popupState)} color="inherit">
                <ProfilePic name={this.props.name} size="small" />
              </IconButton>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
              >
                <ProfilePopup
                  name={this.props.name}
                  email={this.props.email}
                  history={this.props.history}
                  location={this.props.location}
                />
              </Popover>
            </div>
          )}
        </PopupState>
      </MenuContainer>
    );
  }
}

const MenuContainer = styled(Toolbar)`
  display: flex;
  flex-direction: row;
`;
export default TopBar;
