import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import ComposeEmail from "./ComposeEmail";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#1976d2"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#1976d2"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green"
      }
    }
  }
})(TextField);

export default class NewEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "Subject",
      reciepient: "Reciepient"
    };
  }

  render() {
    console.log(this.state.reciepient + this.state.subject);
    return (
      <Container>
        <Top>
          <ComposeText>Compose Email</ComposeText>
          <CloseButton onClick={this.props.toggleCompose}>close</CloseButton>
        </Top>
        <CssTextField
          label="Subject"
          fullWidth
          InputLabelProps={{
            style: { color: "#7c7c7c" }
          }}
        />
        <CssTextField
          label="Reciepients"
          fullWidth
          InputLabelProps={{
            style: { color: "#7c7c7c" }
          }}
        />

        <Compose />
      </Container>
    );
  }
}

const Top = styled.div`
  background-color: #404040;
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  order: 0;
  color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #404040;
  width: 100%;
  height: 100%;
`;
const Compose = styled(ComposeEmail)`
  flex-grow: 1;
  order: 1;
  overflow: scroll;
  width: 100%;
`;

const CloseButton = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  align-self: end;
  height: 100%;
`;

const ComposeText = styled.span`
  flex-grow: 1;
`;
