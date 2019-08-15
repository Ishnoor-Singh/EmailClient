import React, { Component } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import { AppBar, Typography } from "@material-ui/core";
import { StylesProvider, styled } from "@material-ui/styles";
import { fade, makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import SideBarContents from "./js/components/SideBarContents";
import TopBar from "./js/components/TopBar";
import NewEmail from "./js/components/NewEmail";
import Email from "./js/components/Email";
import "./App.css";
import theme from "./js/components/theme";

const drawerWidth = 240;
axios.defaults.withCredentials = true;

export default class InboxView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      compose: false,
      name: "Name",
      email: "name@fakeEmail.com",
      catrgories: ["Today", "Yesterday", "Earlier this Month"],
      emails: []
    };
    this.toggleCompose = this.toggleCompose.bind();
    this.toggleDrawer = this.toggleDrawer.bind();
    axios({
      method: "get",
      url: "http://localhost:5000/user",
      withCredentials: true
    }).then(res => {
      this.setState({ name: res.data.user.name, email: res.data.user.emailId });
    });
    axios({
      method: "get",
      url: "http://localhost:5000/emails",
      withCredentials: true
    })
      .then(res => {
        console.log(res.data);
        console.log(this.state);
        // this.setState({
        //   emails:res.data.arr
        // })
        console.log(res.data);

        this.setState({
          emails: res.data.arr
        });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  toggleCompose = () => {
    this.setState((state, props) => {
      return { compose: !this.state.compose };
    });
  };

  toggleDrawer = () => {
    this.setState((state, props) => {
      return { open: !this.state.open };
    });
  };

  render() {
    return (
      <div>
        <StylesProvider injectFirst>
          <div display="flex">
            <MenuBar position="fixed">
              <TopBar
                toggleDrawer={this.toggleDrawer}
                name={this.state.name ? this.state.name : this.state.email}
                email={this.state.email}
                history={this.props.history}
                location={this.props.location}
              />
            </MenuBar>
            <EmailArea
              open={this.state.open}
              toggleCompose={this.state.toggleCompose}
              categories={this.state.catrgories}
              emails={this.state.emails}
            />
            {this.state.compose && (
              <ComposeContainer>
                {" "}
                <NewEmail toggleCompose={this.toggleCompose} />
              </ComposeContainer>
            )}

            {!this.state.compose && (
              <ComposeButton onClick={this.toggleCompose}>
                <AddIcon />
              </ComposeButton>
            )}
          </div>
        </StylesProvider>
      </div>
    );
  }
}

const useStyles = makeStyles({
  root: {
    display: "flex"
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: 0,
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: drawerWidth,
    marginRight: -drawerWidth
  }
});

const SideBar = ({ open }) => {
  const classes = useStyles();
  console.log(open);
  return (
    <SideDrawer
      variant="persistent"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <ToolBar />
      <SideBarContents />
    </SideDrawer>
  );
};

const EmailArea = props => {
  const classes = useStyles();
  console.log(props);
  return (
    <FlexBoxContainer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: props.open
        })}
      >
        <ToolBar />
        {props.categories.map(category => (
          <EmailCategory
            category={category}
            key={category}
            emails={props.emails}
          />
        ))}
      </main>
      <SideBar open={props.open} />
    </FlexBoxContainer>
  );
};

const EmailCategory = props => {
  var i = 0;
  return (
    <div>
      <Typography variant="overline" display="block">
        {props.category}
      </Typography>

      {props.emails &&
        props.emails.map(email => {
          i++;
          return <Email email={email} key={i} />;
        })}
      {!props.emails && [...Array(10)].map((e, i) => <Email key={i} />)}
    </div>
  );
};

const Bar = styled(AppBar)({
  backgroundColor: "#1976d2",
  Height: "10%",
  maxHeight: 80
});

const ComposeContainer = styled("div")({
  position: "fixed",
  backgroundColor: "white",
  right: "5%",
  bottom: "1%",
  minHeight: 500,
  minWidth: 400,
  height: "40%",
  width: "30%",
  border: 5,
  borderRadius: 3,
  display: "flex"
});

const ComposeButton = styled(Fab)({
  position: "fixed",
  right: "5%",
  bottom: "3%",
  backgroundColor: "#ea4334",
  color: "white",
  "&:hover": {
    backgroundColor: fade("#c71607", 1),
    color: fade("#e8e8e8", 1)
  }
});

const MenuBar = styled(Bar)({
  zIndex: 1201
});

const SideDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0
});

const ToolBar = styled("div")({
  marginTop: 70
});

const FlexBoxContainer = styled("div")({
  display: "flex",
  flexDirection: "row"
});
