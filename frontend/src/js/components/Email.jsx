import React, { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { styled } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import ProfilePic from "./ProfilePic";
import theme from "./theme";

export default class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: {
        name: "Name of sender",
        email: "senderEmail@fakeEmail.com"
      },
      content:
        "Consequat mauris nuncCongue nisi vitae suscipit. Fringilla est ullamcorper eget nullafacilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat actincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpaconsequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sedvulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Ihendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et.",
      pinned: false,
      subject: "thus is the subject",
      cc: ["first", "second"],
      bcc: ["first", "third"]
    };
  }

  render() {
    console.log(this.state.pinned + this.state.cc + this.state.bcc);
    return (
      <Container>
        <ExpansionPanel>
          <ExpansionPanelSummary>
            <Box
              display="flex"
              bcackgroundColor="red"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <ContainerColumn order={0} paddingRight={5}>
                <ProfilePic
                  size="small"
                  name={
                    this.state.sender.name
                      ? this.state.sender.name
                      : this.state.email
                  }
                />
              </ContainerColumn>
              <ContainerColumn order={0} paddingRight={10}>
                <ContainerHeading>
                  {this.state.sender.name
                    ? this.state.sender.name
                    : this.state.email}
                </ContainerHeading>
              </ContainerColumn>
              <ContainerColumn flexGrow={1} paddingRight={10}>
                <ContainerSecHeading>
                  <b>{`${this.state.subject}...  `}</b>
                  {`${this.state.content.substring(
                    0,
                    150 - this.state.subject.length
                  )}...`}
                </ContainerSecHeading>
              </ContainerColumn>
              <ContainerColumn alignSelf="flex-end" order={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      CheckedIcon={<Favorite />}
                      value="checkedH"
                    />
                  }
                />
              </ContainerColumn>
            </Box>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <Typography variant="caption">
                {this.state.content}
                <br />
              </Typography>
            </div>
          </ExpansionPanelDetails>
          <ExpansionPanelActions>
            <Button
              size="small"
              color="primary"
              onClick={this.props.toggleCompose}
            >
              Reply
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </Container>
    );
  }
}

const Container = styled("div")({
  width: "100%",
  paddingBottom: 5
});

const ContainerHeading = styled("Typography")({
  fontSize: theme.typography.pxToRem(15)
});

const ContainerColumn = styled(Box)({});

const ContainerSecHeading = styled("Typography")({
  fontSize: theme.typography.pxToRem(15),
  color: theme.palette.text.secondary
});
