import React from "react";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/styles";
import { Box, Button } from "@material-ui/core";
import ProfilePic from "./ProfilePic";

export default function ProfilePopup(props) {
  return (
    <div>
      <FlexContainer>
        <FirstRow>
          <ProflePicContainer>
            <ProfilePic name={props.name} size="large" />
          </ProflePicContainer>
          <NameArea>
            <NameText variant="h6">{props.name}</NameText>
            <EmailText variant="caption">{props.email}</EmailText>
          </NameArea>
        </FirstRow>
        <ButtonRow>
          <Box flexGrow={1}>
            <Button
              onClick={() =>
                props.history.push({ pathname: "/", location: props.location })
              }
            >
              Add Account
            </Button>
          </Box>
          <Button
            onClick={() =>
              props.history.push({ pathname: "/", location: props.location })
            }
          >
            Sign Out
          </Button>
        </ButtonRow>
      </FlexContainer>
    </div>
  );
}

const FlexContainer = styled(Box)({
  display: "flex",
  height: 150,
  width: 300,
  flexDirection: "column"
});

const FirstRow = styled(Box)({
  display: "flex",
  order: 0,
  flexDirection: "row",
  flexGrow: 1
});

const NameText = styled(Typography)({
  order: 0
});

const ProflePicContainer = styled(Box)({
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const NameArea = styled(Box)({
  order: 2,
  display: "flex",
  flexDirection: "column"
});

const EmailText = styled(Typography)({
  order: 2
});

const ButtonRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  paddingLeft: 10,
  paddingRight: 10
});
